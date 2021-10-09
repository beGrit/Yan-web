<template>
  <el-container style="height: 100%">

    <el-header style="height: 70px" id="web-header">
      <admin-header-view></admin-header-view>
    </el-header>

    <el-main id="web-main">
      <el-container style="border: 1px solid #eee; width: 100%; height: 800px;">
        <aside-view></aside-view>
        <transition name="el-fade-in">
          <router-view></router-view>
        </transition>
      </el-container>
    </el-main>

    <el-footer style="height: 70px" id="web-footer">

    </el-footer>

  </el-container>
</template>

<script>
import AsideView from "./AsideView.vue";
import AdminHeaderView from "./AdminHeaderView.vue";

export default {
  name: "ManageView",
  components: {AdminHeaderView, AsideView}
}
</script>

<style scoped>
#web-footer, #web-header {
  background-color: #99CCEE;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

#web-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
