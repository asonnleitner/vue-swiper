import { shallowMount } from '@vue/test-utils'
import Swiper from '@/Swiper.vue'

describe('Renders:', () => {
	test('should render nav buttons', () => {
		const wrapper = shallowMount(Swiper, {
			slots: {
				prevButton: 'prev',
				nextButton: 'next'
			}
		})

		expect(wrapper.text()).toContain('prev')
		expect(wrapper.text()).toContain('next')
	})
})
