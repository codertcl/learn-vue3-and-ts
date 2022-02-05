<template>
  <div>
    <el-dialog v-model="isVisible" title="提示" width="30%" center append-to-body destroy-on-close>
      <template #default>
        <hy-form v-bind="formData" @formChange="formChange">
          <template #footer>
            <div class="footer">
              <el-button @click="isVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmClick">确 定</el-button>
            </div>
          </template>
        </hy-form>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'

import HyForm from '/@/base-ui/form'

interface IHandleModalPropType {
  modelValue: boolean
}

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    formData: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue', 'confirm'],
  setup(props: IHandleModalPropType, { emit }) {
    const isVisible = ref(props.modelValue)
    let currentFormData = {}

    watch(
      () => props.modelValue,
      (newValue) => {
        isVisible.value = newValue
      }
    )

    watch(isVisible, (newValue) => {
      emit('update:modelValue', newValue)
    })

    const formChange = (formData: any) => {
      formData
      currentFormData = { ...formData }
    }

    const confirmClick = () => {
      isVisible.value = false
      emit('confirm', currentFormData)
    }

    return {
      isVisible,
      formChange,
      confirmClick
    }
  }
})
</script>

<style lang="less" scoped>
/* 这些局部样式才需要 样式穿透技术 来重新框架的样式 */
// vue2 语法
//  /deep/ .handle-modal {
//  .el-dialog__title {
//     color: orange;
//   }
// }
// vue3 语法
// :deep(.handle-modal) {
//   .el-dialog__title {
//     color: orange;
//   }
// }
// vue3 语法 ::v-global( 这里的选择器会变成全局选择器 )
::v-global(.handle-modal .el-dialog__title) {
  color: green;
}

.footer {
  text-align: center;
}
</style>

<style lang="less">
/* 这些是全局样式（因为你的对话是直接插入到body上，是用全局样式而不是组件局部样式） */
// .handle-modal {
//   .el-dialog__title {
//     color: green;
//   }
// }
</style>
