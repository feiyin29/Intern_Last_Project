<template>
 <v-container fluid>
    <v-row no-gutters style="height: 700px">
        <v-col cols="8" class="tw-border-2">
            <v-col cols="12" class="text-h3">Cart</v-col>
            <v-card>
                <v-row>
                    <v-col cols="3">
                        <v-img></v-img>
                    </v-col>
                    <v-col cols="9">
                        <v-row no-gutters>
                            <v-col cols="6">Name</v-col>
                            <v-col cols="6">Price/piece</v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12">amount</v-col>
                            <v-col cols="12">Price รวม</v-col>
                        </v-row>
                        <v-row no-gutters>delete</v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols="4" class="tw-border-2">
            <v-col cols="12" class="text-h3">Total</v-col>
            <v-divider></v-divider>
            <v-row no-gutters>
                <v-col cols="6">Total</v-col>
                <v-col cols="6">1000</v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="6">Shipping</v-col>
                <v-col cols="6">1000</v-col>
            </v-row>
            <v-row no-gutters>
                <v-btn>Vocher</v-btn>
            </v-row>
            <v-divider></v-divider>
            <v-row no-gutters>
                <v-col cols="6">total payment</v-col>
                <v-col cols="6">1000</v-col>
            </v-row>
            <v-row no-gutters>
                <v-btn>check out</v-btn>
            </v-row>
        </v-col>
        
    </v-row>
 </v-container>
</template>

<script>
import { useProductStore } from "@/stores/productStore";
export default {
    setup () {
        const store = useProductStore();
        return { store };
    }
}
</script>

<style scoped>

</style>