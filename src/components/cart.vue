<template>
 <v-container fluid>
    <v-row no-gutters style="height: 700px">
        <v-col cols="8" class="">
            <v-col cols="12" class="text-h3">Cart</v-col>
            <v-sheet
                class="overflow-y-auto"
                max-height="600"
            >
            
                <v-row no-gutters
                    v-for="(item, index) in store.cart"
                    :key="item.name"
                    class="d-flex align-center"   
                >
                    <v-col cols="3">
                        <v-img
                            :src="item.img"
                            class="align-start" 
                            height="200"
                             
                        ></v-img>
                    </v-col>
                    <v-col cols="9">
                        <v-row no-gutters>
                            <v-col cols="12"
                                class="
                                    tw-text-xl
                                    font-weight-medium
                                "
                            >
                                {{item.name}}
                            </v-col>
                            <v-col 
                                cols="12" 
                                class="
                                    tw-text-zinc-400 
                                    tw-text-sm"
                                >
                                    (Unit Price : {{item.price}} THB)
                                </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="6"></v-col>
                            <v-col cols="6">
                                <v-row no-gutters>
                                    <v-row no-gutters class="d-flex justify-center my-4">
                                        <v-btn 
                                            icon
                                            flat
                                            size="small"
                                            @click="store.decreaseCountCart(index)"
                                        >
                                            <v-icon size="15">mdi-minus</v-icon>
                                        </v-btn>

                                        <v-chip 
                                            variant="outlined" 
                                            size="small"  
                                            class="px-8 mx-1"
                                        >
                                            {{item.wanted}}
                                        </v-chip>
                                        <v-btn 
                                            icon
                                            flat
                                            size="small"
                                            @click="store.increaseCountCart(index)"
                                        >
                                            <v-icon size="15">mdi-plus</v-icon>
                                        </v-btn>
                                        <v-row no-gutters 
                                            class="
                                            d-flex justify-end 
                                            mr-10 
                                            font-weight-bold "
                                        > 
                                            {{eachPrice[index]}}  THB
                                        </v-row>
                                     </v-row>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-btn icon
                                flat
                                size="small"
                                @click="store.deleteCart(index)"
                            >
                                <v-icon size="20">mdi-trash-can-outline</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                    <v-divider
                        class="mx-10"
                    ></v-divider>
                </v-row>
            
            </v-sheet>
        </v-col>
        <v-col cols="4" 
            class="
                tw-border-2 
                tw-bg-[#E4E4E4] 
                pa-6 mt-14"
            >
            <v-col cols="12" class="text-h4">Total</v-col>
            <v-divider></v-divider>
            <v-row no-gutters class="my-6">
                <v-col cols="6" 
                    class="pl-4"
                >
                    Total
                </v-col>
                <v-col cols="6" 
                    class="
                        d-flex 
                        justify-end 
                        pr-6"
                >
                    {{ sum }}
                </v-col>
            </v-row>
            <v-row no-gutters class="my-6">
                <v-col cols="6" class="pl-4">Shipping</v-col>
                <v-col cols="6" 
                    class="
                        d-flex 
                        justify-end 
                        align-center 
                        pr-6"
                >
                    <v-radio-group
                        v-model= "RadioGroup"
                        column
                        class="d-flex justify-end"
                        >
                        <v-radio
                            label="EMS 80 THB"
                            value="radio-1"
                            color="red"
                        ></v-radio>
                        <v-radio
                            label="REG 50 THB"
                            value="radio-2"
                            color="red"
                        ></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
            <v-row no-gutters class="my-6">
                <v-btn>Vocher</v-btn>
            </v-row>
            <v-divider></v-divider>
            <v-row no-gutters class="my-6">
                <v-col 
                    cols="6" 
                    class="pl-4"
                >
                    Total payment
                </v-col>
                <v-col 
                    cols="6" 
                    class="
                        d-flex 
                        justify-end 
                        align-center 
                        pr-6"
                    >
                        {{ serviceCharge }}
                    </v-col>
            </v-row>
            <v-row no-gutters class="d-flex justify-center my-14">
                <v-btn 
                    color="#d84f47" 
                    rounded="xl" 
                    class="tw-text-white"
                >
                    check out
                </v-btn>
                {{Total}} 
            </v-row>
        </v-col>
        
    </v-row>
 </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from "@/stores/productStore";
const store = useProductStore();
const sumTotal = ref(0);

const eachPrice = computed(() => {
    const itemPrice = [];
    store.cart.forEach((each) => {
        let cal = each.price * each.wanted;
        itemPrice.push(cal);
    }); 
    console.log("eachPrice",itemPrice); 
    return itemPrice;
})

const Total = computed(() => {
  sumTotal.value = 0;
  store.cart.forEach((each) => {
    sumTotal.value = each.price * each.wanted + sumTotal.value;
  });
});

const serviceCharge = computed(() => sumTotal.value * 0.07 + sumTotal.value);
const sum = computed(() => sumTotal);
console.log("Total -> ",sumTotal);
console.log("cart -> ",store.cart);

</script>

<style scoped>

</style>