<template>
  <div>
    <!--<router-link :to="{ name:'articlePage', params: { articleId: 123 } }">-->
      <el-col>
        <div class="example">
          <el-row type="flex" align="middle" justify="space-around">
          <img v-bind:src="img" alt="" width="70%" height="70%">
          </el-row>
          <br />
          <p>{{ title }}</p>
          <div>
          <el-row type="flex" align="middle" justify="center">
            <el-col>
            <p>联系方式：{{telephone}}</p>
            </el-col>
            <el-col>
            <p>地址：{{address}}</p>
            </el-col>
          </el-row>
          </div>
          <br/>
          <p class="p1">
            {{text}}
          </p>
        </div>
      </el-col>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: 'articleComponent',
        props:['text','title','img','telephone','address']
    }
</script>

<style scoped>  
  .p1{
    text-indent:2em;
  }
</style>
