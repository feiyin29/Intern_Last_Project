<template>
    <v-container fluid class="pa-0 frame">
        <v-app-bar >
            <router-link to="/product">
                <v-btn rounded >product</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/">
                <v-btn rounded class="tw-text-2xl red">crunch</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/favorite">
                <v-btn icon>
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/cart">
                    <v-btn icon >
                        <v-badge :content="cartLength" color="error" offset-y="-3" offset-x="-5">
                        <v-icon>mdi-shopping-outline</v-icon>
                        </v-badge>
                    </v-btn>   
            </router-link>
            <router-link to="/about">
                <v-btn icon>
                    <v-icon>mdi-account-outline</v-icon>
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
</script>

<style lang="css" scoped>

.frame {
    border-bottom: 1px solid #000080;
}

.navy {
    color: #000080;
}

.red {
    color: #d84f47;
}

.yellow {
    color: #f0c902;
}

</style>