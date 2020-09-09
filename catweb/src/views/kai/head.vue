<template>
  <el-upload
    class="avatar-uploader"
    action="http://175.24.113.119:8080/cat_registration_war_exploded/userInfo/uploadPhoto"
    :headers="myHeaders"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    name="upload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" :v-model="imageUrl" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
import { headSubmit } from "../../network/request.js";
// import { jsToFormData } from "../../assets/js/turnFormData.js";
const token = sessionStorage.getItem("token");

export default {
  data() {
    return {
      imageUrl: "",
      myHeaders: { token: token },
    };
  },
  methods: {
    handleAvatarSuccess(res, upload) {
      this.imageUrl = URL.createObjectURL(upload.raw);
      this.$message({
        message: "上传成功",
        type: "success",
      });
      console.log(res.data)
      this.$bus.$emit("showHead", res.data);
    },
    beforeAvatarUpload(upload) {
      const isJPG = upload.type === "image/jpeg";
      const isPNG = upload.type === "image/png";
      const isLt2M = upload.size / 1024 / 1024 < 2;

      if (!isPNG && !isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      } else {
        console.log(this.myHeaders);
        // headSubmit(upload).then((res) => {
        //   this.$message({
        //     message: "上传成功",
        //     type: "success",
        //   });
        // });
      }
      return isLt2M && (isPNG || isJPG);
      // const formData = new FormData();
      // Object.keys(file).forEach((key) => {
      //   formData.append(key, file[key]);
      // });

      // let upload = JSON.parse(JSON.stringify(file));

      // .then((res) => {
      //   if (res.code == 0) {
      //     this.$message({
      //       type: "success",
      //       message: "文件上传成功",
      //     });
      //   } else {
      //     this.$message({
      //       type: "warning",
      //       message: `文件上传失败,失败原因${res.desc}`,
      //     });
      //   }
      // });
    },
  },
};
</script>

<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 100%;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: block;
  width: 198px;
  background-color: #fff;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 198px;
  height: 198px;
  line-height: 200px;
  text-align: center;
  border-radius: 100%;
}
.avatar {
  width: 198px;
  height: 198px;
  display: block;
}
</style>
