<template>
    <div class="hello">
    <el-col :span="10">
    	<el-row>
    		<el-input 
            	size="small" 
            	placeholder="请输入攻略的标题"
    		    v-model="title"
          	>
          	</el-input>
    	</el-row>
    	<br />
    	<el-row>
    		<el-input 
            	size="small" 
            	placeholder="请输入联系方式"
    		    v-model="telephone"
          	>
          	</el-input>
    	</el-row>
    	<br />
    	<el-row>
    		<el-input 
            	size="small" 
            	placeholder="请输入地址"
    		    v-model="address"
          	>
          	</el-input>
    	</el-row>
    	<br />
    	<el-row>
    		<el-tag>出行时间</el-tag>
			<el-date-picker
			    v-model="date"
			    type="daterange"
			    range-separator="至"
			    start-placeholder="开始日期"
			    end-placeholder="结束日期">
			</el-date-picker>
    	</el-row>
    	<br />
    	<el-row>
    		<el-input
  				type="textarea"
  				:autosize="{ minRows: 2, maxRows: 6}"
  				placeholder="在此处输入内容"
  				v-model="text">
			</el-input>
    	</el-row>
    	<br />
    	<el-row>
			<el-upload
  				action="https://jsonplaceholder.typicode.com/posts/"
  				list-type="picture-card"
  				:on-preview="handlePictureCardPreview"
  				:on-remove="handleRemove">
  				<i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible" size="tiny">
			  	<img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
    	</el-row>
    	<br />
    	<el-row type="flex" align="middle" justify="space-around">
    		<el-col>
    			<el-button type="primary">提交
    			<i class="el-icon-success el-icon--right"></i>
    			</el-button>
    		</el-col>
    		<el-col>
    			<el-button type="primary">删除
    			<i class="el-icon-delete el-icon--right"></i>
    			</el-button>    			
    		</el-col>
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
            	telephone:'',
            	address:'',
            	text:'',
            	date:'',
            	dialogImageUrl: '',
        		dialogVisible: false
            };
        },
        methods: {
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	    },
	      handlePictureCardPreview(file) {
	        this.dialogImageUrl = file.url;
	        this.dialogVisible = true;
	    }
    }
    }
</script>

<style scoped>
</style>
