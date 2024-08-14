<template>
  <div class="sile-menu">
    <div class="logo">
      <img class="img" src="https://cn.vitejs.dev/logo.svg" alt="logo" />
      <span v-show="!isCollapse" class="title">Vue3Admin</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      :unique-opened="false"
      :default-active="currentActiveMenuIndex"
      :collapse="isCollapse"
      background-color="#001529"
      text-color="#B7BDC3"
      active-text-color="#fff"
    >
      <template v-for="menu in menus" :key="menu.id">
        <!-- 1.只有一级菜单  -->
        <el-menu-item
          v-if="!(menu.children && menu.children.length)"
          :index="menu.id + ''"
          @click="handleItemClick(menu)"
        >
          <i :class="menu.icon"></i>
          <!-- 这个标签不能删，折叠效果需要菜单需要 -->
          <span>{{ menu.name }}</span>
        </el-menu-item>

        <!-- 2.包含二级菜单 -->
        <el-submenu v-else :index="menu.id + ''">
          <template #title>
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <template v-for="cmenu in menu.children" :key="cmenu.id">
            <el-menu-item :index="cmenu.id + ''" @click="handleItemClick(cmenu)">
              {{ cmenu.name }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, watch, watchEffect, onMounted } from 'vue'
import { ElMenu, ElSubmenu, ElMenuItem } from 'element-plus'

import { useUserStore } from '/@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
import type { UserMenu } from '/@/service/types'
import { getMenuByPath } from '/@/utils/menu'
import { isUrl } from '/@/utils/common'

export default defineComponent({
  components: {
    ElMenu,
    ElSubmenu,
    // ElMenuItemGroup,
    ElMenuItem
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    // let {
    //   collapse
    // } = toRefs(props) // 转成响应式数据
    const menus = useUserStore().getUserMenus
    const router = useRouter()
    const route = useRoute()

    const currentActiveMenuIndex = ref<String>('')
    const isCollapse = ref<Boolean>(props.collapse)

    watch(
      () => route.path,
      () => {
        console.log('路由变化')
        _selectCurrentMenu()
      }
    )
    watch(
      () => props.collapse,
      () => {
        // console.log('collapse=', props.collapse)
        isCollapse.value = props.collapse
      }
    )

    onMounted(() => {
      _selectCurrentMenu()
    })

    const _selectCurrentMenu = () => {
      const currentMenu = getMenuByPath(menus, route.path) as UserMenu
      currentActiveMenuIndex.value = String(`${currentMenu?.id}`)
    }

    const handleItemClick = (cmenu: UserMenu) => {
      currentActiveMenuIndex.value = String(cmenu.id)
      if (isUrl(cmenu?.url)) {
        window.open(cmenu?.url)
      } else {
        router.push({
          path: cmenu?.url || '/notfound'
        })
      }
    }

    return {
      menus,
      isCollapse,
      currentActiveMenuIndex,
      handleItemClick
    }
  }
})
</script>

<style scoped lang="less">
@import '/@/style/_var.less';
// 混合
.selectActiveColor {
  color: white !important;
}

.sile-menu {
  height: 100%;
  // width: 100%;

  // logo 布局
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu-vertical {
    // 没有设置100%, 右边会突出（因为子布局比父亲大）
    width: 100%;
    border-right: none;

    // 目录
    .el-submenu {
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: @side-lighten-bg-color !important;
      }
    }

    // hover 高亮
    .el-menu-item:hover {
      .selectActiveColor(); // 菜单
    }

    .el-menu-item:hover i::before {
      .selectActiveColor(); // 菜单 icon
    }

    .el-submenu__title:hover span {
      .selectActiveColor(); // 目录
    }

    .el-submenu__title:hover i::before {
      .selectActiveColor(); // 目录 icon
    }

    // 二级菜单选中
    .el-menu-item.is-active {
      color: white !important;
      background-color: @side-sel-bg-color !important;
    }
  }
}
</style>
