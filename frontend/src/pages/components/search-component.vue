<template>
  <div>
    <!--<router-link :to="{ name:'articlePage', params: { articleId: 123 } }">-->
    <el-col>
        <div class="hot">
          <el-row>
              <router-link :to="{ name:'articlePage', 
                        params: { articleTitle: title, articleImg: img} }">
              <div class="grid-content bg-purple">
              <li>{{ title }}</li>
              <hr />
              </div>
              </router-link>
          </el-row>
        </div>
      </el-col>
  </div>
</template>

<script>
    export default {
        name: 'searchComponent',
        props:['title','img']
    }
</script>

<style scoped>  

</style>
