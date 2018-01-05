<template>
  <div>
    <el-header style="text-align: center">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="4">
          <div>
            <router-link :to="{ name:'userPage' }">
              <i class="el-icon-setting"></i>
            </router-link>
          </div>
        </el-col>
        <el-col :span="16">
          <div>
            <h1>BUPT Go</h1>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <router-link :to="{ name:'searchPage' }">
              <i class="el-icon-search"></i>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <article-list-item-component v-for="item in items" :key="item.id" :id="item.id"
                                 :title="item.title" :img="item.img" :author="item.author"
                                 :category="item.category" :area="item.area" />
  </div>
</template>

<script>
import articleListItemComponent from './components/article-list-item-component'
export default {
  name: 'homePage',
  data() {
    return {
      items: [
        { id: 1, title: 'my title1', img: '/static/pics/u14.jpeg', author: 'John', category: '美食', area: '东城区' },
        { id: 2, title: 'my title2', img: '/static/pics/u11.jpeg', author: 'John', category: '电影', area: '西城区' },
        { id: 3, title: 'my title3', img: '/static/pics/u19.jpeg', author: 'Jack', category: '展览', area: '朝阳区' },
        { id: 4, title: 'my title4', img: '/static/pics/u23.jpeg', author: 'Jack', category: '其他', area: '海淀区' },
      ]
    };
  },
  components: {
    articleListItemComponent
  }
}
</script>

<style scoped>
  a {
    color: #808080;
  }
</style>
