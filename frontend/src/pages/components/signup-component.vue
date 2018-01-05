<template>
  <div>
    <el-row>
        <el-input 
              size="small" 
              placeholder="请输入账号："
              v-model="account"
        >
        </el-input>
    </el-row>
    <br />
    <el-row>
        <el-input 
              type="password"
              size="small" 
              placeholder="请输入密码："
              v-model="password"
        >
        </el-input>
    </el-row>
    <br />
    <el-row>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-row>
    <br />
    <el-row type="flex" align="middle" justify="space-around">
        <el-col>
          <el-button type="primary">注册
          </el-button>
        </el-col>
        <el-col>
          <el-button type="primary">取消
          </el-button>          
        </el-col>
    </el-row>   
  </div>
</template>

<script>
    export default {
        name: 'signupComponent',
        data() {
          return {
            account:'',
            password:'',
            imageUrl: ''
          };
        },
        methods: {
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          }
        }  
    }
</script>

<style scoped>  
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
