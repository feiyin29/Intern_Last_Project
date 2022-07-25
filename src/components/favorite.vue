<template>
 <v-container fluid class="px-10">
    <v-row no-gutters>
    <v-col cols="12" 
        class="
            mt-6 
            pl-4 
            text-h3"
    >
        My favorite
    </v-col>
    <v-sheet
        class="
            sheetBorder
            overflow-y-auto 
            tw-border-2
            mt-4
            px-4 py-2
            "
        color="#F7F7F7"
        rounded="xl"
        height="550"
        width="100%"
    >
        <v-row no-gutters
            v-if="store.myFav.length == 0"
            class="d-flex align-center"
        >
            <v-row no-gutters 
                class="
                    d-flex 
                    justify-center 
                    noItem "
            >
                Items added to your Favorites will be saved here.
            </v-row>
        </v-row>
         <v-row no-gutters v-else class="my-4">
            <v-col 
                cols="6"
                v-for="(item) in store.myFav"
                :key="item.name"
                class="my-4 "
            >
                <v-card 
                    elevation="2"
                    rounded="xl" 
                    color="#ffffff" 
                    class="mx-auto pa-5"
                    width="650" 
                    height="200"
                >
                    <v-row no-gutters class="d-flex justify-start">
                        <v-col cols="auto" class="innerShadow bg-white tw-rounded-2xl">
                            <v-img
                                :src="item.img"
                                width="160" 
                                height="160"
                                cover
                            ></v-img>
                        </v-col>
                        <v-col cols="auto" class="ml-6">
                            <v-row no-gutters 
                                class="
                                    font-weight-medium 
                                    tw-text-2xl"
                            >
                                {{item.name}}
                            </v-row>
                            <v-row no-gutters 
                                class="
                                    tw-text-lg 
                                    tw-text-gray-400"
                            >
                                stock : {{item.stock}}
                            </v-row>
                            <v-row no-gutters 
                                class="
                                    font-weight-medium 
                                    tw-text-2xl
                                    mt-3"
                            >
                                ฿{{item.price}}
                            </v-row>
                        </v-col>
                        <v-col cols="max"
                            class="
                                d-flex 
                                justify-end 
                                align-end"
                            >
                            <v-row no-gutters class="d-flex justify-end" >
                                <v-btn
                                    variant="text"
                                    :color="item.fav ? 'red' : 'grey-lighten-1'"
                                    icon="mdi-heart"
                                    @click="store.favorite(item.name)"
                                ></v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-sheet>
    </v-row>
 </v-container>
</template>

<script setup>
import { useProductStore } from "@/stores/productStore";
import { ref, computed } from 'vue';
const store = useProductStore();
</script>

<style scoped>

.innerShadow{
    box-shadow: inset 0px 0px 15px 0.5px rgba(231, 231, 231, 0.9);
}
.noItem {
    font-size: 25px;
    font-weight: 400;
    color: #9C9C9C;
    margin-top: 230px;
}
.sheetBorder {
     border: 2px solid #e4e4e4;
}
</style>