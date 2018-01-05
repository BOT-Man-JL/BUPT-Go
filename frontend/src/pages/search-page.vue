<template>
  <div>
    <el-header style="text-align: center">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="4">
          <div>
            <router-link :to="{ name:'homePage' }">
              <i class="el-icon-back"></i>
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
    <div style="text-align: center">
	    <div>
	      <el-select v-model="area" placeholder="请选择地区">
	        <el-option v-for="item in areaOptions"
	                   :key="item.value"
	                   :label="item.label"
	                   :value="item.value">
	        </el-option>
	      </el-select>
	    </div>
	    <div>
	      <el-select v-model="category" placeholder="请选择类别">
	        <el-option v-for="item in categoryOptions"
	                   :key="item.value"
	                   :label="item.label"
	                   :value="item.value">
	        </el-option>
	      </el-select>
	    </div>
	    <div>
	        <el-date-picker
			      v-model="date"
			      type="date"
			      placeholder="选择日期">
    		</el-date-picker>
	    </div>
	    <div>
	        <el-button type="primary">搜索
    		<i class="el-icon-search el-icon--right"></i>
    		</el-button>
	    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchPage',
    data() {
      return {
        areaOptions: [{
          value: '选项1',
          label: '西城区'
        }, {
          value: '选项2',
          label: '东城区'
        }, {
          value: '选项3',
          label: '海淀区'
        }, {
          value: '选项4',
          label: '朝阳区'
        }, {
          value: '选项5',
          label: '昌平区'
        }, {
          value: '选项6',
          label: '石景山区'
        }, {
          value: '选项7',
          label: '其他'
        }],
        categoryOptions: [{
          value: '选项1',
          label: '美食'
        }, {
          value: '选项2',
          label: '展览'
        }, {
          value: '选项3',
          label: '娱乐'
        }, {
          value: '选项4',
          label: '锻炼'
        }, {
          value: '选项5',
          label: '景点'
        }, {
          value: '选项6',
          label: '演出'
        }, {
          value: '选项7',
          label: '其他'
        }],
        area: '',
        category :'',
        date: ''
      }
    }
  }
</script>

<style scoped>
</style>
