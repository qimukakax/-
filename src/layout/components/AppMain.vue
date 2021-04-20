<template>
  <div class="app-main">
    <router-view :key="key" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AppMain",
  setup() {
    const route = useRoute();
    const key = computed(() => {
      return route.path;
    });
    return {
      key,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 50px);
  padding: 20px;
  position: relative;
  overflow-x: hidden;
}
</style>