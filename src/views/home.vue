<template>
  <div class="home-container">
    <header>近10年农作物主要病虫害发生危害情况的统计和分析</header>
    <div class="charts">
      <section>
        <Pie
          :chartsData="damageCount.saveCount"
          :title="'挽回占比'"
          :seriesName="'农作物种类'"
        />
      </section>
      <section>
        <Pie
          :chartsData="damageCount.trueCount"
          :title="'实际损失'"
          :seriesName="'农作物种类'"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { damageCount } from "../untils/const";
import Pie from "@/components/PieCharts.vue";

export default defineComponent({
  name: "Home",
  components: {
    Pie,
  },
  setup() {
    return {
      damageCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-container {
  display: inline-block;
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