<template>
  <div>
    <router-link :to="{ name:'articlePage', params: { articleId: 123 } }">
      <el-col>
        <div class="example">
          <el-row type="flex" align="middle" justify="space-around">
          <img v-bind:src="img" alt="" width="75%" height="75%">
          </el-row>
          <br />
          <el-row type="flex" align="middle" justify="space-around">
            <el-col>
              <div class="grid-content bg-purple">
              <p>{{ title }}</p>
              </div>
            </el-col>
            <el-col>
              <div class="grid-content bg-purple">
              <i class="el-icon-setting"></i>
              </div>
            </el-col>
            <el-col>
              <div class="grid-content bg-purple">
              <i class="el-icon-date"></i>  
              </div>          
            </el-col>
          </el-row>
        </div>
      </el-col>
    </router-link>
    <hr />
  </div>
</template>

<script>
    export default {
        name: 'listComponent',
        props:['title','img']
    }
</script>

<style scoped>
</style>
