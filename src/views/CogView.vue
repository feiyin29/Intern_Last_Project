<template>
  <addProd />
  <editProd />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import addProd from '../components/addProd.vue';
import editProd from '../components/editProd.vue';

export default defineComponent({
  name: 'cogView',

  components: {
    addProd,
    editProd,
  },
});
</script>
