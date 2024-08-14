<template>
  <hy-handle-modal v-model="showHandleModal" :form-data="formDataConf" @confirm="handleConfirm" />
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import HyHandleModal from '../../../handle-modal'

interface IHandleModalPropType {
  isVisible: boolean
}

const formConf = {
  labelWidth: '80px',
  formOptions: [
    {
      label: '商品名称',
      type: 'input',
      field: 'name',
      placeHolder: '请输入商品名称'
    },
    {
      label: '商品描述',
      type: 'input',
      field: 'description',
      placeHolder: '请输入商品描述'
    },
    {
      label: '原价',
      type: 'input',
      field: 'price',
      defaultFieldValue: undefined,
      placeHolder: '请输入原价'
    },
    {
      label: '现价',
      type: 'input',
      field: 'nowPrice',
      defaultFieldValue: undefined,
      placeHolder: '请输入现价'
    },
    {
      label: '库存',
      type: 'input',
      field: 'count',
      defaultFieldValue: undefined,
      placeHolder: '请输入库存'
    },
    {
      label: '图片',
      type: 'input',
      field: 'imgUrl',
      defaultFieldValue: undefined,
      placeHolder: '请输入图片地址'
    }
  ],
  formStyle: {},
  colLayout: {
    span: 24
  }
}

export default defineComponent({
  components: {
    HyHandleModal
  },
  props: {
    isVisible: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ['confirm'],
  setup(props: IHandleModalPropType, { emit }) {
    const showHandleModal = ref<any>(false)
    const goodId = ref<any>(null)
    const formDataConf = ref<any>(formConf)

    watch(
      () => props.isVisible,
      (newValue) => {
        if (newValue) {
          show()
        } else {
          hide()
        }
      }
    )

    /**
     * 编辑回显数据
     */
    const initFormData = (info: any) => {
      console.log('编辑回显=>', info)
    }

    /**
     * 回显下拉选项
     */
    const initFormDataConf = (info: any) => {
      console.log('回显下拉选项=>', info)
    }

    /**
     * 显示对话框
     */
    const show = (info?: any, formConf?: any) => {
      console.log('info=>', info)
      if (info) {
        goodId.value = info.id
        initFormData(info)
      }
      if (formConf) {
        initFormDataConf(formConf)
      }
      showHandleModal.value = true
    }

    /**
     * 隐藏对话框
     */
    const hide = () => {
      showHandleModal.value = false
      resetForm() // 重置对话框表单
    }

    /**
     * 重置对话框表单
     */
    const resetForm = () => {
      // todo ...
    }

    const handleConfirm = (formData: any) => {
      emit('confirm', { ...formData, id: goodId.value })
    }

    return {
      showHandleModal,
      formDataConf,

      // 需要暴露出去的方法
      initFormData,
      initFormDataConf,
      handleConfirm,
      show,
      hide
    }
  }
})
</script>

<style lang="less" scoped></style>
