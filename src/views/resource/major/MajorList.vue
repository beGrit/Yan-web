<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
        <el-col :span="2">
          <el-tag>专业列表</el-tag>
        </el-col>
        <el-col :offset="18" :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加</el-button>
          <el-button type="success" @click="delRows">删除</el-button>
        </el-col>
      </el-row>
      <el-table
          ref="multipleTable"
          :data="tableData"
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
            prop="majorName"
            label="名称"
            width="400">
        </el-table-column>
        <el-table-column
            prop="majorCode"
            label="专业代码"
            width="400">
        </el-table-column>
        <el-table-column
            prop="majorDescription"
            label="详情描述"
            width="400">
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
          :total="totalCount"
          @current-change="pageIndexChange"
          :page-size="pageSize"
      >
      </el-pagination>
    </el-footer>

    <el-dialog
        title="专业添加表单"
        :visible.sync="addDialogVisible"
        width="80%">
      <major-form @saveSuccess="afterSaveSuccess" @formClose="afterFormClose"></major-form>
    </el-dialog>
  </el-container>

</template>

<script>
import MajorForm from "./MajorForm.vue";
import {del, pageQuery} from "../../../serverRq/major";

export default {
  name: "UniversityList",
  components: {MajorForm},
  data: () => {
    return {
      tableData: [],
      currPage: 1,
      pageSize: 10,
      totalPage: 1,
      totalCount: 1,
      addDialogVisible: false,
      multipleSelection: [],
    }
  },
  created() {
    this.pageIndexChange(1);
  },
  computed: {},
  methods: {
    pageIndexChange(pageIndex) {
      // 发送网络请求获取页信息
      let pm = pageQuery(pageIndex, this.pageSize);
      pm.then(res => res.data)
          .then(data => {
            this.totalCount = data.totalCount;
            this.totalPage = data.totalPage;
            this.currPage = data.currPage;
            this.pageSize = data.pageSize;
            this.tableData = data.list;
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
      this.pageIndexChange(this.pageBar.pageIndex);
    },
    handleClose() {
      this.addDialogVisible = false;
    },
    handleClick(row) {
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
