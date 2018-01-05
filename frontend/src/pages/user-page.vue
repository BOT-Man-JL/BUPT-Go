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
    <article-thin-item-component v-if="isLogin"
                                 v-for="item in items" v-bind="item" :key="item.id" />
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
    <div v-if="!isLogin && !inSignupPage">
      <el-row class="input-row">
        <el-button type="primary" style="width:80%">
          登录
        </el-button>
      </el-row>
      <el-row class="input-row">
        <span>没有账号？</span>
        <el-button @click="inSignupPage = true">注册</el-button>
      </el-row>
    </div>
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
        <el-button type="primary" style="width:80%">
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
  import articleThinItemComponent from './components/article-thin-item-component'
  export default {
    name: 'userPage',
    components: {
      articleThinItemComponent
    },
    data() {
      var cookies = {};
      var rawCookies = document.cookie.split(';');
      for (var i = 0; i < rawCookies.length; i++) {
        var pair = rawCookies[i].trim().split('=');
        cookies[pair[0]] = pair[1];
      }
      //cookies['userName'] = 'John';

      return {
        isLogin: cookies['userName'] != null,
        inSignupPage: false,
        userAvatar: cookies['userAvatar'],
        name: '',
        pass: '',
        file: null,
        items: [
          { id: 1, title: 'my title1', timestamp: '2018-01-01' },
          { id: 2, title: 'my title2', timestamp: '2018-01-01' },
          { id: 3, title: 'my title3', timestamp: '2018-01-01' },
          { id: 4, title: 'my title4', timestamp: '2018-01-01' },
        ]
      };
    },
    methods: {
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
