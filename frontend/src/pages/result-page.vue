<template>
  <div>
    <el-header style="text-align: center">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="4">
          <router-link :to="{ name:'homePage' }">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col :span="16">
          <h1>搜索结果</h1>
        </el-col>
        <el-col :span="4">
          <router-link :to="{ name:'searchPage' }">
            <i class="el-icon-search"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <article-list-item-component v-for="item in items" v-bind="item" />
  </div>
</template>

<script>
  import articleListItemComponent from './components/article-list-item-component'
  export default {
    name: 'resultPage',
    props: ['category', 'area', 'date'],
    data() {
      return {
        items: []
      };
    },
    components: {
      articleListItemComponent
    },
    created() {
      document.title = '搜索结果 | BUPT Go';
      this.items = [
        { id: 1, title: 'my title1', img: '/static/pics/u14.jpeg', author: 'John', category: '美食', area: '东城区' },
        { id: 2, title: 'my title2', img: '/static/pics/u11.jpeg', author: 'John', category: '电影', area: '西城区' },
        { id: 3, title: 'my title3', img: '/static/pics/u19.jpeg', author: 'Jack', category: '展览', area: '朝阳区' },
        { id: 4, title: 'my title4', img: '/static/pics/u23.jpeg', author: 'Jack', category: '其他', area: '海淀区' },
      ];
    }
  }
</script>

<style scoped>
  a {
    color: #808080;
  }
</style>
