<template>
  <div class="nav-container">
    <Bread />
    <div class="right-menu">
      <el-dropdown trigger="click">
        <div>
          <img
            class="user-header"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="onLogOut"
              >Log Out</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bread from "@/components/BreadCrumb.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    Bread,
  },
  setup() {
    function onLogOut() {
      console.log("LogOut");
    }
    return {
      onLogOut,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-container {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb {
    float: left;
  }
  .right-menu {
    float: right;
    margin-right: 30px;
    height: 100%;
    line-height: 50px;
  }
  .user-header {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .el-icon-arrow-down {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>