<template>
  <About />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import About from '../components/counterAbout.vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    About,
  },
});
</script>
