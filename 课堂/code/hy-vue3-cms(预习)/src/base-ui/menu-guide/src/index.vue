<template>
  <div class="">
    <el-breadcrumb separator="/">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
        <el-breadcrumb-item v-if="breadcrumb.path" :to="{ path: breadcrumb.path }">
          {{ breadcrumb.name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>
          {{ breadcrumb.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'

export default defineComponent({
  components: {
    ElBreadcrumb,
    ElBreadcrumbItem
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
