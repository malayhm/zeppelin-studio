import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

// import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueSplit from 'vue-split-panel'
import VueOffline from 'vue-offline'

window.$ = window.jQuery = require('jquery')

require('bootstrap')

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('v-icon', Icon)
Vue.use(VueSplit)
Vue.use(VueOffline, {
  mixin: false
})

new Vue({
  data: {

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
