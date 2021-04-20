<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, idx) in levelList" :key="item.path">
        <a @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { pathToRegexp } from "path-to-regexp";
import { defineComponent, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "bread",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const levelList: Ref<any[]> = ref([]);
    watch(route, () => {
      getList();
    });
    function getList() {
      let matched = route.matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
      levelList.value = [...matched];
    }
    getList();
    function pathCompile(path: string) {
      const { params } = route;
      var toPath = (pathToRegexp as any).compile(path);
      return toPath(params);
    }
    function handleLink(item: any) {
      const { redirect, path } = item;
      if (redirect) {
        router.push(redirect);
        return;
      }
      router.push(pathCompile(path));
    }
    return {
      levelList,
      handleLink,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  line-height: 50px;
  margin-left: 20px;
}
</style>