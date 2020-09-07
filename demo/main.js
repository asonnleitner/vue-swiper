import Vue from 'vue'
import App from './App.vue'
import Swiper from '../src'
import CodePen from './components/CodePen'

Vue.config.productionTip = false

Vue.use(Swiper)
Vue.component('code-pen', CodePen)

new Vue({
	render: h => h(App)
}).$mount('#app')
