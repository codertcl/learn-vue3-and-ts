<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useECharts } from '/@/hooks/useECharts'
import { getLineData } from './mock-data'
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
    roseDatas: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { barData, lineData, category } = getLineData()
    const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>)

    watch(
      () => props.roseDatas,
      () => {
        upDateRoseEchart(props.roseDatas)
      }
    )

    onMounted(() => {
      // test
      let rosedatas: any = [
        // { value: 10, name: 'rose1' },
        // { value: 5, name: 'rose2' },
        // { value: 15, name: 'rose3' },
        // { value: 25, name: 'rose4' },
        // { value: 20, name: 'rose5' },
        // { value: 35, name: 'rose6' },
        // { value: 30, name: 'rose7' },
        // { value: 40, name: 'rose8' }
      ]
      upDateRoseEchart(rosedatas)
    })
    const upDateRoseEchart = (rosedatas: any) => {
      setOptions({
        // title: {
        //   text: '南丁格尔玫瑰图',
        //   x: 'center'
        // },
        color: [
          '#37a2da',
          '#32c5e9',
          '#9fe6b8',
          '#ffdb5c',
          '#ff9f7f',
          '#fb7293',
          '#e7bcf3',
          '#8378ea'
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        calculable: true,
        series: [
          {
            name: '增值电信业务统计表',
            type: 'pie',
            center: ['55%', '55%'],
            radius: ['20%', '80%'],
            roseType: 'area',
            label: {
              show: false
            },
            // labelLine: {
            //   length: 3,
            //   length2: 20
            // },
            data: [
              ...rosedatas
              // { value: 10, name: 'rose1' },
              // { value: 5, name: 'rose2' },
              // { value: 15, name: 'rose3' },
              // { value: 25, name: 'rose4' },
              // { value: 20, name: 'rose5' },
              // { value: 35, name: 'rose6' },
              // { value: 30, name: 'rose7' },
              // { value: 40, name: 'rose8' }
            ]
          }
        ]
      }) // end setOption
    }
    return {
      chartRef
    }
  }
})
</script>

<style scoped></style>
