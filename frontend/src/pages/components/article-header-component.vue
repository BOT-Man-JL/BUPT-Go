<template>
  <div class="header">
	<el-header>
    <el-row type="flex" align="middle" justify="space-around">
        <el-col>
          <div class="grid-content bg-purple">
          <router-link :to="{ name:'homePage' }">
          <i class="el-icon-back"></i>
          </router-link>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
          <el-input 
            size="small" 
            placeholder="请输入内容"
    		    prefix-icon="el-icon-search"
    		    v-model="input"
          >
          </el-input>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
          <router-link to="/search">
          <i class="el-icon-search"></i>
          </router-link>
          </div>
        </el-col>
    </el-row>
    </el-header>
  </div>
</template>

<script>
    export default {
        name: 'articleHeaderComponent',
        data() {
            return {
            	input:''
            }
        }
    }

</script>

<style scoped>
</style>
