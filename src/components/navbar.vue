<template>
    <v-container fluid class="pa-0 ">
        <v-app-bar color="#d84f47">
            <router-link to="/product">
                <v-btn 
                    rounded 
                    class="text-white"
                >
                    product
                </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/">
                <v-btn
                    rounded 
                    class="tw-text-2xl text-white"
                >
                    crunch
                </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/favorite">
                <v-btn icon>
                    <v-icon 
                        class="text-white"
                    >
                        mdi-heart-outline
                    </v-icon>
                </v-btn>
            </router-link>
            <router-link to="/cart">
                <v-btn icon>
                    <v-badge 
                        :content="cartLength" 
                        color="white" 
                        offset-y="-3" 
                        offset-x="-5"
                    >
                        <v-icon class="text-white">mdi-shopping-outline</v-icon>
                    </v-badge>
                </v-btn>
            </router-link>
            <router-link to="/cog">
                <v-btn icon>
                    <v-icon class="text-white">mdi-cog-outline</v-icon>
                </v-btn>
            </router-link>
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