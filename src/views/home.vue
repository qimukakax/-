<template>
  <div class="home-container">
    <header>近10年农作物主要病虫害发生危害情况的统计和分析</header>
    <div class="charts">
      <section>
        <Pie />
      </section>
      <section>
        <Pie />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pie from "@/components/PieCharts.vue";

export default defineComponent({
  name: "Home",
  components: {
    Pie,
  },
});
</script>

<style lang="scss" scoped>
.home-container {
  display: inline-block;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
header {
  height: 120px;
  text-align: center;
  font-size: 28px;
  line-height: 120px;
  font-weight: bold;
}
.charts {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
section {
  width: 40%;
  height: 70%;
  text-align: center;
}
</style>