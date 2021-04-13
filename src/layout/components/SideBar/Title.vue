<template>
  <div class="login-container" @click="goHome">
    <img src="@/assets/farmer.png" class="title-icon" />
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Title",
  data() {
    return {
      title: "农业病虫害上报与分析网站",
    };
  },
  setup() {
    const router = useRouter();
    function goHome() {
      router.push({
        path: "/",
      });
    }
    return {
      goHome,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  color: #fff;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  .title-icon {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
}
</style>