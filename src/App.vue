<template>
  <v-app>
    <v-main class="tw-bg-[FF5733]">
      <Navbar></Navbar>
      <router-view></router-view>                                                      
      <Myfooter></Myfooter>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Myfooter from "@/components/footer.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Myfooter
  },

  data: () => ({
    //
  }),
}
</script>
