import type { EChartsOption } from 'echarts'
import { onUnmounted, Ref } from 'vue'
import { unref, nextTick, watch, computed, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
// import echarts from 'echarts' // 这个以前的引入会报错
import * as echarts from 'echarts'
import { useEventListener } from './useEventListener'

export function useECharts(elRef: Ref<HTMLDivElement>) {
  let chartInstance: echarts.ECharts | null = null
  const cacheOptions = ref<EChartsOption>({})
  // Fn 是类似类型声明，已经全局声明
  let resizeFn: Fn = useDebounceFn(resize, 1000) // 防抖
  let removeResizeFn: Fn = () => {}

  onUnmounted(() => {
    removeResizeFn()
  })

  const getOptions = computed(
    (): EChartsOption => {
      return {
        // todo ... 扩展其它属性
        backgroundColor: 'transparent',
        ...cacheOptions.value
      }
    }
  )

  function _initCharts() {
    // elRef 是标签的 ref 属性的值（相当与id，唯一标识）

    const el = unref(elRef) // 如果参数为 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val
    if (!el || !unref(el)) {
      return // 判空
    }

    chartInstance = echarts.init(el) // el 原始dom对象
    // todo 监听屏幕变化 重新计算图表大小
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn
    })
    removeResizeFn = removeEvent
  }

  /**
   * todo ... 类型声明
   * @param options
   * @param clear
   */
  function setOptions(options: any, clear = true) {
    cacheOptions.value = options
    nextTick(() => {
      if (!chartInstance) {
        _initCharts()
      }
      clear && chartInstance?.clear()
      // setOption, unref(getOptions) 获取非响应式数据
      chartInstance?.setOption(unref(getOptions))
    })
  }

  function resize() {
    console.log('resize')
    chartInstance?.resize()
  }

  return {
    setOptions, // 初始化echarts 和 setOption
    resize, // 触发 echarts.resize()
    echarts // 拿到 导入的 echarts 对象
  }
}
