<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useECharts } from '/@/hooks/useECharts'
interface BarInfo {
  name: string
  value: number
}
export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    },
    barDatas: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>)

    watch(
      () => props.barDatas,
      () => {
        upDateBarEchart(props.barDatas as BarInfo[])
      }
    )

    onMounted(() => {
      // test
      let bardatas: BarInfo[] = [
        // 5000, 2600, 1300,
        // {
        //   name: '制造业',
        //   value: 5000
        // },
        // {
        //   name: '建筑业',
        //   value: 2600
        // },
        // {
        //   name: '农林牧渔',
        //   value: 1300
        // },
        // {
        //   name: '房地产',
        //   value: 1250
        // }
      ]
      upDateBarEchart(bardatas)
    })
    const upDateBarEchart = (barDatas: BarInfo[]) => {
      let xDatas: string[] = _getXDatas(barDatas)
      let datas: number[] = _getDatas(barDatas)

      setOptions({
        backgroundColor: 'white',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '16%',
          right: '3%',
          left: '5%',
          bottom: '12%'
        },
        xAxis: [
          {
            type: 'category',
            // data: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业', '居民服务及其他']
            data: [...xDatas]
          }
        ],
        yAxis: [
          {
            // name: '单位：万元',
            axisLabel: {
              formatter: '{value}'
            },
            axisLine: {
              show: true
            },
            splitLine: {
              lineStyle: {
                color: '#f0f0f0',
                opacity: 0.4
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            // data: [5000, 2600, 1300, 1300, 1250, 1500],
            data: [...datas],
            // 柱子大小
            barWidth: 20,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#41E1D4' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#10A7DB' // 100% 处的颜色
                  }
                ],
                false
              ),
              // barBorderRadius: [30, 30, 0, 0],
              borderRadius: [30, 30, 0, 0],
              shadowColor: 'rgba(0,255,225,0.6)',
              shadowBlur: 1
            },
            label: {
              show: true,
              position: 'top'
            }
          }
        ]
      }) // end setOption
    }
    const _getXDatas = (barDatas: BarInfo[] = []): string[] => {
      return barDatas.map((item) => {
        return item.name
      })
    }
    const _getDatas = (barDatas: BarInfo[] = []): number[] => {
      return barDatas.map((item) => {
        return item.value
      })
    }
    return {
      chartRef
    }
  }
})
</script>

<style scoped></style>
