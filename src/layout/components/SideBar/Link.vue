<template>
  <component :is="linkType" v-bind="aProps(to)">
    <slot />
  </component>
</template>

<script lang="ts" scoped>
import { computed, defineComponent } from "vue";
import { isExternal } from "@/untils/tools";

export default defineComponent({
  name: "RouteLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isOut = computed(() => {
      return isExternal(props.to);
    });
    const linkType = computed(() => {
      return isOut.value ? "a" : "router-link";
    });
    function aProps(_to: String) {
      if (isOut.value) {
        return {
          href: props.to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        to: props.to,
      };
    }
    return {
      linkType,
      aProps,
    };
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>