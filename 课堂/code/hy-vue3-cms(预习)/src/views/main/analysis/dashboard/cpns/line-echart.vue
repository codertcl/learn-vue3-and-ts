<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useECharts } from '/@/hooks/useECharts'
interface LineInfo {
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
    lineDatas: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>)
    watch(
      () => props.lineDatas,
      () => {
        upDateLineEchart(props.lineDatas as LineInfo[])
      }
    )

    onMounted(() => {
      // 测试数据
      let linedatas: LineInfo[] = [
        // {
        //   name: '2017',
        //   value: 502.12
        // },
        // {
        //   name: '2018',
        //   value: 205.78
        // },
        // {
        //   name: '2019',
        //   value: 281
        // },
        // {
        //   name: '2020',
        //   value: 332
        // },
        // {
        //   name: '2021',
        //   value: 214.02
        // }
      ]
      upDateLineEchart(linedatas)
    })

    const upDateLineEchart = (lineDatas: LineInfo[]) => {
      let xDatas: string[] = _getXDatas(lineDatas)
      let datas: number[] = _getDatas(lineDatas)

      setOptions({
        backgroundColor: 'white',
        // title: {
        //   show: false,
        //   text: '多线图',
        //   textStyle: {
        //     align: 'center',
        //     color: '#fff',
        //     fontSize: 20
        //   },
        //   top: '5%',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '4%',
          left: '3%',
          right: '3%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true
            },

            axisLabel: {
              show: true
            },
            splitLine: {
              show: false
            },
            boundaryGap: false,
            // data: [1, 2, 3, 4, 5, 6]
            data: [...xDatas]
          }
        ],

        yAxis: [
          {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#f0f0f0'],
                opacity: 0.4
              }
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              margin: 20,
              fontSize: 15
            },
            axisTick: {
              show: true
            }
          }
        ],
        series: [
          {
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 15,
            lineStyle: {
              color: '#FFBC0D',
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 0,
              shadowOffsetY: 5,
              shadowOffsetX: 5
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 13
            },
            itemStyle: {
              color: 'white',
              borderColor: '#FFBC0D',
              borderWidth: 2,
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 0,
              shadowOffsetY: 1,
              shadowOffsetX: 1
            },

            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255,188,13, 0.4)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,188,13, 0)'
                  }
                ],
                global: false // 缺省为 false
              }
            },
            // data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
            data: [...datas]
          }
        ]
      }) // end setOption
    }
    const _getXDatas = (barDatas: LineInfo[] = []): string[] => {
      return barDatas.map((item) => {
        return item.name
      })
    }
    const _getDatas = (barDatas: LineInfo[] = []): number[] => {
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
