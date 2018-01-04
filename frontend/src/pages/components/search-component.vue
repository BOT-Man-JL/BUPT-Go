<template>
  <div>
    <!--<router-link :to="{ name:'articlePage', params: { articleId: 123 } }">-->
    <el-col>
    <el-select v-model="value" placeholder="请选择地区">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: 'searchComponent',
        data(){
          return{
            options: [{
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
            },{
              value: '选项6',
              label: '丰台区'
            }],
            value: ''
          }
        }
    }
</script>

<style scoped>  

</style>
