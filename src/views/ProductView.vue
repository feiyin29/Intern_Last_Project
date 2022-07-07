<template>
  <product />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import product from '../components/products.vue';

export default defineComponent({
  name: 'ProductView',

  components: {
    product,
  },
});
</script>
