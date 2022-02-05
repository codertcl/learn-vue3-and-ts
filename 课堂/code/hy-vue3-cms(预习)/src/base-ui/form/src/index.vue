<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth" :label-position="labelPosition">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <el-row>
        <template v-for="option in formOptions" :key="option.label">
          <el-col v-bind="option.colLayout || colLayout" :style="formColStyle">
            <hy-form-item v-model="formModel[`${option.field}`]" v-bind="option"></hy-form-item>
          </el-col>
        </template>
      </el-row>

      <div v-if="showFooter" class="footer">
        <slot name="footer">
          <el-row type="flex" justify="end" class="footer-btns">
            <el-button size="medium" icon="el-icon-refresh" @click="resetClick">重置</el-button>
            <el-button size="medium" type="primary" icon="el-icon-search" @click="queryClick">
              查询
            </el-button>
          </el-row>
        </slot>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, watch } from 'vue'
import HyFormItem from './form-item.vue'

export default defineComponent({
  components: {
    HyFormItem
  },
  props: {
    labelWidth: {
      type: String,
      default: () => '100px'
    },
    labelPosition: {
      type: String,
      default: () => 'right'
    },
    formOptions: {
      type: Array as PropType<any[]>,
      required: true
    },
    formStyle: {
      type: Object,
      default: () => ({})
    },
    formColStyle: {
      type: Object,
      default: () => ({
        // padding: `10px 50px`
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['query', 'reset', 'formChange'],
  setup(props, { emit }) {
    const formOptions: any[] = props.formOptions
    const formData: any = {}
    for (let option of formOptions) {
      formData[`${option.field}`] = option.defaultFieldValue
    }
    const formModel = reactive(formData)

    const queryClick = () => {
      emit('query', { ...formModel })
    }

    const resetClick = () => {
      for (let option of formOptions) {
        formModel[`${option.field}`] = option.defaultFieldValue
      }
      emit('reset')
    }

    // 侦听器
    watch(formModel, (newValue: any) => {
      console.log(newValue)
      emit('formChange', newValue)
    })

    return {
      formModel,
      queryClick,
      resetClick
    }
  }
})
</script>

<style lang="less" scoped>
.hy-form {
  background-color: #fff;
  padding: 20px;

  .footer-btns {
    margin-right: 50px;
  }
}
</style>
