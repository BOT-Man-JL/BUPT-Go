<template>
    <div class="articleDetail">
    	<el-col :span="10">
		<article-header-component></article-header-component>
		<article-component v-bind="values">
			<p>aa</p>
		</article-component>
        <!--<p>article {{ $route.params.articleId }} here</p>-->
        </el-col>
    </div>
</template>

<script>
	import articleComponent from './components/article-component'
	import articleHeaderComponent from './components/article-header-component'
    export default {
        name: 'articlePage',
        data() {
            return {
            	values:{
            		text:"Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是	反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免	 应用的数据流变得难以理解。另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 pro",
            		telephone:"123454566",
            		address:"北京邮电大学",
            	    title: this.$route.params.articleTitle, 
					img: this.$route.params.articleImg	
				}
            };
        },
        components:{
    		articleHeaderComponent,
    		articleComponent
  		}
    }
</script>

<style scoped>
</style>
