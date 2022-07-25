<template>
  <aboutUs />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import aboutUs from '../components/aboutUs.vue';

export default defineComponent({
  name: 'aboutUsView',

  components: {
    aboutUs,
  },
});
</script>
