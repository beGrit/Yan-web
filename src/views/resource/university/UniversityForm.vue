<template>
  <el-form ref="form" :model="form" label-width="150px" :rules="rules">
    <el-row>
      <el-col :span="12">
        <el-form-item label="院校名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="官方地址" prop="officialUrl">
          <el-input v-model="form.officialUrl"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="是否是211院校">
          <el-radio-group v-model="form.isEyy" size="small">
            <el-radio label="是" border>是</el-radio>
            <el-radio label="否" border>否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否是985院校">
          <el-radio-group v-model="form.isJbw" size="small">
            <el-radio label="是" border>是</el-radio>
            <el-radio label="否" border>否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否是自划线">
          <el-radio-group v-model="form.isZhx" size="small">
            <el-radio label="是" border>是</el-radio>
            <el-radio label="否" border>否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>

      <!--图片上传区-->
      <el-col :span="12">
        <el-upload
            list-type="picture-card"
            :show-file-list="false"
            :auto-upload="true"
            :action="uploadApiPath"
            :on-success="handleUploadSuccess"
            :before-upload="beforeFileUpload"
            :limit="1">
          <!--缩略图区-->
          <img v-if="form.iconPath" :src="form.iconPath" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="plain" @click="onClose">关闭</el-button>
      </el-col>
    </el-row>

  </el-form>
</template>
<script>
import {saveOne} from "../../../serverRq/university";

export default {

  data() {
    return {
      form: {
        name: null,
        isEyy: '否',
        isJbw: '否',
        isZhx: '否',
        iconPath: null,
        officialUrl: null,
        rank: -1,
      },
      uploadApiPath: process.env.BASE_API + 'file/one',
      rules: {
        name: [
          {
            required: true,
            message: '请输入院校名',
            trigger: true
          },
        ],
        officialUrl: [
          {
            required: true,
            message: '请输入官方URL',
            trigger: true
          },
        ]
      }
    }
  },

  props: {
    formValue: {}
  },

  methods: {

    // 处理file上传成功后的回调
    handleUploadSuccess: function (res, file) {
      this.form.iconPath = URL.createObjectURL(file.raw);
    },

    // file文件上传前的校验
    beforeFileUpload: function (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

    // form表单提交
    onSubmit: function () {
      // 校验表单规则
      let f1 = this.$refs["form"].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          return false;
        } else {
          let pm = saveOne(this.form);
          pm.then(res => {
            if (res.code === 200) {
              this.$emit("saveSuccess");
            }
            this.$message(res.message);
          });
        }
      });
    },

    // close按钮点击后的回调
    onClose: function () {
      this.$emit("formClose");
    }
  }
}
</script>

<style scoped>

</style>
