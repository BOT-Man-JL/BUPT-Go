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
    <div class="article">
      <img v-bind:src="img" style="width: 100%" />
      <h1>{{ title }}</h1>
      <div>
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="9" v-if="timestamp">
            <p>{{ timestamp }}</p>
          </el-col>
          <el-col :span="5" align="left" v-if="author">
            <p>{{ author }}</p>
          </el-col>
          <el-col :span="10" align="right">
          	<el-tag size="mini" v-if="category">{{ category }}</el-tag>
          	<el-tag size="mini" v-if="area">{{ area }}</el-tag>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="6" align="middle" v-if="cost">
            <span>人均￥：{{ cost }}</span>
          </el-col>
          <el-col :span="8" align="middle" v-if="contact">
            <span>联系方式：{{ contact }}</span>
          </el-col>
          <el-col :span="10" align="middle" v-if="location">
            <span>地址：{{ location }}</span>
          </el-col>
        </el-row>
      </div>
      <div style="text-indent:2em; margin: 20px 0">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'articlePage',
    props: ['id', 'title', 'img', 'author'],
    data() {
      return {
        timestamp: null,
        text: null,
        category: null,
        area: null,
        location: null,
        contact: null,
        cost: null
      };
    },
    mounted() {
      document.title = '文章 | BUPT Go';
      const url = '/article';
      const params = { id: this.id };

      const loading = this.$loading({ lock: true });
      axios.get(url, { params }).then((res) => {
        this.author = res.data.author;
        this.timestamp = new Date(res.data.timestamp).toLocaleString();
        this.img = res.data.img;
        this.title = res.data.title;
        this.text = res.data.text;
        this.category = res.data.meta.category;
        this.area = res.data.meta.area;
        this.location = res.data.meta.location;
        this.contact = res.data.meta.contact;
        this.cost = res.data.meta.cost;

        document.title = this.title + ' | BUPT Go';

        loading.close();
      }).catch((e) => {
        loading.close();
        this.$message.error({
          message: e.response.data.err, showClose: true
        });
      });
    }
  }
</script>

<style scoped>
  .article {
    margin: 20px;
  }
</style>
