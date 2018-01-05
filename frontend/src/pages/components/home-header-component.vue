<template>
  <el-header style="text-align: center">
    <el-row type="flex" align="middle" justify="space-around">
      <el-col :span="4">
        <div>
          <router-link :to="{ name:'userPage' }">
            <i class="el-icon-setting"></i>
          </router-link>
        </div>
      </el-col>
      <el-col :span="16">
        <div>
          <h1>BUPT Go</h1>
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <router-link :to="{ name:'searchPage' }">
            <i class="el-icon-search"></i>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: 'homeHeaderComponent'
  }
</script>

<style scoped>
</style>
