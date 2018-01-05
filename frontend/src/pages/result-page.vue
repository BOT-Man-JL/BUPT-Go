<template>
    <div class="hello">
    <el-col :span="10">
        <p>result {{$route.params.articleInput}} here</p>
        <home-header-component></home-header-component>
    	<div class="content">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <article-list-component v-bind="values">
        <hr />
        </article-list-component>
    	</div>
	</el-col>
    </div>
</template>

<script>
  import homeHeaderComponent from './components/home-header-component'
  import articleListItemComponent from './components/article-list-item-component'
  export default {
    name: 'resultPage',
    data() {
      return {
        values: {
          text: "Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是	反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免	 应用的数据流变得难以理解。另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。",
          telephone: "123454566",
          address: "北京邮电大学",
          title: this.$route.params.articleInput,
          img: this.$route.params.articleImg
        }
      };
    },
    components: {
      homeHeaderComponent,
      articleListItemComponent
    }
  }
</script>

<style scoped>
</style>
