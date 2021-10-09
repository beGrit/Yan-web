<template>
  <div class="header-outer">
    <div class="header-outer__left">
      <div class="grid-content bg-purple">
        <el-button type="primary" round @click="toPortal">
          前台
        </el-button>
        <el-button type="success" round @click="toAdmin">后台</el-button>
      </div>
    </div>

    <div class="header-outer__right">
      <el-dropdown style="width: 41px;height: 41px;">
        <el-avatar class="el-dropdown-link" style="margin-top: 15px"> user</el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>修改资料</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeaderView",
  data: function () {
    return {
      adminRoute: {
        name: 'Home',
      }
    }
  },
  methods: {
    toAdmin: function () {
      this.$router.push(this.adminRoute);
    },
    toPortal: function () {
      window.location = 'http://localhost:8000/views/university/'
    }
  }
}
</script>

<style scoped>
.header-outer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.header-outer__left {
}

.header-outer__right {
}


</style>
