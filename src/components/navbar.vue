<template>
    <v-container fluid class="pa-0 ">
        <v-app-bar color="#d84f47">
            <v-col cols="5" class="d-flex">
                <v-btn 
                    rounded 
                    class="text-white"
                    @click="this.$router.push('/product')"
                >
                    product
                </v-btn>
                <v-btn 
                    rounded 
                    class="text-white"
                    @click="this.$router.push('/aboutus')"
                >
                    about us
                </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex justify-center">
                <v-btn
                    rounded 
                    class="tw-text-2xl text-white"
                    @click="this.$router.push('/')"
                >
                    crunch
                </v-btn>
            </v-col>
            <v-col cols="5" class="d-flex justify-end">
                <v-btn icon>
                    <v-icon 
                        class="text-white"
                        @click="this.$router.push('/favorite')"
                    >
                        mdi-heart-outline
                    </v-icon>
                </v-btn>
                <v-btn 
                    icon
                    @click="this.$router.push('/cart')"
                >
                    <v-badge 
                        :content="cartLength" 
                        color="white" 
                        offset-y="-3" 
                        offset-x="-5"
                    >
                        <v-icon class="text-white">mdi-shopping-outline</v-icon>
                    </v-badge>
                </v-btn>
                <v-btn 
                    icon
                    @click="this.$router.push('/cog')"
                >
                    <v-icon class="text-white">mdi-cog-outline</v-icon>
                </v-btn>
            </v-col>
        </v-app-bar>
    </v-container>
</template>

<script setup>
import { useProductStore } from "@/stores/productStore";
import { computed } from 'vue';
const store = useProductStore();
const cartLength = computed(() => store.cart.length);
console.log("navbar is working");
</script>
<style scoped>
</style>