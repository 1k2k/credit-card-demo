<template>
  <div id="app" class="app">
    <div class="app-content">
      <PaymentForm />
    </div>
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm'

export default {
  name: 'App',
  components: {
    PaymentForm
  }
}
</script>

<style lang="scss">
  @import './scss/main';
  .app {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: $color-blue;
    padding: 0;
    margin: 0;
  }
  .app-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
