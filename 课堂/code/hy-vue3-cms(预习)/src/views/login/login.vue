<template>
  <div class="login">
    <transition enter-active-class="animate__ animate__backInDown">
      <login-panel />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
@dark-bg: #293146;

.login {
  display: flex;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
