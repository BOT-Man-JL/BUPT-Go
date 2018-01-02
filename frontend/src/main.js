import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import homePage from './components/home-page'
import testAjaxPage from './components/test-ajax'
import articlePage from './components/article-page'
import searchPage from './components/search-page'
import resultPage from './components/result-page'
import userPage from './components/user-page'

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
                path: '/article',
                name: 'articlePage',
                component: articlePage
            },
            {
                path: '/search',
                name: 'searchPage',
                component: searchPage
            },
            {
                path: '/result',
                name: 'resultPage',
                component: resultPage
            },
            {
                path: '/user',
                name: 'userPage',
                component: userPage
            },
            {
                path: '/test-ajax',
                name: 'testAjaxPage',
                component: testAjaxPage
            },
        ]
    })
})
