<template>
  <div class="item-container" v-if="!item.hidden">
    <template
      v-if="
        showOnlyChild(item.children, item) &&
        (!hasChild.children || hasChild.noShowingChildren)
      "
    >
      <RouteLink v-if="hasChild.meta" :to="resolvePath(hasChild.path)">
        <el-menu-item :index="resolvePath(hasChild.path)">
          <Items
            :icon="hasChild.meta.icon || (item.meta && item.meta.icon)"
            :title="hasChild.meta.title"
          />
        </el-menu-item>
      </RouteLink>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <Items
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <SideBarItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { isExternal } from "@/untils/tools";
import { defineComponent, ref, Ref } from "vue";
import RouteLink from "./Link.vue";
import Items from "./Item.vue";

export default defineComponent({
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  components: {
    Items,
    RouteLink,
  },
  setup(props) {
    let hasChild: Ref<any> = ref(null);
    function showOnlyChild(child: any[] = [], parent: any) {
      const hasChildren = child.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          hasChild.value = item;
          return true;
        }
      });
      if (hasChildren.length === 1) {
        return true;
      }
      if (hasChildren.length === 0) {
        hasChild.value = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    }
    function resolvePath(_path: string) {
      if (isExternal(_path)) {
        return _path;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      return props.basePath + _path;
    }
    return {
      hasChild,
      resolvePath,
      showOnlyChild,
    };
  },
});
</script>

<style lang="scss" scoped>
.item-container {
  font-size: 14px;
}
</style>