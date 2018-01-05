<template>
    <div class="hello">
    	<el-col :span="10">
        <user-header-component></user-header-component>

		<user-component v-for="item in items" :key="item.title"
              				:title="item.title" 
              				:date="item.date"
        >
        </user-component>
        </el-col>
    </div>
</template>

<script>
	import userHeaderComponent from './components/user-header-component'
	import userComponent from './components/user-component'
    export default {
        name: 'userPage',
        data() {
            return {
            	items:[
        		{title:"my title", date:"2017/06/01"},
        		{title:"my title2", date:"2017/06/01"},
        		{title:"my title3", date:"2017/06/01"},
        		{title:"my title4", date:"2017/06/01"},
        		]
            };
        },
        components:{
    		userHeaderComponent,
    		userComponent
  		}
    }
</script>

<style scoped>
</style>
