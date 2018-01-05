<template>
  <el-row type="flex" align="middle" justify="space-around">
    <el-col :span="16" align="left">
      <router-link :to="{ name:'articlePage', query: { id: id },
                      params: { title: title, img: img, author: author } }">
        <h2>{{ title }}</h2>
      </router-link>
    </el-col>
    <el-col :span="8" align="right">
      <span>{{ timestamp }}</span>
      <router-link :to="{ name:'editPage', query: { id: id } }">
        <el-button icon="el-icon-edit" size="mini" />
      </router-link>
      <el-button @click="onDelete" icon="el-icon-delete" size="mini" />
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'articleThinItemComponent',
    props: ['id', 'title', 'timestamp'],
    methods: {
      onDelete() {
        alert(id);
      }
    }
  }
</script>

<style scoped>
  a {
    color: #808080;
    text-decoration: none;
  }
</style>
