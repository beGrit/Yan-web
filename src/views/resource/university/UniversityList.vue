<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
        <el-col :span="2">
          <el-tag>院校列表</el-tag>
        </el-col>
        <el-col :offset="18" :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加</el-button>
          <el-button type="success" @click="delRows">删除</el-button>
        </el-col>
      </el-row>
      <el-table
          ref="multipleTable"
          :data="listData.list"
          height="250"
          style="width: 100%; min-height: 580px; max-height: 580px"
          border
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            fixed="left"
            width="55"/>
        <el-table-column
            prop="id"
            label="主键"
            fixed
            width="200">
        </el-table-column>
        <el-table-column
            prop="universityName"
            label="名称"
            width="200">
        </el-table-column>
        <el-table-column
            prop="isEyy"
            label="是否是211院校"
            width="200">
        </el-table-column>
        <el-table-column
            prop="isJbw"
            label="是否是985院校"
            width="200">
        </el-table-column>
        <el-table-column
            prop="isZhx"
            label="是否是自划线"
            width="200">
        </el-table-column>
        <el-table-column
            prop="iconPath"
            label="院校图标"
            width="200">
        </el-table-column>
        <el-table-column
            prop="officialUrl"
            label="院校官方网址"
            width="200">
        </el-table-column>
        <el-table-column
            prop="rank"
            label="院校排名"
            width="200">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
          background
          layout="prev, pager, next"
          :total="listData.totalCount"
          @current-change="pageIndexChange"
          :page-size="listData.pageSize"
          :current-page="listData.currPage"
      >
      </el-pagination>
    </el-footer>
    <el-dialog
        title="院校添加表单"
        :visible.sync="addDialogVisible"
        width="800px">
      <university-form @saveSuccess="afterSaveSuccess" @formClose="afterFormClose"></university-form>
    </el-dialog>
  </el-container>

</template>

<script>
import UniversityForm from "./UniversityForm.vue";
import {del, pageQuery} from "../../../serverRq/university";

export default {
  name: "UniversityList",
  components: {UniversityForm},
  data: () => {
    return {
      listData: {
        list: [],
        currPage: 1,
        pageSize: 10,
        totalPage: 1,
        totalCount: 1,
        multipleSelection: [],
      },
      defaultPageSize: 10,
      addDialogVisible: false,
    }
  },
  created() {
    this.pageIndexChange(1);
  },
  computed: {},
  methods: {
    pageIndexChange(pageIndex) {
      // 发送网络请求获取页信息
      let pm = pageQuery(pageIndex, this.defaultPageSize);
      pm.then(res => res.data)
          .then(data => {
            this.listData = data;
          });
    },
    delRows: function () {
      // 对选中的单元做统计
      let idList = [];
      idList = this.multipleSelection.map(row => row.id);
      let delReq = {};
      delReq.idList = idList;

      // 发送网路请求到服务端
      let pm = del(delReq);
      pm.then(res => {
        this.$message(res.message);
      });

      // 刷新table页面
      this.refreshTable();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    refreshTable() {
      this.pageIndexChange(this.listData.currPage);
    },
    handleClose() {
      this.addDialogVisible = false;
    },
    handleClick(row) {
      this.addDialogVisible = true;
    },
    afterSaveSuccess() {
      this.handleClose();
      this.refreshTable();
    },
    afterFormClose() {
      this.handleClose();
    }
  }
}
</script>

<style scoped>
</style>
