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
          <h1>个人管理</h1>
        </el-col>
        <el-col :span="4">
          <router-link :to="{ name:'editPage' }" v-if="isLogin">
            <i class="el-icon-plus"></i>
          </router-link>
          <router-link :to="{ name:'searchPage' }" v-if="!isLogin">
            <i class="el-icon-search"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <!-- Is Login -->
    <div v-if="isLogin">
      <h2>
        <img :src="userAvatar"
             style="width: 64px; height: 64px; border-radius: 32px" />
        <span>{{ userName + '，欢迎发现更大的世界' }}</span>
        <el-button type="primary" @click="onLogout">
          注销
        </el-button>
      </h2>
      <article-thin-item-component v-for="item in items" v-bind="item" :key="item.id" />
    </div>
    <!-- Not Login -->
    <div v-if="!isLogin" class="login-inputs">
      <el-row class="input-row">
        <el-input style="width:80%"
                  placeholder="请输入账号"
                  v-model="name">
        </el-input>
      </el-row>
      <el-row class="input-row">
        <el-input style="width:80%" type="password"
                  placeholder="请输入密码"
                  v-model="pass">
        </el-input>
      </el-row>
    </div>
    <!-- Login -->
    <div v-if="!isLogin && !inSignupPage">
      <el-row class="input-row">
        <el-button type="primary" style="width:80%" @click="onLogin">
          登录
        </el-button>
      </el-row>
      <el-row class="input-row">
        <span>没有账号？</span>
        <el-button @click="inSignupPage = true">注册</el-button>
      </el-row>
    </div>
    <!-- Signup -->
    <div v-if="!isLogin && inSignupPage">
      <el-row class="input-row">
        <el-upload action="/placeholder"
                   list-type="picture"
                   :multiple="false"
                   :on-change="onSelectImage"
                   :auto-upload="false">
          <el-tag>
            上传头像
            <i class="el-icon-plus"></i>
          </el-tag>
        </el-upload>
      </el-row>
      <el-row class="input-row">
        <el-button type="primary" style="width:80%" @click="onSignup">
          注册
        </el-button>
      </el-row>
      <el-row class="input-row">
        <span>已有账号？</span>
        <el-button @click="inSignupPage = false">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  function getCookies() {
    var cookies = {};
    var rawCookies = document.cookie.split(';');
    for (var i = 0; i < rawCookies.length; i++) {
      var pair = rawCookies[i].trim().split('=');
      cookies[pair[0]] = pair[1];
    }
    return cookies;
  }

  import axios from 'axios'
  import articleThinItemComponent from './components/article-thin-item-component'
  export default {
    name: 'userPage',
    components: {
      articleThinItemComponent
    },
    data() {
      var cookies = getCookies();
      return {
        // check login
        isLogin: cookies['userName'] != null,
        inSignupPage: false,
        // not login
        name: '',
        pass: '',
        file: null,
        // is login
        userName: cookies['userName'],
        userAvatar: cookies['userAvatar'],
        items: []
      };
    },
    mounted() {
      document.title = '个人管理 | BUPT Go';
      this.checkLogin();
    },
    methods: {
      checkLogin() {
        var cookies = getCookies();
        if (!cookies['userName']) {
          this.isLogin = false;
          return;
        }
        this.isLogin = true;

        const url = '/article/user';
        const params = { name: cookies['userName'] };

        var vm = this;
        const loading = vm.$loading({ lock: true });
        axios.get(url, { params }).then(function (res) {
          vm.items = [];
          for (const item of res.data) {
            vm.items.push({
              id: item._id,
              timestamp: new Date(item.timestamp).toLocaleString(),
              title: item.title
            });
          }

          loading.close();
        }).catch(function (e) {
          loading.close();
          vm.$message.error({
            message: e.response.data.err, showClose: true
          });
        });
      },
      onLogin() {
        const url = '/user/login';
        const data = new FormData();
        data.append('name', this.name);
        data.append('pass', this.pass);

        var vm = this;
        const loading = vm.$loading({ lock: true });
        axios.post(url, data).then(function (res) {
          vm.$message({
            message: res.data.msg, showClose: true
          });
          vm.checkLogin();

          loading.close();
        }).catch(function (e) {
          loading.close();
          vm.$message.error({
            message: e.response.data.err, showClose: true
          });
        });
      },
      onSignup() {
        const url = '/user/signup';
        const data = new FormData();
        data.append('name', this.name);
        data.append('pass', this.pass);
        data.append('image', this.file);

        var vm = this;
        const loading = vm.$loading({ lock: true });
        axios.post(url, data).then(function (res) {
          vm.$message({
            message: res.data.msg, showClose: true
          });
          vm.checkLogin();

          loading.close();
        }).catch(function (e) {
          loading.close();
          vm.$message.error({
            message: e.response.data.err, showClose: true
          });
        });
      },
      onLogout() {
        const url = '/user/logout';
        const data = new FormData();

        var vm = this;
        const loading = vm.$loading({ lock: true });
        axios.post(url, data).then(function (res) {
          vm.$message({
            message: res.data.msg, showClose: true
          });
          vm.checkLogin();

          loading.close();
        }).catch(function (e) {
          loading.close();
          vm.$message.error({
            message: e.response.data.err, showClose: true
          });
        });
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
  .input-row {
    margin: 10px 0;
    text-align: center;
  }
</style>
