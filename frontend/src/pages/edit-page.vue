<template>
    <div class="hello">
    <el-col :span="10">
    	<el-row>
    		<p>标题:</p>
    		<el-input 
            size="small" 
            	placeholder="请输入内容"
    		    prefix-icon="el-icon-search"
    		    v-model="title"
          	>
          	</el-input>
    	</el-row>
    	<el-row>
    		<p>时间:</p>
    		<el-date-picker
      			v-model="date"
      			type="date"
      			placeholder="选择日期">
    		</el-date-picker>
    	</el-row>
    	<el-row>
    		<p>介绍:</p>
    		<el-input
  				type="textarea"
  				:autosize="{ minRows: 2, maxRows: 6}"
  				placeholder="请输入内容"
  				v-model="text">
			</el-input>
    	</el-row>
    </el-col>
    </div>
</template>

<script>
    export default {
        name: 'editPage',
        data() {
            return{
            	title:'',
            	text:'',
            	date:''
            };
        }
    }
</script>

<style scoped>
</style>
