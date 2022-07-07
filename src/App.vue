<template>
  <v-app>
    <v-main class="tw-bg-[FF5733]">
      <Navbar></Navbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar.vue";
export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
}
</script>
