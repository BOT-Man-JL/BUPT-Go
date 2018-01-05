<template>
  <el-row type="flex" align="middle" justify="space-around">
    <el-col :span="18" align="left">
      <router-link :to="{ name:'articlePage', query: { id: id },
                      params: { title: title, img: img, author: author } }">
        <h2>{{ title }}</h2>
      </router-link>
    </el-col>
    <el-col :span="6" align="right">
      <span>{{ timestamp }}</span>
      <router-link :to="{ name:'editPage', query: { id: id } }">
        <i class="el-icon-edit"></i>
      </router-link>
      <i class="el-icon-delete"></i>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'articleThinItemComponent',
    props: ['id', 'title', 'timestamp']
  }
</script>

<style scoped>
  a {
    color: #808080;
    text-decoration: none;
  }
</style>
