import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import homePage from '@/components/home-page'
import testAjaxPage from '@/components/test-ajax'

Vue.use(Router)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router: new Router({
        routes: [
            {
                path: '/',
                name: 'homePage',
                component: homePage
            },
            {
                path: '/test-ajax',
                name: 'testAjaxPage',
                component: testAjaxPage
            }
        ]
    })
})
