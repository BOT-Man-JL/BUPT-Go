import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import homePage from './pages/home-page'
import articlePage from './pages/article-page'
import searchPage from './pages/search-page'
import resultPage from './pages/result-page'
import userPage from './pages/user-page'
import editPage from './pages/edit-page'

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
        ]
    })
})
