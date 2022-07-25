<template>
    <v-container fluid class="px-10">
        <v-row no-gutters style="height: 700px">
            <v-col cols="12" class="mt-6 pl-4 text-h3">Bag</v-col>
            <v-row no-gutters 
                class="
                    tw-border-2
                    tw-rounded-3xl 
                    mt-4"
            >
                <v-col cols="8" class="tw-rounded-l-3xl">
                    <v-sheet v-if="store.cart.length == 0 || null || undifined" 
                        class="
                            overflow-y-auto 
                            tw-rounded-l-3xl 
                            bg-transparent 
                            d-flex justify-center 
                            align-center" 
                        max-height="600"
                    >
                        <span class="noItem">There are no items in your bag.</span>
                    </v-sheet>
                    <v-sheet v-else 
                        class="
                            overflow-y-auto 
                            tw-rounded-l-3xl 
                            bg-transparent" 
                        max-height="600"
                    >
                        <v-row no-gutters v-for="(item, index) in store.cart" 
                            :key="item.name"
                            class="d-flex align-center tw-rounded-l-3xl">
                            <v-col cols="3">
                                <v-img 
                                    :src="item.img" 
                                    class="
                                        align-start 
                                        tw-rounded-3xl" 
                                    height="200"
                                ></v-img>
                            </v-col>
                            <v-col cols="9">
                                <v-row no-gutters>
                                    <v-col cols="12" 
                                        class="
                                            tw-text-xl
                                            font-weight-medium"
                                    >
                                        {{ item.name }}
                                    </v-col>
                                    <v-col cols="12" 
                                        class="
                                            tw-text-zinc-400 
                                            tw-text-sm"
                                    >
                                        ( Unit Price : {{ item.price }} THB )
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <v-row no-gutters
                                            class="
                                                tw-text-base
                                                tw-text-gray-400
                                                mt-5"
                                        >
                                            stock : {{ item.stock }}
                                        </v-row>
                                    </v-col>
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
                                                    {{ item.selectInCart }}
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
                                                        font-weight-bold"
                                                >
                                                    {{ eachPrice[index] }} THB
                                                </v-row>
                                            </v-row>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-btn 
                                        icon 
                                        flat 
                                        size="small" 
                                        @click="store.deleteCart(index)"
                                    >
                                        <v-icon size="20">mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-col>
                            <v-divider class="mx-10"></v-divider>
                        </v-row>
                    </v-sheet>
                </v-col>
                <v-col cols="4" 
                    class="
                        tw-rounded-r-3xl
                        tw-bg-[#E4E4E4] 
                        pa-6"
                >
                    <v-col cols="12" class="text-h4">Summary</v-col>
                    <v-divider></v-divider>
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
                                v-model="Shipping" 
                                column 
                                class="d-flex justify-end"
                            >
                                <v-radio 
                                    label="EMS 80 THB" 
                                    value="80" 
                                    color="red"
                                ></v-radio>
                                <v-radio 
                                    label="REG 50 THB" 
                                    value="50" 
                                    color="red"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="my-6">
                        <v-col cols="12">
                            <v-dialog 
                                transition="dialog-bottom-transition"
                            >
                                <template v-slot:activator="{ props }">
                                    <v-row no-gutters 
                                        class="
                                            tw-text-zince-600
                                            tw-bg-white 
                                            text-start 
                                            pa-2
                                            innerShadow 
                                            tw-rounded-md" 
                                        v-bind="props"
                                    >
                                        <v-col cols="6" class="text-start">Vocher</v-col>
                                        <v-col cols="6" class="text-end">
                                            <p>
                                                {{ VocherRadio || 'Select your vocher' }}
                                                <v-icon>mdi-chevron-right</v-icon>
                                            </p>
                                        </v-col>
                                    </v-row>
                                </template>
                                <template v-slot:default="{ isActive }">
                                    <v-card rounded="xl">
                                        <v-toolbar color="red">
                                            <v-row 
                                                class="
                                                d-flex 
                                                justify-center 
                                                tw-text-white 
                                                text-h6"
                                            >
                                                My Vocher
                                            </v-row>
                                        </v-toolbar>
                                        <v-card-text class=" px-16">
                                            <v-radio-group 
                                                v-model="VocherRadio"
                                            >
                                                <v-radio 
                                                    v-for="item in store.voucher" 
                                                    :key="item"
                                                    :label="`${item.name}`" 
                                                    :value="`${item.name}`"
                                                >
                                                </v-radio>
                                            </v-radio-group>
                                        </v-card-text>
                                        <v-card-actions class="justify-center mt-n8">
                                            <v-btn 
                                                color="#000080" 
                                                rounded 
                                                class="px-6" 
                                                @click="isActive.value = false"
                                            >
                                                close
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters class="my-6">
                        <v-col cols="6" class="pl-4">
                            Merchandise Subtotal
                        </v-col>
                        <v-col cols="6" 
                            class="
                                d-flex 
                                justify-end 
                                pr-6"
                        >
                            {{ Total }}
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="my-6">
                        <v-col cols="6" class="pl-4">
                            Shipping Subtotal
                        </v-col>
                        <v-col cols="6" v-if="store.cart.length == 0 || null || undifined" 
                            class="
                                d-flex 
                                justify-end 
                                pr-6"
                        >
                            0
                        </v-col>
                        <v-col cols="6" v-else 
                            class="
                                d-flex 
                                justify-end 
                                pr-6"
                        >
                            {{ Shipping }}
                        </v-col>
                    </v-row>
                    <v-row no-gutters v-if="discount != null"
                        class="my-6" 
                    >
                        <v-col cols="6" class="pl-4">
                            Discount Subtotal
                        </v-col>
                        <v-col cols="6" 
                            class="
                                d-flex 
                                justify-end 
                                pr-6"
                        >
                            -{{ discount }}
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="my-6">
                        <v-col cols="6" class="pl-4 text-h6">
                            Total payment
                        </v-col>
                        <v-col cols="6" v-if="store.cart.length == 0 || null || undifined"  
                            class="
                                d-flex 
                                justify-end 
                                align-center 
                                pr-6
                                text-h6
                                tw-text-[#d84f47]"
                        >
                            0
                        </v-col>
                        <v-col cols="6" v-else  
                            class="
                                d-flex 
                                justify-end 
                                align-center 
                                pr-6
                                text-h6
                                tw-text-[#d84f47]"
                        >
                            {{ totalPay }} {{ addVocher }}
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="d-flex justify-center my-14">
                        <v-dialog 
                            transition="dialog-bottom-transition"
                        >
                            <template v-slot:activator="{ props }">
                                <v-btn 
                                    color="#d84f47" 
                                    rounded="xl" 
                                    v-bind="props" 
                                    class="tw-text-white"
                                    @click="store.checkOut()"
                                >
                                    check out
                                </v-btn>
                            </template>
                            <template v-slot:default="{ isActive }">
                                <v-card rounded="xl">
                                    <v-card-text class="text-center">
                                        <v-icon 
                                            size="80" 
                                            color="#d84f47" 
                                            class="mt-8"
                                        >
                                            mdi-check-circle-outline
                                        </v-icon>
                                        <div class="
                                            text-h5 
                                            px-12 
                                            pb-8 
                                            pt-4"
                                        >
                                            Your order is successful!
                                        </div>
                                    </v-card-text>
                                    <v-card-actions class="justify-center">
                                        <v-btn 
                                            color="#d84f47" 
                                            rounded 
                                            class="px-6" 
                                            @click="isActive.value = false"
                                        >
                                            close
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script  setup>
import { ref, computed } from 'vue';
import { useProductStore } from "@/stores/productStore";

const store = useProductStore();
const sumTotal = ref(0);
var voucher = ref(['Free Shipping', '10% off']);
var VocherRadio = ref(null);
var Shipping = ref("80");
var discount = ref(null);

const eachPrice = computed(() => {
    const itemPrice = [];
    store.cart.forEach((each) => {
        let cal = each.price * each.selectInCart;
        itemPrice.push(cal);

    });
    console.log("eachPrice", itemPrice);
    return itemPrice;
});
const addVocher = computed(() => {
    for (let i = 0; i < voucher.value.length; i++) {
        if (VocherRadio.value == store.voucher[i].name) discount.value = eval(store.voucher[i].discount);
    }
    console.log("discount value", discount.value);
});
const Total = computed(() => {
    sumTotal.value = 0;
    store.cart.forEach((each) => {
        sumTotal.value = each.price * each.selectInCart + sumTotal.value;
        console.log("Total value", each.price);
    });

    return sumTotal.value;
});
const totalPay = computed(() => sumTotal.value + Number(Shipping.value) - discount.value);

</script>

<style scoped>
.innerShadow {
    box-shadow: inset 0px 0px 2px rgba(156, 156, 156, 0.9);
}

.noItem {
    font-size: 25px;
    font-weight: 400;
    color: #9C9C9C;
    margin-top: 280px;
}
</style>