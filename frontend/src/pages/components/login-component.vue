<template>
  <div>
    <el-row>
      <el-input 
              size="small" 
              placeholder="请输入账号："
              v-model="account"
      >
      </el-input>
    </el-row>
    <br />
    <el-row>
        <el-input 
              type="password"
              size="small" 
              placeholder="请输入密码："
              v-model="password"
        >
        </el-input>
    </el-row>
    <br />
    <el-row type="flex" align="middle" justify="space-around">
        <el-col>
          <el-button type="primary">登录
          </el-button>
        </el-col>
        <el-col>
          <el-button type="primary">取消
          </el-button>          
        </el-col>
    </el-row>   
  </div>
</template>

<script>
    export default {
        name: 'lgoinComponent',
        data() {
          return {
            account:'',
            password:'',
          };
        },
    }
</script>

<style scoped>  

</style>
