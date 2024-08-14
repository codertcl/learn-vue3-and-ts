<template>
  <div>
    <el-dropdown @command="handleDropDownClick">
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
        <span class="name">{{ userInfo.name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="退出系统">退出系统</el-dropdown-item>
          <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
          <!-- <el-dropdown-item>修改密码</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElAvatar } from 'element-plus'
import { useUserStore } from '/@/store/modules/user'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElAvatar
  },
  setup() {
    let router = useRouter()
    const userInfo = useUserStore().getUserInfo
    const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

    const handleDropDownClick = (value: string) => {
      // 退出登录
      clearLocalStorage()
      // 跳到登录页面
      router.push('/login')
    }

    const clearLocalStorage = () => {
      localStorage.clear()
    }

    return {
      userInfo,
      circleUrl,
      handleDropDownClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  cursor: pointer;
  align-items: center;

  .name {
    margin-left: 10px;
  }
}
</style>
