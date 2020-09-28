import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/base.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/icon/iconfont.css';

// Vue.prototype.$qrCode = QRCode;

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
