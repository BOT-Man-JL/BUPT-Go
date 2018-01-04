<template>
    <div class="hello">
    	<el-col :span="10">
        <!--<p>article {{ $route.params.searchInput }} here</p>-->
        <article-header-component></article-header-component>

		<search-component></search-component>
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
