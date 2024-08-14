<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useECharts } from '/@/hooks/useECharts'
import { getLineData } from './mock-data'
import { convertData } from './data'
import type { MapInfo } from './data'
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
    // 这种类型不知道怎么声明？
    effectDatas: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>)

    watch(
      () => props.effectDatas,
      () => {
        updateChinaMap(props.effectDatas as MapInfo[])
      }
    )
    onMounted(async () => {
      const chinaJson = (await (await import('./china.json')).default) as any
      echarts.registerMap('china', chinaJson)
      // test
      let effectdatas: MapInfo[] = [
        // { name: '海门', value: 119 },
        // { name: '鄂尔多斯', value: 112 },
        // { name: '招远', value: 112 },
        // { name: '舟山', value: 220 },
        // { name: '齐齐哈尔', value: 114 },
        // { name: '盐城', value: 115 },
        // { name: '赤峰', value: 116 },
        // { name: '青岛', value: 118 },
        // { name: '乳山', value: 118 },
        // { name: '金昌', value: 119 },
        // { name: '泉州', value: 21 },
        // { name: '南宁', value: 17 },
        // { name: '营口', value: 317 },
        // { name: '惠州', value: 47 },
        // { name: '江阴', value: 37 },
        // { name: '蓬莱', value: 37 },
        // { name: '韶关', value: 38 },
        // { name: '嘉峪关', value: 38 },
        // { name: '广州', value: 328 },
        // { name: '延安', value: 318 },
        // { name: '太原', value: 39 },
        // { name: '清远', value: 39 },
        // { name: '中山', value: 119 }
      ]
      updateChinaMap(effectdatas)
    })

    const updateChinaMap = (effectDatas: MapInfo[]) => {
      setOptions({
        tooltip: {
          show: true
        },
        geo: {
          map: 'china',
          show: true,
          // 不能移动
          roam: false,
          zoom: 1.2
        },
        series: [
          {
            type: 'map',
            map: 'china',
            geoIndex: 1,
            aspectScale: 0.75, //长宽比
            zoom: 1.2, // 放大1，2被
            showLegendSymbol: true, // 存在legend时显示
            tooltip: {
              formatter: '{b0}'
            },
            label: {
              color: 'white'
            },
            roam: false,
            // 地图颜色
            itemStyle: {
              areaColor: '#48C7C0',
              borderColor: '#f0f0f0',
              borderWidth: 1
            },
            emphasis: {
              label: {
                color: 'white'
              },
              itemStyle: {
                areaColor: '#4BBDD6'
              }
            },
            select: {
              label: {
                color: 'white'
              },
              itemStyle: {
                areaColor: '#4BBDD6'
              }
            },
            data: []
          },
          {
            // name: '显示动态点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // 挑选前20个点
            data: convertData(
              effectDatas.sort(function (a, b) {
                return b.value - a.value
              })
            ),
            symbolSize: function (val: any) {
              return val[2] / 20
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            emphasis: {
              scale: 1.6
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            itemStyle: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            zlevel: 1
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
