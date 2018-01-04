<template>
  <div class="container">
  <el-col :span="10">
    <home-header-component></home-header-component> 
    <div class="content">
        <article-list-component v-for="item in items" :key="item.title"
              :title="item.title" 
              :img="item.img"
              :id="12"
        >
        <hr />
        </article-list-component>
    </div>
  </el-col>
  </div>
</template>

<script>
import homeHeaderComponent from './components/home-header-component'
import articleListComponent from './components/article-list-component'
export default {
  name: 'homePage',
  data () {
      return{
        items:[
        {title:"my title", img:"/static/pics/u4.jpg"},
        {title:"my title2", img:"/static/pics/u11.jpeg"},
        {title:"my title3", img:"/static/pics/u19.jpeg"},
        {title:"my title4", img:"/static/pics/u23.jpeg"},
        ]
      };
  },
  components:{
    homeHeaderComponent,
    articleListComponent
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
