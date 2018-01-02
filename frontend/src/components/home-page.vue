<template>
  <div class="hello">
    <el-col :span="10">
    <div class="example">
        <el-row type="flex" align="middle" justify="space-around">
        <img v-bind:src="imgSrc" width="50%" height="50%">
        </el-row>
        <br />
        <el-row type="flex" align="middle" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple">
            <h2>{{ title }}</h2>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
            <i class="el-icon-setting"></i>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
            <i class="el-icon-loading"></i>  
            </div>          
          </el-col>
        </el-row>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      imgSrc: '/static/pics/u4.jpg',
      title: 'my title'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
