<template>
  <div class="payment-wrapper">
    <!--Cart-->
    <div class="payment-wrapper__item payment-wrapper__item_cart">
      <div class="payment-cart">
        <div class="payment-cart__item payment-cart__item_head">
          <div class="card-headline">
            <h2 class="card-headline__text">Shopping Cart</h2>
          </div>
        </div>
        <div class="payment-cart__item payment-cart__item_body">
          <div class="products-list">
            <div class="products-list__item">
              <div class="product">
                <div class="product__item product__item_photo">
                  <div class="product-photo">
                    <img src="https://raw.githubusercontent.com/1k2k/credit-card-demo/master/src/assets/img/components/product-photo/product1.png" />
                  </div>
                </div>
                <div class="product__item">
                  <div class="product-info">
                    <div class="product-info__item product-info__item_headline">
                      <span>Wool Runners</span>
                    </div>
                    <div class="product-info__item">
                      <span>WOMEN'S</span>
                    </div>
                    <div class="product-info__item">
                      <span>NATURAL GREY / LIGHT GREY</span>
                    </div>
                  </div>
                </div>
                <div class="product__item product__item_price">
                  <span class="product-price">$95.00</span>
                </div>
              </div>
            </div>
            <div class="products-list__item">
              <div class="product">
                <div class="product__item product__item_photo">
                  <div class="product-photo">
                    <img src="https://raw.githubusercontent.com/1k2k/credit-card-demo/master/src/assets/img/components/product-photo/product2.png" />
                  </div>
                </div>
                <div class="product__item">
                  <div class="product-info">
                    <div class="product-info__item product-info__item_headline">
                      <span>Runner Lace Pack</span>
                    </div>
                    <div class="product-info__item">
                      <span>WOMEN'S</span>
                    </div>
                    <div class="product-info__item">
                      <span>COCONUT / LIME / GRAPEFRUIT</span>
                    </div>
                  </div>
                </div>
                <div class="product__item product__item_price">
                  <span class="product-price">$95.00</span>
                </div>
              </div>
            </div>
            <!--Bonus-->
            <div class="products-list__item">
              <div class="product">
                <div class="product__item product__item_photo">
                  <div class="product-photo">
                    <IconDeliveryTruck/>
                  </div>
                </div>
                <div class="product__item">
                  <div class="product-info">
                    <div class="product-info__item product-info__item_headline">
                      <span>+ Free Shipping</span>
                    </div>
                  </div>
                </div>
                <div class="product__item product__item_price">
                  <span class="product-price product-price_normal">$0.00</span>
                </div>
              </div>
             </div>
          </div>
        </div>
        <div class="payment-cart__item payment-cart__item_action">
          <div class="payment-cart-action">
            <div class="payment-cart-action__item">
              <button class="btn btn_trans btn_small">
                <div class="btn-content">
                  <div class="btn-content__text">
                    <span>KEEP SHOPPING</span>
                  </div>
                </div>
              </button>
            </div>
            <div class="payment-cart-action__item payment-cart-action__item_total">
              <span>TOTAL</span>
              <b>$105.00</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Form-->
    <div class="payment-wrapper__item payment-wrapper__item_form">
      <form class="payment-form">
        <!--Headline-->
        <div class="payment-form__item">
          <div class="card-headline">
            <h2 class="card-headline__text">Your Payment Details</h2>
          </div>
        </div>
        <!--Tabs-->
        <div class="payment-form__item">
          <div class="card-tabs">
            <a href="#" class="card-tabs__item card-tabs__item--is-active">
              <span>Credit card</span>
            </a>
            <a href="#" class="card-tabs__item card-tabs__item_paypal">
              <img src="../assets/img/components/card-tabs/pp_logo.svg" alt="PayPal" title="Pay with PayPal" />
            </a>
          </div>
        </div>
        <!--Fields-->
        <div class="payment-form__item">
          <div class="payment-form-row">
            <div class="payment-form-row__item">
              <div class="payment-form-field payment-form-field_fluid">
                <label for="" class="payment-form-field__label">Card number</label>
                <div class="input input_with-icon">
                  <input v-model="models.cardNumber" v-mask="'#### - #### - #### - ####'" placeholder="XXXX - XXXX - XXXX - XXXX" class="input__field" name="card_number" type="text" required="true" />
                  <div class="input__icon input__icon_card">
                    <img src="../assets/img/components/payment-form-field/visa.svg" alt="VISA" title="VISA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="payment-form-row">
            <div class="payment-form-row__item">
              <div class="payment-form-field payment-form-field_fluid">
                <label for="" class="payment-form-field__label">Name on card</label>
                <div class="input">
                  <input class="input__field" pattern="^[a-zA-Z]+$" name="card_owner_name" type="text" placeholder="Leslie Knope" required="true" />
                </div>
              </div>
            </div>
          </div>
          <div class="payment-form-row payment-form-row_justify">
            <div class="payment-form-row__item">
              <div class="payment-form-field">
                <label class="payment-form-field__label">Expiration date</label>
                <div class="payment-form-field__inputs">
                  <div class="input input_small">
                    <input class="input__field" v-model="models.expireMonth" v-mask="'##'" name="card_expire_month" placeholder="MM" type="text" value="" required="true" />
                  </div>
                  <span>/</span>
                  <div class="input input_small">
                    <input class="input__field" v-model="models.expireYear" v-mask="'##'" name="card_expire_year" placeholder="YY" type="text" value="" required="true" />
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-form-row__item">
              <div class="payment-form-field">
                <label for="" class="payment-form-field__label">CVC <a href="#" title="Help tip"><img class="label-tip" src="../assets/img/icons/question-mark.svg" alt="?" /></a></label>
                <div class="input input_small">
                  <input class="input__field" v-model="models.cvc" v-mask="'###'" name="card_cvc" type="password" placeholder="543" required="true" />
                </div>
              </div>
            </div>
          </div>
          <div class="payment-form-row">
            <div class="payment-form-row__item">
              <div class="checkbox">
                <div class="checkbox__trigger">
                  <input class="payment-form-field__input" id="card_is_save" name="card_is_save" type="checkbox" value="false" />
                </div>
                <label for="card_is_save" class="checkbox__label">Save for future orders</label>
              </div>
            </div>
          </div>
        </div>
        <!--Checkout-->
        <div class="payment-form__item">
          <button class="btn btn_fluid" type="submit">
            <div class="btn-content">
              <div class="btn-content__icon">
                <img src="../assets/img/icons/lock.svg" alt="?" />
              </div>
              <div class="btn-content__text">
                <span>CHECKOUT</span>
              </div>
            </div>
          </button>
        </div>
      </form>
    </div>
    <!--Steps-->
    <div class="payment-wrapper__item payment-wrapper__item_steps">
      <div class="steps-list">
        <div href="#" class="steps-list__item">
          <a href="">
            <div class="steps-list-icon">
              <IconAvatar />
            </div>
            <div class="steps-list-text">
              <span>Profile</span>
            </div>
          </a>
        </div>
        <div href="#" class="steps-list__item">
          <a href="">
            <div class="steps-list-icon">
              <IconDeliveryTruck />
            </div>
            <div class="steps-list-text">
              <span>Shipping</span>
            </div>
          </a>
        </div>
        <div href="#" class="steps-list__item steps-list__item--is-active">
          <a href="">
            <div class="steps-list-icon">
              <IconCreditCard />
            </div>
            <div class="steps-list-text">
              <span>Payment</span>
            </div>
          </a>
        </div>
        <div href="#" class="steps-list__item">
          <a href="">
            <div class="steps-list-icon">
              <IconTick />
            </div>
            <div class="steps-list-text">
              <span>Success</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import IconAvatar from './icons/IconAvatar'
import IconDeliveryTruck from './icons/IconDeliveryTruck'
import IconTick from './icons/IconTick'
import IconCreditCard from './icons/IconCreditCard'

import Vue from 'vue'
import { VueMaskDirective } from 'v-mask'

Vue.directive('mask', VueMaskDirective)

export default {
  name: 'PaymentForm',
  components: {
    IconAvatar,
    IconDeliveryTruck,
    IconTick,
    IconCreditCard
  },
  data () {
    return {
      models: {
        expireYear: '',
        expireMonth: '',
        cardNumber: '',
        cvc: '',
        cardOwner: ''
      }
    }
  }
}
</script>
