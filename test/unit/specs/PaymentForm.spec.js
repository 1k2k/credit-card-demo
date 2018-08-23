import Vue from 'vue'
import PaymentForm from '@/components/PaymentForm'

describe('PaymentForm.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PaymentForm)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.card-headline__text').textContent)
      .toEqual('Shopping Cart')
  })
})