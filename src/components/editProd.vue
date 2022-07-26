<template>
    <v-container fluid class="px-10">
        <v-row no-gutters>
            <v-col cols="12" 
                class="
                    mt-6 
                    pl-4 
                    text-h3"
            >
                Edit product
            </v-col>
            <v-sheet class="
                sheetBorder
                tw-border-2
                mt-4 px-4 py-2" 
                color="#F7F7F7" 
                rounded="xl" 
                height="570" 
                width="100%"
            >
                <v-sheet 
                    class="overflow-y-auto my-8" 
                    color="#F7F7F7" 
                    rounded="xl" 
                    width="100%" 
                    max-height="480"
                >
                    <v-row no-gutters>
                        <v-col cols="6" 
                            v-for="( item, index ) in products"
                            class="d-flex justify-center" 
                            :key="item.name"
                        >
                            <v-card 
                                rounded="lg" 
                                color="white" 
                                width="600" 
                                height="130"
                                class="my-2 d-flex align-center"
                            >
                                <v-row no-gutters class="d-flex align-center ">
                                    <v-col cols="3" class="ml-2 ">
                                        <v-img 
                                            :src="item.img" 
                                            cover
                                        ></v-img>
                                    </v-col>
                                    <v-col cols="5" align-self="center">
                                        <v-card-title> {{item.name}} </v-card-title>
                                        <v-card-text> stock : {{item.stock}} </v-card-text>
                                    </v-col>
                                    <v-col cols="3" align-self="center" class="d-flex">
                                        <v-btn 
                                            color="#BFBFBF" 
                                            class="mr-2 
                                            text-white" 
                                            @click="callDialog(item, index)"
                                        >
                                            Edit
                                        </v-btn>
                                        <v-btn 
                                            color="#d84f47" 
                                            class="text-white" 
                                            @click="deleteProd(index)"
                                        >
                                            delete
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-sheet>
        </v-row>
        <v-dialog v-model="dialog.show" persistent>
            <v-card width="900" height="650" rounded="xl">
                <v-row 
                    class="
                        d-flex 
                        justify-center
                        align-center 
                        text-h5
                        mt-6 mb-1"
                >
                    Edit Details
                </v-row>
                <v-card-text>
                    <v-container>
                        <v-row no-gutters class="mb-8 mx-10 ">
                            <v-col cols="3" 
                                class="
                                    innerShadow 
                                    bg-white 
                                    tw-rounded-2xl 
                                    mr-10 
                                    d-flex 
                                    justify-center 
                                    align-center">
                                <v-img 
                                    v-if="file != null" 
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
                            <v-col cols="7" class="d-flex flex-column ">
                                <v-row no-gutters class="d-flex align-center">
                                    Change Image
                                </v-row>
                                <v-row no-gutters class="">
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        ref="file.value" 
                                        @change="onFileChange"
                                        class="form-control-file">
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class=" mx-10 justify-space-between">
                            <v-col cols="5" class="">
                                <v-row no-gutters>
                                    <v-text-field 
                                        v-model="inputName" 
                                        label="Name" 
                                        variant="outlined"
                                    ></v-text-field>
                                </v-row>
                                <v-row no-gutters>
                                    <v-text-field 
                                        v-model="inputPrice" 
                                        label="Price" 
                                        type="number" 
                                        variant="outlined"
                                    ></v-text-field>
                                </v-row>
                                <v-row no-gutters>
                                    <v-text-field 
                                        v-model="inputStock" 
                                        label="In Stock" 
                                        type="number"
                                        variant="outlined"
                                    ></v-text-field>
                                </v-row>
                            </v-col>
                            <v-col cols="5" class="">
                                <v-row no-gutters>
                                    <v-select 
                                        v-model="inputType" 
                                        label="Type" 
                                        required 
                                        :items="type"
                                        variant="outlined"
                                    ></v-select>
                                </v-row>
                                <v-row no-gutters>
                                    <v-select 
                                        v-model="inputFlavour" 
                                        label="Flavour" 
                                        required 
                                        :items="flavour"
                                        variant="outlined"
                                    ></v-select>
                                </v-row>
                                <v-row no-gutters>
                                    <v-select 
                                        v-model="inputColor" 
                                        label="Color" 
                                        required 
                                        :items="color"
                                        variant="outlined"
                                    ></v-select>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions class="d-flex justify-end mt-n12 mr-15 mb-3">
                    <v-btn 
                        color="red-darken-1" 
                        text 
                        @click="dialog.show = false"
                    >
                        Cancle
                    </v-btn>
                    <v-btn 
                        color="green-darken-1" 
                        text 
                        @click="updateItem()"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from "@/stores/productStore";
    export default {
    setup:() => {
        const { store, updateByEdit, products, type, color, flavour, deleteProd } = useProductStore();
        const dialog = ref({
            show: false,
            item: {
            name: '',
            img: '',
            price: null,
            stock: null,
            type: "",
            color: "",
            flavour: "",
            index: null,
            }
        })
        
        const file = ref("")
        const inputName = ref("")
        const inputPrice = ref("")
        const inputStock = ref("")
        const inputType = ref("")
        const inputColor = ref("")
        const inputFlavour = ref("")
        const inputIndex = ref("")

        const updateItem = async () => {
            const item = {
            name: inputName,
            price: inputPrice,
            stock: inputStock,
            img: file,
            type: inputType,
            color: inputColor,
            flavour: inputFlavour,
            index: inputIndex
            }
            updateByEdit(item)
            dialog.value.show = false
        }

        const callDialog = async (item, index) => {
            dialog.value.show = true
            dialog.value.item = item
            file.value = dialog.value.item.img
            inputName.value = dialog.value.item.name
            inputPrice.value = dialog.value.item.price
            inputStock.value = dialog.value.item.stock
            inputType.value = dialog.value.item.type
            inputColor.value = dialog.value.item.color
            inputFlavour.value = dialog.value.item.flavour
            inputIndex.value = index
        }

        return { store, type, color, flavour, products, deleteProd,
                dialog, inputName, inputPrice, inputStock, inputType, inputColor, inputFlavour, inputIndex, updateItem, callDialog, 
                file}
    },

    methods: {
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