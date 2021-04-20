<template>
  <div class="login-container">
    <div class="form-box">
      <div class="title">农业病虫害上报与分析网站</div>
      <el-form
        ref="form"
        :model="formDetil"
        label-width="80px"
        class="form-input"
      >
        <el-form-item label="账号">
          <el-input
            v-model="formDetil.name"
            class="input"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formDetil.password"
            class="input"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-button
          type="success"
          class="button"
          @click="onLogin"
          :disabled="!(formDetil.name && formDetil.password)"
          >登陆</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { getHuaWeiToken } from "@/api";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const formDetil = reactive({
      name: "",
      password: "",
    });
    const onLogin = () => {
      router.push("/");
    };
    getHuaWeiToken({
      auth: {
        identity: {
          methods: ["password"],
          password: {
            user: {
              domain: {
                name: "qimukakax",
              },
              name: "qimukakax",
              password: "wx000404",
            },
          },
        },
        scope: {
          project: {
            id: "0beda8058380f2ea2fb7c016f0b9c940",
          },
        },
      },
    }).then((res) => {});
    return {
      onLogin,
      formDetil,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url("https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg");
  background-size: cover;
  position: relative;
  .form-box {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 100px;
    right: 30px;
    background: #fff;
    border-radius: 14px;
    .button {
      width: 240px;
      margin-left: 50%;
      transform: translate(-50%);
    }
    .title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    .form-input {
      margin-top: 20px;
    }
    .input {
      width: 260px;
    }
  }
}
</style>