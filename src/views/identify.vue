<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>病虫害上传识别</span>
        </div>
      </template>
      <div class="upload-box">
        <el-upload
          class="avatar-uploader"
          action="#"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button
          type="success"
          round
          class="primary-button"
          :loading="isReport"
          @click="onReport"
          >开始识别</el-button
        >
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>病虫害信息展示</span>
        </div>
      </template>
      <div class="info-box" v-loading="isReport">
        <Pie
          v-if="charts.length"
          :title="'识别结果'"
          :seriesName="'病虫害信息'"
          :chartsData="charts"
        />
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>病虫害特点及其防治</span>
        </div>
      </template>
      <div class="control_box">123</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import Pie from "@/components/PieCharts.vue";
import { reportImg } from "@/api/index";
import { PieCharts } from "@/types/const";
import { transformArrToCharts } from "@/untils/tools";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Identify",
  components: {
    Pie,
  },
  setup(props, context) {
    const imgFile: Ref<File> = ref({} as File);
    const imageUrl: Ref<string> = ref("");
    const charts: Ref<PieCharts[]> = ref([]);
    const isReport: Ref<boolean> = ref(false);
    function handleAvatarSuccess(file: any) {
      const isJPG = file.raw.type === "image/jpeg";
      const isLt2M = file.raw.size / 1024 / 1024 < 2;
      if (!isJPG) {
        ElMessage.error("上传图片只能是 JPG 格式!");
        return;
      }
      if (!isLt2M) {
        ElMessage.error("上传图片大小不能超过 2MB!");
        return;
      }
      imgFile.value = file.raw;
      imageUrl.value = URL.createObjectURL(file.raw);
    }
    function onReport() {
      if (!Object.keys(imgFile.value).length) {
        ElMessage.error("请上传图片!");
        return;
      }
      isReport.value = true;
      let params = new FormData();
      params.append("images", imgFile.value);
      reportImg(params).then((res: any) => {
        isReport.value = false;
        charts.value = transformArrToCharts(res.scores);
      });
    }
    return {
      charts,
      onReport,
      isReport,
      imageUrl,
      handleAvatarSuccess,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .box-card {
    width: 30%;
    height: 70%;
  }
  .info-box {
    width: 400px;
    height: 400px;
    margin-left: 50%;
    transform: translate(-50%);
  }
  .control_box {
    width: 100%;
    height: 100%;
  }
  .upload-box {
    .primary-button {
      position: absolute;
      bottom: -40px;
      width: 180px;
    }
    width: 360px;
    height: 360px;
    margin-left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    :deep .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      width: 300px;
      height: 300px;
      position: relative;
      overflow: hidden;
    }
  }
  .card-header {
    font-size: 14px;
    font-weight: bold;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
  }
  .avatar {
    width: 300px;
    height: 300px;
    display: block;
  }
}
</style>