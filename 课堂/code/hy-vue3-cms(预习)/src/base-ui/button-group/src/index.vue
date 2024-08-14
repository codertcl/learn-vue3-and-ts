<template>
  <div :style="groupStyle">
    <template v-for="(item, index) in btnOptions" :key="index">
      <template v-if="item.isShow">
        <el-button v-bind="item.option" :style="Object.assign(btnStyle, item.btnStyle)">
          {{ item.name }}
        </el-button>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    btnOptions: {
      type: Array,
      required: true
    },
    groupStyle: {
      type: Object,
      default: () => {}
    },
    btnStyle: {
      type: Object,
      default: () => ({
        marginLeft: '10px'
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
