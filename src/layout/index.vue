<template>
  <div class="app-container">
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <NavBar />
      <AppMian />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SideBar, NavBar, AppMian } from "./components";

export default defineComponent({
  name: "Layout",
  components: {
    SideBar,
    NavBar,
    AppMian,
  },
});
</script>

<style lang="scss">
@import "@/styles/sider-bar.scss";

.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>