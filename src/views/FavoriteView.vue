<template>
  <Favorite />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Favorite from '@/components/favorite.vue';

export default defineComponent({
  name: 'FavoriteView',

  components: {
    Favorite,
  },
});
</script>
