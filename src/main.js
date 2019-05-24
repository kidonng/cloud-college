import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'reset-css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueSocketIO from 'vue-socket.io'
// import SocketIo from 'socket.io-client'
import ky from 'ky'

Vue.config.productionTip = false
Vue.prototype.api = ky.extend({ prefixUrl: 'http://101.132.107.146/api' })

// const options = { path: '/socket.io' }
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: SocketIo("http://192.168.1.100", options), //options object is Optional
//     vuex: {
//       store,
//       actionPrefix: "SOCKET_",
//       mutationPrefix: "SOCKET_"
//     }
//   })
// );

Vue.use(ElementUI, store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
