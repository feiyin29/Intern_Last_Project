<template>
  <profile />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import profile from '../components/addProd.vue';

export default defineComponent({
  name: 'profileView',

  components: {
    profile,
  },
});
</script>
