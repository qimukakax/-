<template>
  <div class="item-container">
    <i :class="[icon, 'sub-el-icon']" />
    <span slot="title">
      {{ title }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Item",
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  align-items: center;
}
</style>