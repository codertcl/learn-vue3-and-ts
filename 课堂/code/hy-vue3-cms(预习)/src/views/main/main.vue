<template>
  <div class="main">
    <el-container class="main-content">
      <!-- :width="isCollapse ? '48px' : '210px' " -->
      <el-aside :width="isCollapse ? '62px' : '210px'">
        <hy-nav-menu :collapse="isCollapse" />
      </el-aside>

      <el-container class="page">
        <el-header class="page-header">
          <hy-nav-header @foldClick="handleFoldClick" />
        </el-header>
        <el-container class="page-content">
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus'

import HyNavMenu from '/@/components/nav-menu'

import HyNavHeader from '/@/components/nav-header'

export default defineComponent({
  components: {
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    HyNavMenu,
    HyNavHeader
  },

  setup() {
    const isCollapse = ref<Boolean>(false)

    const handleFoldClick = (isFold: Boolean) => {
      // console.log('isFold=', isFold)

      isCollapse.value = isFold
    }

    return {
      isCollapse,

      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
@import '/@/style/_var.less';

.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: @side-bg-color;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
