import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes } from './routes.js'
import store from './store/store';
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

// The FireBase have been used for the database. You can create one in your FireBase account for free.
// After doing so, copy/paste the link in between the single quotation marks below.

Vue.http.options.root = '';

Vue.filter('currency', (value)=>{
    return '$' + value.toLocaleString();
})
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
