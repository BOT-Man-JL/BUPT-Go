<template>
  <div class="header">
	<el-header>
    <el-row type="flex" align="middle" justify="space-around">
        <el-col>
          <div class="grid-content bg-purple">
          <router-link :to="{ name:'homePage' }" replace>
          <i class="el-icon-back"></i>
          </router-link>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
          <router-link :to="{ name:'searchPage' }">
          <el-input 
            size="small" 
            placeholder="请输入内容"
    		    prefix-icon="el-icon-search"
    		    v-model="input"
          >
          </el-input>
          </router-link>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
          <router-link :to="{ name:'editPage' }">
          <i class="el-icon-edit"></i>
          </router-link>
          </div>
        </el-col>
    </el-row>
    </el-header>
  </div>
</template>

<script>
    export default {
        name: 'userHeaderComponent',
        data() {
            return {
            	input:''
            }
        }
    }

</script>

<style scoped>
</style>
