<template>
  <div class="login-container">
    <div class="form-box">
      <div class="img"></div>
      <div class="title">农业病虫害上报与分析网站</div>
      <el-form
        ref="form"
        :model="formDetil"
        label-width="80px"
        class="form-input"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="formDetil.username"
            class="input"
            placeholder="请输入用户名"
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
        <div class="button-class">
          <el-button
            type="success"
            class="button"
            @click="onLogin"
            :disabled="!(formDetil.username && formDetil.password)"
            >登陆</el-button
          >
          <el-button type="success" class="button" @click="onRegister"
            >注册</el-button
          >
        </div>
      </el-form>
    </div>
    <el-dialog title="注册" v-model="dialogVisible" width="30%">
      <div>
        <el-form
          :model="registerDetail"
          label-width="80px"
          label-position="left"
          :rules="rules"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerDetail.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerDetail.password"></el-input>
          </el-form-item>
          <el-form-item
            label="年龄"
            prop="age"
            :rules="[{ required: true, message: '年龄不能为空' }]"
          >
            <el-input v-model="registerDetail.age"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="registerDetail.address"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onCancel">取 消</el-button>
          <el-button type="success" @click="onConfirm">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { getHuaWeiToken, loginUser, registerUser } from "@/api";
import { defineComponent, reactive, ref, Ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const formDetil = reactive({
      username: "",
      password: "",
    });
    const registerDetail = reactive({
      username: "",
      password: "",
      age: 0,
      address: "",
    });
    const rules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      address: [{ required: true, message: "请输入地址", trigger: "blur" }],
    };
    const dialogVisible: Ref<boolean> = ref(false);
    const onLogin = () => {
      loginUser(formDetil).then((res: any) => {
        if (res === "登录成功") {
          router.push("/");
        }
      });
    };
    const onRegister = () => {
      dialogVisible.value = true;
    };
    const onCancel = () => {
      dialogVisible.value = false;
    };
    const onConfirm = () => {
      registerUser(registerDetail).then((res: any) => {
        if (res === "注册成功") {
          dialogVisible.value = false;
        } else {
        }
      });
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
      rules,
      onLogin,
      onCancel,
      onConfirm,
      formDetil,
      onRegister,
      dialogVisible,
      registerDetail,
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
    display: block;
    border-radius: 14px;
    .button-class {
      width: 300px;
      margin-left: 80px;
      display: flex;
      .button {
        width: 120px;
      }
    }
    .img {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 14px;
      left: 50px;
      background: url("https://th.bing.com/th/id/R79b324ff281621cfd347318af782b5ca?rik=HyFoFVTsV74uPg&riu=http%3a%2f%2fpic.gerenjianli.com%2fxiaohui2046%2fb679.jpg&ehk=haTUlxJuVGeuE9ikGaxjO8llxxYUXE6%2bSAXN66iGhZA%3d&risl=&pid=ImgRaw");
      background-size: cover;
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