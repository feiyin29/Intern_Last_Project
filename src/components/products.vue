<template>
    <v-container fluid class="px-10">
        <v-row no-gutters>
            <v-col cols="12">
                <v-row no-gutters class="mb-6">
                    <v-col cols="6" 
                        class="
                            d-flex align-center 
                            pl-4 
                            text-h3 
                            mb-10"
                    >
                            Cookies 
                    </v-col>
                    <v-col cols="6" 
                        class="d-flex justify-end mb-8">
                        <v-col cols="2" class="mr-2 pt-6">
                            <v-switch  
                                v-model="filterSwitch" 
                                hide-details 
                                color="#f0c902" 
                                inset 
                                label="Filter"
                                @click.stop="drawer = !drawer"
                            ></v-switch>
                        </v-col>
                        <!-- <v-col cols="4" class="pt-6">
                            <v-select 
                                v-model="select"  
                                :items="sort" 
                                item-title="state" 
                                label="Select" 
                                return-object
                                single-line 
                                variant="underlined"
                            ></v-select>
                        </v-col> -->
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="mt-n14">
                <v-card color="#E4E4E4" rounded="xl">
                    <v-layout>
                        <v-navigation-drawer 
                            v-model="drawer" 
                            theme="light"
                        >
                            <v-col class="mt-2">
                                <v-col 
                                    class="mx-4" 
                                    v-for="(subheader, index) in filter[0].header" 
                                    :key="subheader"
                                >
                                    <v-list-subheader 
                                     class="text-uppercase ml-1">
                                        {{ subheader }}
                                    </v-list-subheader>
                                    <v-list-item 
                                        class="d-flex flex-column align-start mt-n5"
                                    >
                                        <v-checkbox 
                                            v-model="checked"  
                                            v-for="(item) in filter[index + 1].type" 
                                            :key="item"
                                            :label="item.name" 
                                            :value="item.name" 
                                            :color="item.color" 
                                            hide-details
                                            class="mb-n7"
                                        ></v-checkbox>
                                    </v-list-item>
                                </v-col>
                            </v-col>
                        </v-navigation-drawer>
                        <v-main 
                            style="height: 550px" 
                            class="d-flex justify-center overflow-y-auto"
                        >
                            <v-row no-gutters class="my-4">
                                <v-col cols="3" 
                                    v-for="(item, index) in computedFilter" 
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
                                            <v-row class="d-flex justify-end ma-1">
                                                <v-btn 
                                                    variant="text" 
                                                    :color="item.fav ? 'red' : 'grey-lighten-1'"
                                                    icon="mdi-heart" 
                                                    @click="store.favorite(item.name)"
                                                ></v-btn>
                                            </v-row>
                                        </v-img>
                                        <v-card-title 
                                            class="d-flex justify-center"
                                        >
                                            {{ item.name }}
                                        </v-card-title>
                                        <v-card-subtitle 
                                            class="d-flex justify-center mt-n2"
                                        >
                                            stock:{{ item.stock }}
                                        </v-card-subtitle>
                                        <v-card-text 
                                            class="
                                                d-flex justify-center 
                                                text-body-1 
                                                mt-n2"
                                        >
                                            ฿{{ item.price }}
                                        </v-card-text>
                                        <v-row no-gutters 
                                            class="d-flex justify-center mt-n2">
                                            <v-btn 
                                                icon 
                                                flat 
                                                size="small" 
                                                @click="store.decreaseCount(index)"
                                            >
                                                <v-icon size="15">mdi-minus</v-icon>
                                            </v-btn>
                                            <v-chip 
                                                variant="outlined" 
                                                size="small" 
                                                class="px-8 mx-1"
                                            >
                                                {{ item.wanted }}
                                            </v-chip>
                                            <v-btn 
                                                icon 
                                                flat 
                                                size="small" 
                                                @click="store.increaseCount(index)"
                                            >
                                                <v-icon size="15">mdi-plus</v-icon>
                                            </v-btn>
                                            <v-col cols="12" 
                                                class="d-flex justify-center mt-2"
                                            >
                                                <v-btn v-if="item.stock != 0"
                                                    flat 
                                                    rounded="pill" 
                                                    size="small" 
                                                    color="#d84f47"
                                                    class="tw-text-white" 
                                                    @click="store.addToCart(item)"
                                                >
                                                    add to cart
                                                </v-btn>
                                                <v-btn v-else
                                                    flat 
                                                    disabled 
                                                    rounded="pill" 
                                                    size="small" 
                                                    class="tw-text-white"
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
import { ref, computed } from 'vue';
export default {
    setup() {
        const store = useProductStore();
        return { store };
    },

    data: () => ({
        select: { state: 'Sort by Default' },
        sort: ['Sort by Popularity', 'Sort by Newest', 'Sort by Price : High-Low', 'Sort by Price : Low-High'],
        drawer: true,
        filterSwitch: true,
        filter: [
            {
                header: ["type", "flavour", "color"],
            },
            {
                type: [
                    {
                        name: 'Cookie',
                        color: '#A37E4F',
                    },
                    {
                        name: 'S\'more',
                        color: '#A37E4F',
                    }
                ],
            },
            {
                type: [
                    {
                        name: 'Vanila',
                        color: '#FFCEB2',
                    },
                    {
                        name: 'Chocolate',
                        color: '#744321',
                    },
                    {
                        name: 'Matcha',
                        color: '#519E69',
                    },
                    {
                        name: 'Oreo',
                        color: '#5A5A5A',
                    },
                    {
                        name: 'Butter',
                        color: '#FFE54B',
                    },
                    {
                        name: 'Red Velvet',
                        color: '#FF4B4B',
                    },
                    {
                        name: 'Mint',
                        color: '#4BFFAF',
                    },
                    {
                        name: 'Biscoff',
                        color: '#D59C53'
                    }
                ],
            },
            {
                type: [
                    {
                        name: 'Yellow',
                        color: '#f0c902',
                    },
                    {
                        name: 'Green',
                        color: '#7FA536',
                    },
                    {
                        name: 'Brown',
                        color: '#A37E4F',
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
        checked: [],
    }),
    computed: {
        computedFilter() {
            let typeCookie = this.checked.findIndex(item => item === "Cookie");
            let typeSmore = this.checked.findIndex(item => item === "S'more");

            if (this.checked.length === 0) {
                return this.store.products;
            } 
            
            else if ( this.checked.length == 1 && typeCookie >= 0 ) {
                this.store.notShow();
                this.store.products.forEach((product) => {
                    if ( product.type === "Cookie" )
                        this.store.showing(product);
                });
                return this.store.showProduct;
            } 
            
            else if ( this.checked.length == 1 && typeSmore >= 0 ) {
                this.store.notShow();
                this.store.products.forEach((product) => {
                    if ( product.type === "S'more" )
                        this.store.showing(product);
                });
                return this.store.showProduct;
            } 

            else if ( typeCookie >= 0 && typeSmore == -1 ) {
                this.store.notShow();
                this.store.products.forEach((product) => {
                    if ( product.type === "Cookie" )
                        this.store.showing(product);
                });
                return this.store.showProduct.filter(product =>
                    this.checked.indexOf(product.type) !== -1 &&
                    this.checked.indexOf(product.color) !== -1 ||
                    this.checked.indexOf(product.flavour) !== -1
                );
            } 
            
            else if ( typeSmore >= 0 && typeCookie == -1 ) {
                this.store.notShow();
                this.store.products.forEach((product) => {
                    if (product.type === "S'more" )
                        this.store.showing(product);
                });
                return this.store.showProduct.filter(product =>
                    this.checked.indexOf(product.type) !== -1 &&
                    this.checked.indexOf(product.color) !== -1 ||
                    this.checked.indexOf(product.flavour) !== -1
                );
            }
            
            else if ( typeCookie >= 0 && typeSmore >= 0 ) {
                this.store.notShow();
                if ( this.checked.length == 2 ) {
                    this.store.products.forEach((product) => {
                            this.store.showing(product);
                    });
                    return this.store.showProduct;
                } else {
                    this.store.products.forEach((product) => {
                            this.store.showing(product);
                    });
                    return this.store.showProduct.filter(product =>
                    this.checked.indexOf(product.type) !== -1 &&
                    this.checked.indexOf(product.color) !== -1 ||
                    this.checked.indexOf(product.flavour) !== -1
                );
                }
            }

            else if ( typeCookie == -1 && typeSmore == -1 ) {
                this.store.notShow();
                this.store.products.forEach((product) => {
                            this.store.showing(product);
                    });
                 return this.store.showProduct.filter(product =>
                    this.checked.indexOf(product.color) !== -1 ||
                    this.checked.indexOf(product.flavour) !== -1
                );
            }
     
        }
    }
}

</script>

<style  scoped>
</style>