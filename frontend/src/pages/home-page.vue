<template>
  <div>
    <el-header style="text-align: center">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="4">
          <router-link :to="{ name:'userPage' }">
            <i class="el-icon-menu"></i>
          </router-link>
        </el-col>
        <el-col :span="16">
          <h1>BUPT Go</h1>
        </el-col>
        <el-col :span="4">
          <router-link :to="{ name:'searchPage' }">
            <i class="el-icon-search"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <article-rich-item-component v-for="item in items" v-bind="item" :key="item.id" />
  </div>
</template>

<script>
import articleRichItemComponent from './components/article-rich-item-component'
export default {
  name: 'homePage',
  components: {
    articleRichItemComponent
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    document.title = '主页 | BUPT Go';
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
</style>
