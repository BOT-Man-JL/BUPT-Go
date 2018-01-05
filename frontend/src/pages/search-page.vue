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
          <h1>筛选文章</h1>
        </el-col>
        <el-col :span="4">
          <router-link :to="{ name:'searchPage' }">
            <i class="el-icon-search"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <div style="text-align: center">
      <el-row class="input-row">
        <el-select style="width:80%" v-model="category" placeholder="请选择类别">
          <el-option v-for="item in categoryOptions"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
      </el-row>
      <el-row class="input-row">
        <el-select style="width:80%" v-model="area" placeholder="请选择地区">
          <el-option v-for="item in areaOptions"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
      </el-row>
      <el-row class="input-row">
        <router-link :to="{ name:'resultPage', query: { category: category, area: area } }">
          <el-button type="primary" style="width:60%">
            搜索
            <i class="el-icon-search el-icon--right"></i>
          </el-button>
        </router-link>
      </el-row>
    </div>
  </div>
</template>

<script>
  import options from '../../../common/article-common.json'
  export default {
    name: 'searchPage',
    data() {
      return {
        categoryOptions: options.categoryOptions,
        areaOptions: options.areaOptions,
        category: '',
        area: ''
      }
    },
    mounted() {
      document.title = '筛选文章 | BUPT Go';
    }
  }
</script>

<style scoped>
  .input-row {
    margin: 10px 0;
    text-align: center;
  }
</style>
