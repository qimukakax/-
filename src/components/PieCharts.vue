<template>
  <div ref="dom" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, watch } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "PieCharts",
  props: {
    chartsData: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    seriesName: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const dom: Ref<HTMLElement> = ref({} as HTMLElement);
    let myChart = {} as any;
    const option = {
      title: {
        show: true,
        text: props.title,
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: function (parms: any) {
          var str =
            parms.seriesName +
            "<br/>" +
            parms.marker +
            "" +
            parms.data.name +
            "&nbsp&nbsp&nbsp" +
            parms.data.value +
            "%";
          return str;
        },
      },
      legend: {
        bottom: "5%",
        left: "center",
      },
      series: [
        {
          name: props.seriesName,
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: props.chartsData,
        },
      ],
    };
    onMounted(() => {
      myChart = echarts.init(dom.value);
      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    });
    watch(
      () => props.chartsData,
      () => {
        option.series[0].data = props.chartsData;
        myChart.setOption(option);
      }
    );
    return {
      dom,
    };
  },
});
</script>

<style>
</style>