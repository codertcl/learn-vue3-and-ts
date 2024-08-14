<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import type { Ref } from 'vue'
import { useECharts } from '/@/hooks/useECharts'
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
    pieDatas: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>)

    watch(
      () => props.pieDatas,
      () => {
        updateEchart(props.pieDatas)
      }
    )

    onMounted(() => {
      // test
      let piedatas: any = [
        // {
        //   name: '类别1',
        //   value: 80
        // },
        // {
        //   name: '类别2',
        //   value: 50
        // },
        // {
        //   name: '类别3',
        //   value: 90
        // }
      ]
      updateEchart(piedatas)
    })

    /**
     * 刷新图表
     */
    const updateEchart = (pieDatas: any) => {
      let legendDatas = _getLegendDatas(pieDatas)
      let datas = _getDatas(pieDatas)
      setOptions({
        backgroundColor: 'white',
        // 图表默认的颜色表
        // color: ['rgba(176, 212, 251, 1)'],
        color: [
          '#367bec',
          '#00cefc',
          'rgba(176, 212, 251, 1)',
          '#37a2da',
          '#32c5e9',
          '#9fe6b8',
          '#ffdb5c',
          '#ff9f7f',
          '#fb7293',
          '#e7bcf3',
          '#8378ea'
        ],
        legend: {
          show: true,
          itemGap: 12,
          // data: ['01', '02'],
          data: legendDatas,
          top: 20
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        series: [
          {
            name: 'Line 1',
            type: 'pie',
            avoidLabelOverlap: false,
            // hoverAnimation: true, // 已过期，用下面scale
            emphasis: {
              scale: 1.6
            },
            center: ['50%', '55%'],
            radius: ['50%', '68%'],
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            data: [
              ...datas
              // {
              //   value: 80,
              //   name: '01',
              //   itemStyle: {
              //     normal: {
              //       color: {
              //         // 完成的圆环的颜色
              //         colorStops: [
              //           {
              //             offset: 0,
              //             color: '#00cefc' // 0% 处的颜色
              //           },
              //           {
              //             offset: 1,
              //             color: '#367bec' // 100% 处的颜色
              //           }
              //         ]
              //       },
              //       label: {
              //         show: false
              //       },
              //       labelLine: {
              //         show: false
              //       }
              //     }
              //   }
              // },
              // {
              //   name: '02',
              //   value: 20
              // }
            ]
          }
        ]
      }) // end setOption
    }

    let _getLegendDatas = (pieDatas = []) => {
      return pieDatas.map((item: any) => {
        return item.name
      })
    }
    let _getDatas = (pieDatas = []) => {
      return pieDatas
    }

    return {
      chartRef
    }
  }
})
</script>

<style scoped></style>
