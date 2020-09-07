import { shallowMount } from '@vue/test-utils'
import Swiper from '@/Swiper.vue'


describe('Settings:', () => {
	describe('initialSettings object:', () => {
		test('should contain all possible props without options', async () => {
			const { vm } = shallowMount(Swiper)
			const { initialSettings, $props } = vm

			Object.keys($props).forEach(key => {
				const condition = key !== 'options'
				expect(initialSettings.hasOwnProperty(key)).toEqual(condition)
			})
		})

		test('options object should be merged with other props', async () => {
			const { vm } = shallowMount(Swiper, {
				propsData: {
					options: {
						infinite: false,
						fade: true,
						throttle: 0
					}
				}
			})

			const { initialSettings, $props } = vm

			expect(initialSettings.infinite).toEqual(false)
			expect(initialSettings.fade).toEqual(true)
			expect(initialSettings.throttle).toEqual(0)
		})
	})
})
