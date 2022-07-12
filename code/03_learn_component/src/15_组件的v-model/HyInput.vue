<template>
  <div>
    <input v-model="value">
    <input v-model="why">
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
      title: String
    },
    emits: ["update:message", "update:title"],
    computed: {
      value: {
        //组件上使用v-model的实现
        set(value) {
          this.$emit("update:message", value);
        },
        get() {
          return this.message;
        }
      },
      why: {
        set(why) {
          this.$emit("update:title", why);
        },
        get() {
          return this.title;
        }
      }
    }
  }
</script>
