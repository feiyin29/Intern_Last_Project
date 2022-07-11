<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="12">
                <v-breadcrumbs :items="items"></v-breadcrumbs>
            </v-col>
            <v-col cols="12" class="mt-n10">
              <v-row no-gutters>
                <v-col cols="6" class="d-flex align-center pl-4 tw-text-3xl mb-8">Cookies </v-col>
                <v-col cols="6" class="d-flex justify-end mb-8">
                    <v-col cols="2" class="mr-2 pt-6">
                        <v-switch
                            v-model="model"
                            hide-details
                            color="#f0c902"
                            inset
                            label="Filter"
                            @click.stop="drawer = !drawer"
                        ></v-switch>
                    </v-col>
                    <v-col cols="4" class="pt-6">
                      <v-select
                        v-model="select"
                        :items="sort"
                        item-title="state"
                        label="Select"
                        return-object
                        single-line
                        variant="underlined"
                      ></v-select>
                    </v-col>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" class="mt-n10">
                <v-card 
                  color="#E4E4E4"
                  rounded="xl"
                >
                    <v-layout>
                    <v-navigation-drawer
                      v-model="drawer"
                      theme="light"
                    >
                        <v-list density="compact" nav
                            class="mb-6"
                            v-for="subheader in filter[0].header"
                            :key="subheader"
                        >
                            <v-list-subheader class="text-uppercase">{{subheader}}</v-list-subheader>
                            <v-list-item 
                            class="d-flex flex-column align-start"
                            v-for="item in filter[1].flavour"
                            :key="item.name"
                            >
                            <!-- :v-for="`item in filter[1].{subheadder}`" -->
                            <v-checkbox 
                                :label= "item.name"
                                :color= "item.color"
                                hide-details
                                class="mb-n8"
                            ></v-checkbox>
                        </v-list-item> 
                        </v-list>
                    </v-navigation-drawer>
                    <v-main style="height: 800px" class="d-flex justify-center align-center">
                        <v-row no-gutters class="my-4">
                            <v-col 
                                cols="3"
                                v-for="(item, index) in store.products"
                                :key="item.name"
                                class="my-4 "
                            >
                                <v-card
                                    color="#ffffff"
                                    rounded="xl"
                                    class="mx-auto pa-4" 
                                    max-width="250" 
                                    max-height="350"
                                >
                                    <v-img
                                        :src="item.img"
                                        class="align-start" 
                                        height="150"
                                        cover                             
                                    >
                                        <v-row class="d-flex justify-end ma-1" >
                                            <v-btn
                                                variant="text"
                                                :class="'{{ item.fav }}' ? 'text-red' : 'tw-text-gray-300'"
                                                icon="mdi-heart"
                                                @click="store.favorite(index)"
                                            ></v-btn>
                                        </v-row>
                                    </v-img>
                                    <v-card-title class="d-flex justify-center">{{item.name}}</v-card-title>
                                    <v-card-subtitle class="d-flex justify-center mt-n2">stock:{{item.stock}}</v-card-subtitle>
                                    <v-card-text class="d-flex justify-center text-body-1 mt-n2">฿{{item.price}}</v-card-text>
                                    <v-row no-gutters class="d-flex justify-center mt-n2">
                                        <v-btn 
                                            icon
                                            flat
                                            size="small"
                                            @click="store.decreaseCount(index)"
                                        >
                                            <v-icon size="15">mdi-minus</v-icon>
                                        </v-btn>

                                        <v-chip variant="outlined" size="small"  class="px-8 mx-1">
                                            {{item.wanted}}
                                        </v-chip>

                                        <v-btn 
                                            icon
                                            flat
                                            size="small"
                                            @click="store.increaseCount(index)"
                                        >
                                            <v-icon size="15">mdi-plus</v-icon>
                                        </v-btn>
                                        <v-col cols="12" class="d-flex justify-center mt-2">
                                            <v-btn 
                                              flat 
                                              rounded="pill" 
                                              size="small" 
                                              color="#d84f47" 
                                              class="tw-text-white"
                                              v-if="item.stock != 0"
                                              @click="store.addToCart(item)"
                                            >
                                                add to cart
                                            </v-btn>
                                            <v-btn 
                                              flat
                                              disabled
                                              rounded="pill" 
                                              size="small" 
                                              class="tw-text-white"
                                              v-else
                                            >
                                                out of stock
                                            </v-btn>
                                        </v-col>
                                    </v-row>              
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-main>
                    </v-layout>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script >
import { useProductStore } from "@/stores/productStore";
export default {
    setup(){
        const store = useProductStore();
        console.log(store.products);
        console.log("FAV :",store.products[0].fav);
        return { store };
    },
    
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Product',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Cookies',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      select: { state: 'Sort by Default'},
      sort: [ 'Sort by Popularity', 'Sort by Newest', 'Sort by Price : High-Low', 'Sort by Price : Low-High'],
      fav: false,
      drawer: false,
      filter: [
          {
            header: ["type", "flavour", "color"],
          },
          {
            type:[
              {
                name: 'Cookie',
                color: '#5A5A5A',
              },
              {
                name: 'S\'more',
                color: '#744321',
              }
            ],
            flavour: [
              {
                name: 'Vanila',
                color: '#FFCEB2',
              },
              {
                name: 'Chocolate',
                color: '#744321',
              },
              {
                name: 'Macha',
                color: '#43610A',
              },
              {
                name: 'Oreo',
                color: '#5A5A5A',
              },
              {
                name: 'Strawberry',
                color: '#d84f47',
              },
            ],
            color: [
              {
                name: 'Light Blue',
                color: '#6AC8CE',
              },
              {
                name: 'Green',
                color: '#7FA536',
              },
              {
                name: 'Brown',
                color: '#74533D',
              },
              {
                name: 'Red',
                color: '#d84f47',
              },
              {
                name: 'Pink',
                color: '#FFB0A6',
              },
            ]
          },
        ], 
    }),
  } 
</script>

<style  scoped>
</style>