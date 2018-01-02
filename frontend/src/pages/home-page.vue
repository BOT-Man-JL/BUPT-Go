<template>
  <div class="container">
  <el-col :span="10">
    <header-component></header-component>   <!--  展示引入的header组件 -->
    <div class="content">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <list-component v-for="item in items" :key="item.title"
              :title="item.title" 
              :img="item.img"
        >
        <hr />
        </list-component>
      </ul>
    </div>
  </el-col>
  </div>
</template>

<script>
import headerComponent from './components/header-component'
import listComponent from './components/list-component'
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
    headerComponent,
    listComponent
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
