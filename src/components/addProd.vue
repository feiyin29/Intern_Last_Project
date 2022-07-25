<template>
 <v-container fluid class="px-10">
    <v-row no-gutters>
    <v-col cols="12" 
        class="
            mt-6 
            pl-4 
            text-h3"
    >
        Add new product
    </v-col>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-sheet
        class="
            sheetBorder
            tw-border-2
            mt-4
            px-4 py-2
            "
        color="#F7F7F7"
        rounded="xl"
        height="570"
        width="147%"
    >
        <v-row no-gutters >
            <v-col cols="6" class="pa-10">
                <v-col cols="12">
                    <v-row no-gutters>
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-2xl 
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                        >
                            <v-img v-if="file != null"
                                :src="file"
                                width="190" 
                                height="190"
                                cover
                            ></v-img>
                            <v-icon 
                                v-else
                                size="80"
                                color="#e4e4e4"
                                class="ma-13"
                            >
                                mdi-camera-plus
                            </v-icon>
                        </v-col>
                        <v-col cols="auto" class="d-flex flex-column ">
                            <v-row no-gutters 
                                class="d-flex align-center">
                                Upload Image
                            </v-row>
                            <v-row no-gutters class="">
                                <input 
                                    type="file"
                                    accept="image/*"
                                    ref="file.value"
                                    @change="onFileChange"
                                    class="form-control-file"
                                >
                            </v-row>   
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" style="height: 120px">
                    <v-row no-gutters>Name</v-row>
                    <v-text-field
                        v-model="name"
                        :rules="[v => !!v || 'Name is required']"
                        required
                        variant="outlined"
                    ></v-text-field>
                </v-col>
                    <v-col cols="12" style="height: 120px">
                        <v-row no-gutters>Type</v-row>
                        <v-row no-gutters>
                            <v-select
                                v-model="selectType"
                                :rules="[v => !!v || 'Type is required']"
                                :items="type"
                                variant="outlined"
                            ></v-select>
                        </v-row>
                </v-col>
            </v-col>
            <v-col cols="6" class="pa-10">
                <v-col cols="12" class="" style="height: 110px">
                    <v-row no-gutters>Flavour</v-row>
                    <v-row no-gutters>
                            <v-select
                                v-model="selectFlavour"
                                :rules="[v => !!v || 'Flavour is required']"
                                :items="flavour"
                                variant="outlined"
                            ></v-select>
                        </v-row>
                </v-col>
                <v-col cols="12" class="" style="height: 110px">
                    <v-row no-gutters>Color</v-row>
                    <v-row no-gutters>
                        <v-select
                                v-model="selectColor"
                                :rules="[v => !!v || 'Color is required']"
                                :items="color"
                                variant="outlined"
                            ></v-select>
                    </v-row>
                </v-col>
                <v-col cols="12" class="" style="height: 120px">
                    <v-row no-gutters>Price</v-row>
                    <v-text-field 
                        v-model="price"
                        :rules="[v => !!v || 'Price is required']"
                        required
                        type="number"
                        variant="outlined"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" class="" style="height: 120px">
                    <v-row no-gutters>In stock</v-row>
                    <v-text-field 
                        v-model="amount"
                        :rules="[v => !!v || 'In Stock is required']"
                        required 
                        type="number"
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex justify-end mt-n3">
                    <v-dialog
                        v-model="dialog"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                                :disabled="!valid"
                                rounded="xl"
                                color="#d84f47" 
                                class="tw-text-white"
                                @click="add()"
                                v-bind="props"
                            >
                            Submit
                            </v-btn>
                        </template>
                        <v-card rounded="xl" >
                            <v-card-text class="text-center">
                                <v-icon 
                                    size="80"
                                    color="#d84f47"
                                    class="mt-8"
                                >
                                    mdi-check-circle-outline
                                </v-icon>
                            <div class="text-h5 px-12 pb-8 pt-4">New products have been added.</div>
                            </v-card-text>
                            <v-card-actions  class="justify-center mb-4">
                            <v-btn 
                                color="#d84f47" 
                                rounded
                                @click="submit(dialog)"
                                @click.stop="dialog = false"
                            > 
                                Close
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                </v-col>
            </v-col>
        </v-row>
    </v-sheet>
    </v-form>
    </v-row>
 </v-container>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from "@/stores/productStore";

export default {
    setup:() => {
        const store = useProductStore();
        const selectType = ref();
        const selectColor = ref();
        const selectFlavour = ref();
        const name = ref('');
        const file = ref(null);
        const price = ref();
        const amount = ref();
        const type= ["Cookie", "S'more",];
        const color= ['Yellow', 'Green', 'Brown', 'Red', 'Pink'];
        const flavour= ['Vanila', 'Chocolate', 'Matcha','Oreo', 'Butter', 'Red Velvet','Mint', 'Biscoff' ];

        function add(){
            const newProduct = { name: name.value,
                                 img: file.value,
                                 price: price.value,
                                 stock: amount.value,
                                 wanted: 1,
                                 selectInCart: 1,
                                 type: selectType.value,
                                 flavour: selectFlavour.value,
                                 color: selectColor.value,
                                 fav: false,
                        }
            
            this.$refs.form.validate();
            store.addNewProduct(newProduct);
        }

        return {type, color, flavour, add, selectType, name, 
                file, price, amount, selectColor, selectFlavour, selectType}
    },
    data: () => ({  
        dialog: false,
        valid: true, 
    }),
    methods: {
        submit(dialog) {
            dialog = false;
            console.log("dialog",dialog);
            this.$router.push('/product');
        },
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return
            }
            this.fileName = files[0].name
            this.createImage(files[0])
        },
        createImage(file) {
            var image = new Image()
            var reader = new FileReader()

            reader.onload = (e) => {
                this.file = e.target.result;
                this.$emit('change', this.file)
            }
            reader.readAsDataURL(file)
        },
    },
}


</script>

<style scoped>

.innerShadow{
    border: 2px solid #e4e4e4;
    box-shadow: inset 0px 0px 15px 0.5px rgba(231, 231, 231, 0.9);
}
.sheetBorder {
     border: 2px solid #e4e4e4;
}
</style>