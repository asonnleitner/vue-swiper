import VueSwiper from './Swiper.vue'

const install = (Vue) => {
	Vue.component('swiper', VueSwiper)
}

export default {
	install
}

export { VueSwiper }
