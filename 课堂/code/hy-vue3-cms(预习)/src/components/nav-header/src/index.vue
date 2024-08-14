<template>
  <div class="nav-header">
    <i :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleFoldClick"></i>
    <div class="content">
      <hy-menu-guide :breadcrumbs="breadcrumbs" />
      <div class="right">
        <el-row class="buttons">
          <span>
            <i class="el-icon-chat-dot-round"></i>
          </span>
          <span>
            <i class="el-icon-collection-tag"></i>
          </span>
          <span>
            <span class="dot"></span>
            <i class="el-icon-bell"></i>
          </span>
        </el-row>
        <user-info />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { ElRow } from 'element-plus'
import { useRoute } from 'vue-router'
import HyMenuGuide from '/@/base-ui/menu-guide'
import type { BreadcrumbProp } from '/@/base-ui/menu-guide'
import UserInfo from './user-info.vue'
import { getBreadcrumbsByPath } from '/@/utils/menu'
import { useUserStore } from '/@/store/modules/user'
export default defineComponent({
  components: {
    HyMenuGuide,
    UserInfo,
    ElRow
  },
  props: {},
  emits: ['foldClick'],
  setup(props, { emit, slots }) {
    const breadcrumbs = ref<BreadcrumbProp[]>([])
    const isFold = ref<Boolean>(false)
    const route = useRoute()
    const userStore = useUserStore()
    const menus = userStore.getUserMenus
    watch(
      () => route.path,
      () => {
        setBreadcrumbs()
      }
    )
    onMounted(() => {
      setBreadcrumbs()
    })
    /** 设值 面包屑 的值     */
    const setBreadcrumbs = () => {
      breadcrumbs.value = getBreadcrumbsByPath(menus, route.path)
    }
    const handleFoldClick = (event: MouseEvent) => {
      isFold.value = !isFold.value
      emit('foldClick', isFold.value)
    }
    return {
      breadcrumbs,
      isFold,
      handleFoldClick
    }
  }
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  height: 48px;
  padding: 0 20px 0 0;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > i {
    display: flex;
    height: 100%;
    margin-right: 10px;
    font-size: 28px;
    cursor: pointer;
    align-items: center;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }

  .right {
    display: flex;
    flex-direction: row;

    .buttons {
      margin-right: 10px;

      i,
      span {
        position: relative;
        display: flex;
        width: 40px;
        height: 100%;
        font-size: 20px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
      }

      i:hover {
        background: #f6f6f6;
      }

      .dot {
        position: absolute;
        top: 6px;
        right: 6px;
        z-index: 10;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 100%;
      }
    }

    // .el-button {
    //   display: flex;
    //   width: 30px;
    //   height: 30px;
    //   min-height: 30px;
    //   justify-content: center;
    //   align-items: center;

    //   .is-circle {
    //     padding: 7px;
    //   }
    // }
  }
}
</style>
