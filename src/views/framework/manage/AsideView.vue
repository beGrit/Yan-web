<template>

  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu
        :default-openeds="[]"
        unique-opened
        router
        text-color="#000"
        active-text-color="#ffd04b">
      <!--数据看板区-->
      <el-submenu index="0">
        <template slot="title"><i class="el-icon-setting"></i>数据看板</template>
      </el-submenu>
      <!--资源区域-->
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>资源管理</template>
        <el-submenu index="1-1">
          <template slot="title">核心资源</template>
          <el-menu-item index="1-1-1" :route="UniversityRoute" @select="choiceCB">院校</el-menu-item>
          <el-menu-item index="1-1-2" :route="MajorRoute">专业</el-menu-item>
          <el-menu-item index="1-1-3" route="/grade">成绩</el-menu-item>
        </el-submenu>

        <el-submenu index="1-2">
          <template slot="title">关联性资源</template>
          <el-menu-item index="1-2-4" route="/major">新闻</el-menu-item>
          <el-menu-item index="1-2-5" route="/grade">招生简章</el-menu-item>
        </el-submenu>
      </el-submenu>


      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "AsideView",
  data: function () {
    return {
      UniversityRoute: {
        name: "UniversityList"
      },
      MajorRoute: {
        name: 'MajorList'
      }
    }
  },
  methods: {
    choiceCB(index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>

<style scoped>

</style>
