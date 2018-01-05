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
          <el-col v-if="author">
            <p>作者：{{ author }}</p>
          </el-col>
          <el-col v-if="contact">
            <p>联系方式：{{ contact }}</p>
          </el-col>
          <el-col v-if="location">
            <p>地址：{{ location }}</p>
          </el-col>
        </el-row>
      </div>
      <div style="text-indent:2em;">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articlePage',
    props: ['id', 'title', 'img', 'author'],
    created() {
      if (!this.title)
        this.title = 'Untitled';
      this.contact = '123454566';
      this.location = '北京邮电大学';
      this.text = "Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是	反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免	 应用的数据流变得难以理解。另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。";
      document.title = this.title + ' | BUPT Go';
    }
  }
</script>

<style scoped>
  .article {
    margin: 20px;
  }
</style>
