<template>
    <div class="hello">
    	<el-col :span="10">
        <!--<p>article {{ $route.params.searchInput }} here</p>-->
        <article-header-component></article-header-component>
		<search-component v-for="item in items" :key="item.title"
              					:title="item.title" :img="item.img"
		></search-component>
        </el-col>
    </div>
</template>

<script>
	import articleHeaderComponent from './components/article-header-component'
	import searchComponent from './components/search-component'
    export default {
        name: 'searchPage',
        data() {
            return {
            	items:[
        			{title:"my title", img:"/static/pics/u4.jpg"},
        			{title:"my title2", img:"/static/pics/u11.jpeg"},
        			{title:"my title3", img:"/static/pics/u19.jpeg"},
        			{title:"my title4", img:"/static/pics/u23.jpeg"},
        		]
            };
        },  
        components:{
    		articleHeaderComponent,
    		searchComponent
  		}
    }

</script>

<style scoped>
</style>
