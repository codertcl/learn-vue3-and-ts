<template>
  <el-form-item :label="label">
    <template v-if="type === 'input'">
      <el-input v-model="value" size="medium" :placeholder="placeHolder"></el-input>
    </template>
    <template v-if="type === 'select'">
      <el-select v-model="value" size="medium" :placeholder="placeHolder" style="width: 100%">
        <template v-for="item in otherOptions.options" :key="item.value">
          <el-option :label="item.label" :value="item.value"></el-option>
        </template>
      </el-select>
    </template>
    <template v-if="type === 'datepicker'">
      <el-date-picker
        v-model="value"
        type="daterange"
        size="medium"
        format="YYYY-MM-DD"
        v-bind="otherOptions"
        style="width: 100%"
      >
      </el-date-picker>
    </template>
  </el-form-item>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number, Array, Object],
      default: undefined
    },
    propName: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => {
        return 'input'
      }
    },
    placeHolder: {
      type: String,
      default: () => undefined
    },
    otherOptions: {
      type: Object,
      default: () => ({})
    },
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // el-input的双向绑定值
    const value = computed({
      set(newValue) {
        emit('update:modelValue', newValue)
      },
      get() {
        return props.modelValue
      }
    })

    return {
      value
    }
  }
})
</script>

<style scoped></style>
