<template>
    <div class="hello">
        <h3>{{ msg }}</h3>
        <img v-bind:src="imgSrc" />
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'testAjaxPage',
        data() {
            return {
                msg: 'loading...',
                imgSrc: ''
            };
        },
        created() {
            var vm = this;
            axios.get('https://yesno.wtf/api').then(function (response) {
                vm.msg = response.data.answer;
                vm.imgSrc = response.data.image;
            }).catch(function (error) {
                vm.msg = 'Error! Could not reach the API. ' + error;
            });
        }
    }
</script>

<style scoped>
</style>
