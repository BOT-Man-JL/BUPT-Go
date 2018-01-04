<template>
  <div>
    <el-col>
      <div class="userData">
        <el-row type="flex">
          <div class="grid-content bg-purple">
          <p>{{ title }}</p>
          </div>
        </el-row>
        <el-row>
          <el-col>
            <div class="grid-content bg-purple">
            <p>{{date}}</p>
            </div>
          </el-col>
          <el-col>
            <div class="grid-content bg-purple">
            <i class="el-icon-edit"></i>  
            </div>          
          </el-col>
          <el-col>
            <div class="grid-content bg-purple">
            <i class="el-icon-delete"></i>  
            </div>          
          </el-col>
        </el-row>
      </div>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: 'userComponent',
        props:['title','date']
    }
</script>

<style scoped>  

</style>
