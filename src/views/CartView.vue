<template>
  <cart />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import cart from '../components/cart.vue';

export default defineComponent({
  name: 'cartView',

  components: {
    cart,
  },
});
</script>
