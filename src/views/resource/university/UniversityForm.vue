<template>
  <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="院校图标">
      <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="院校名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="是否是211院校">
      <el-select v-model="form.isEyy" placeholder="请选择">
        <el-option label="是" value="是"></el-option>
        <el-option label="否" value="否"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否是985院校">
      <el-select v-model="form.isJbw" placeholder="请选择">
        <el-option label="是" value="是"></el-option>
        <el-option label="否" value="否"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否是自划线">
      <el-select v-model="form.isZhx" placeholder="请选择">
        <el-option label="是" value="是"></el-option>
        <el-option label="否" value="否"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="官方地址">
      <el-input v-model="form.officialUrl"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button type="plain" @click="onClose">关闭</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {saveOne} from "../../../serverRq/university";

export default {
  data() {
    return {
      form: {
        name: null,
        isEyy: null,
        isJbw: null,
        isZhx: null,
        iconPath: null,
        officialUrl: null,
        rank: -1,
      }
    }
  },
  methods: {
    handleDelete: function () {

    },
    handlePreview: function () {

    },
    handleRemove: function () {

    },
    onSubmit: function () {
      let pm = saveOne(this.form);
      pm.then(res => {
        if (res.code === 200) {
          this.$emit("saveSuccess");
        }
        this.$message(res.message);
      });
    },
    onClose: function () {
      this.$emit("formClose");
    }
  }
}
</script>

<style scoped>

</style>
