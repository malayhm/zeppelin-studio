import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'

// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'
import VueSplit from 'vue-split-panel'
import VueOffline from 'vue-offline'

import 'ant-design-vue/dist/antd.css'

import api from '@/services/api.js'

window.$ = window.jQuery = require('jquery')

Vue.use(Antd)

Vue.config.productionTip = false

// Vue.component('v-icon', Icon)
Vue.use(VueSplit)
Vue.use(VueOffline, {
  mixin: false
});

(() => {
  fetch(api.getRestApiBase() + '/security/ticket')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      new Vue({
        data: {
          ticket: response.body
        },
        computed: {
          networkStatus () {
            return this.isOnline ? 'My network is fine' : 'I am offline'
          }
        },
        mounted () {
          this.$on('offline', () => {
            alert('You are offline! The website will not work')
          })
        },
        router,
        store,
        render: h => h(App),
        renderError (h, err) {
          return h('pre', { style: { color: 'red' } }, err.stack)
        }
      }).$mount('#app')
    })
})()
