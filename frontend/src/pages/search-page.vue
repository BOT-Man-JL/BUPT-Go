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
    <div>
      <el-select v-model="area" placeholder="请选择地区">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchPage',
    data() {
      return {
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
        }, {
          value: '选项6',
          label: '丰台区'
        }],
        area: ''
      }
    }
  }
</script>

<style scoped>
</style>
