<template>
  <el-form ref="form" :model="form" label-width="150px">
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button type="plain" @click="onClose">关闭</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {saveOne} from "../../../serverRq/major";

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
