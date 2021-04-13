<template>
  <div>
    <Titles />
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        mode="vertical"
        background-color="#8FBC8F"
        text-color="#ffffff"
        active-text-color="#7FFF00"
      >
        <SiderItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import Titles from "./Title.vue";
import SiderItem from "./SideBarItem.vue";

export default defineComponent({
  name: "SiderBar",
  components: {
    Titles,
    SiderItem,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routes = router.options.routes;
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });
    return {
      routes,
      activeMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>