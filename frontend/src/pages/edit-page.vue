<template>
  <div>
    <el-header style="text-align: center">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="4">
          <router-link :to="{ name:'homePage' }">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col :span="16">
          <h1>BUPT Go</h1>
        </el-col>
        <el-col :span="4">
          <router-link :to="{ name:'searchPage' }">
            <i class="el-icon-search"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <div>
      <el-row>
        <el-input size="small"
                  placeholder="请输入攻略的标题"
                  v-model="title">
        </el-input>
      </el-row>
      <el-row>
        <el-select style="width: 28%" size="small"
                   v-model="category" placeholder="请选择类别">
          <el-option v-for="item in categoryOptions"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
        <el-select style="width: 28%" size="small"
                   v-model="area" placeholder="请选择地区">
          <el-option v-for="item in areaOptions"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
        <el-date-picker style="width: 42%" size="small"
                        v-model="date" type="daterange"
                        start-placeholder="开始日期"
                        range-separator="至"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-row>
      <el-row>
        <el-input size="small"
                  placeholder="请输入联系方式（可选）"
                  v-model="telephone">
        </el-input>
      </el-row>
      <el-row>
        <el-input size="small"
                  placeholder="请输入地址（可选）"
                  v-model="address">
        </el-input>
      </el-row>
      <el-row>
        <el-input size="small"
                  placeholder="请输入花费（可选）"
                  v-model="cost">
        </el-input>
      </el-row>
      <el-row>
        <el-input type="textarea"
                  :autosize="{ minRows: 6, maxRows: 12 }"
                  placeholder="在此处输入内容"
                  v-model="text">
        </el-input>
      </el-row>
      <el-row>
        <el-upload action="/placeholder"
                   list-type="picture"
                   :multiple="false"
                   :on-change="onSelectImage"
                   :auto-upload="false">
          <el-tag>
            上传图片
            <i class="el-icon-plus"></i>
          </el-tag>
        </el-upload>
      </el-row>
      <el-row type="flex" align="middle" justify="space-around">
        <el-col>
          <el-button type="primary" @click="onSubmit">
            提交
            <i class="el-icon-success el-icon--right"></i>
          </el-button>
        </el-col>
        <el-col>
          <el-button @click="onDelete">
            删除
            <i class="el-icon-delete el-icon--right"></i>
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import options from '../../../common/article-common.json'
  export default {
    name: 'editPage',
    data() {
      return {
        categoryOptions: options.categoryOptions,
        areaOptions: options.areaOptions,
        title: '',
        telephone: '',
        address: '',
        text: '',
        dateRange: null,
        file: null
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    methods: {
      onSubmit() {
        const loading = this.$loading({
          lock: true
        });
        const router = this.$router;
        const message = this.$message;

        setTimeout(function () {
          loading.close();
          message({ message: 'done', type: 'success' });
          router.push({ name: 'userPage' });
        }, 1000);
      },
      onDelete() {
      },
      onSelectImage(file, fileList) {
        if (fileList && fileList[0])
          this.file = fileList[0].raw;
        else
          this.file = null;
      }
    }
  }
</script>

<style scoped>
</style>
