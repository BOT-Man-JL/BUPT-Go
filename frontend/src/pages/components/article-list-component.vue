<template>
  <div>
    <router-link :to="{ name:'articlePage', query: { id: id },
                        params: { title: title, img: img} }">
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
        name: 'articleListComponent',
        props:['id','title','img','date','telephone','address','text']
    }
</script>

<style scoped>
</style>
