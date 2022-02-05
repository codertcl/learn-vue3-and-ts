<template>
  <div class="dashboard">
    <!-- 统计数 -->
    <el-row :gutter="10">
      <template v-for="(item, index) in topPanelDatas" :key="index">
        <el-col :md="12" :lg="6" :xl="6">
          <hy-statistical-panel class="digital-panel-row" :panel-data="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 中间图表 -->

    <el-row :gutter="10">
      <el-col :span="7">
        <!-- <div class="center-echart echart-pie1">
          <pie-echart height="450px" />
        </div> -->
        <hy-card class="center-echart echart-pie1" title="饼图">
          <pie-echart height="360px" :pie-datas="pieDatas" />
        </hy-card>
      </el-col>

      <el-col :span="10">
        <hy-card class="center-echart echart-earth" title="中国地图">
          <china-echart height="360px" :effect-datas="echartDatas" />
        </hy-card>
      </el-col>

      <el-col :span="7">
        <hy-card class="center-echart echart-pie1" title="玫瑰图">
          <rose-echart height="360px" :rose-datas="roseDatas" />
        </hy-card>
      </el-col>
    </el-row>

    <!-- 底部图表 -->

    <el-row :gutter="10">
      <el-col :span="12">
        <hy-card class="bottom-echart echart-bar" title="折线图">
          <line-echart :line-datas="lineDatas" />
        </hy-card>
      </el-col>

      <el-col :span="12">
        <hy-card class="bottom-echart echart-line" title="条形图">
          <bar-echart :bar-datas="barDatas" />
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import HyStatisticalPanel from '/@/components/statistical-panel'
import HyCard from '/@/components/card'
import PieEchart from './cpns/pie-echart.vue'
import ChinaEchart from './cpns/china-echart.vue'
import RoseEchart from './cpns/rose-echart.vue'
import LineEchart from './cpns/line-echart.vue'
import BarEchart from './cpns/bar-echart.vue'
import { getTopPanel, getCenterData, getLineData } from '/@/service/main/analysis/dashboard'

export default defineComponent({
  components: {
    HyStatisticalPanel,
    HyCard,
    RoseEchart,
    ChinaEchart,
    PieEchart,
    LineEchart,
    BarEchart
  },
  setup() {
    const topPanelDatas = ref<any>([])

    const pieDatas = ref<any>([])
    const echartDatas = ref<any>([])
    const roseDatas = ref<any>([])

    const lineDatas = ref<any>([])
    const barDatas = ref<any>([])

    // 生命周期
    onMounted(() => {
      // 获取页面所有的数据
      getDashBoardData()
    })

    // 获取页面所有的数据
    const getDashBoardData = (queryInfo: any = {}) => {
      getTopPanel().then((res) => {
        // console.log(res)
        topPanelDatas.value = [
          {
            title: '销量1',
            tips: '苹果的销量',
            price: 124541,
            subTitle: '销售总量： ',
            number: 8233
          },
          {
            title: '销量2',
            tips: '苹果的销量',
            price: 24541,
            subTitle: '销售总量： ',
            number: 3133
          },
          {
            title: '销量3',
            tips: '苹果的销量',
            price: 4541,
            subTitle: '销售总量： ',
            number: 233
          },
          {
            title: '销量4',
            tips: '苹果的销量',
            price: 424541,
            subTitle: '销售总量： ',
            number: 1233
          }
        ]
      })

      getCenterData().then((res) => {
        // console.log(res)
        pieDatas.value = [
          {
            name: '类别1',
            value: 80
          },
          {
            name: '类别2',
            value: 50
          },
          {
            name: '类别3',
            value: 90
          }
        ]

        echartDatas.value = [
          { name: '海门', value: 119 },
          { name: '鄂尔多斯', value: 112 },
          { name: '招远', value: 112 },
          { name: '舟山', value: 220 },
          { name: '齐齐哈尔', value: 114 },
          { name: '盐城', value: 115 },
          { name: '赤峰', value: 116 },
          { name: '青岛', value: 118 },
          { name: '乳山', value: 118 },
          { name: '金昌', value: 119 }
        ]
        roseDatas.value = [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' }
        ]
      })

      getLineData().then((res) => {
        // console.log(res)
        lineDatas.value = [
          {
            name: '2017',
            value: 502.12
          },
          {
            name: '2018',
            value: 205.78
          },
          {
            name: '2019',
            value: 281
          }
        ]

        barDatas.value = [
          {
            name: '制造业',
            value: 5000
          },
          {
            name: '建筑业',
            value: 2600
          },
          {
            name: '农林牧渔',
            value: 1300
          }
        ]
      })
    }

    return {
      topPanelDatas,

      pieDatas,
      echartDatas,
      roseDatas,

      lineDatas,
      barDatas
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  .digital-panel-row {
    height: 130px;
    margin-bottom: 20px;
    overflow: hidden;
    text-align: left;
  }

  .center-echart {
    height: 450px;
    margin: 0 0 20px 0;
  }

  .bottom-echart {
    height: 290px;
  }
}
</style>
