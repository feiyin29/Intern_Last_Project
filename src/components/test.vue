<template>
    <v-row justify="center" class="mt-16">
        <v-dialog 
            v-model="dialog" 
            persistent
        >
            <template v-slot:activator="{ props }">
                <v-btn 
                    color="#BFBFBF"
                    class="mr-2 text-white"
                    v-bind="props"
                >
                    Edit
                </v-btn>
            </template>

            <v-card
                width="900"
                height="650"
                rounded="xl"
            >
                <v-toolbar color="#BFBFBF">
                    <v-row 
                        class="
                        d-flex 
                        justify-center
                        align-center 
                        tw-text-white 
                        text-h5
                        mt-1"
                    >
                        Edit Details
                    </v-row>
                </v-toolbar>
                <v-card-text class="">
                    <v-container class="">
                        <v-row no-gutters class="mb-8 mx-10 ">
                            <v-col cols="3" class="
                                innerShadow 
                                bg-white 
                                tw-rounded-2xl 
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center">
                                <v-img v-if="file != null" 
                                    :src="file"
                                    width="190" 
                                    height="190" 
                                    cover
                                ></v-img>
                                <v-icon v-else size="80" 
                                    color="#e4e4e4" 
                                    class="ma-13"
                                >
                                    mdi-camera-plus
                                </v-icon>
                            </v-col>
                            <v-col cols="7" class="d-flex flex-column ">
                                <v-row no-gutters class="d-flex align-center">
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
                        <v-row no-gutters class=" mx-10 justify-space-between">
                            <v-col cols="5" class="">
                                <v-row no-gutters>
                                    <v-text-field
                                        label="Name"
                                        variant="outlined"
                                    ></v-text-field>
                                </v-row>
                                <v-row no-gutters>
                                    <v-text-field
                                            label="Price"
                                            type="number"
                                            variant="outlined"
                                        ></v-text-field>
                                </v-row>
                                <v-row no-gutters>
                                    <v-text-field
                                        label="In Stock"
                                        type="number"
                                        variant="outlined"
                                    ></v-text-field>
                                </v-row>
                            </v-col>
                            <v-col cols="5" class="">
                                <v-row no-gutters>
                                    <v-select
                                        v-model="selectType"
                                        label="Type"
                                        required
                                        :items="store.type"
                                        variant="outlined"
                                    ></v-select>
                                </v-row>
                                <v-row no-gutters>
                                    <v-select
                                        v-model="selectFlavour"
                                        label="Flavour"
                                        required
                                        :items="store.flavour"
                                        variant="outlined"
                                    ></v-select>
                                </v-row>
                                <v-row no-gutters>
                                    <v-select
                                        v-model="selectColor"
                                        label="Color"
                                        required
                                        :items="store.color"
                                        variant="outlined"
                                    ></v-select>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions class="d-flex justify-end mt-n12 mr-15 mb-3">
                    <v-btn 
                        color="blue-darken-1" 
                        text 
                        @click="dialog = false"
                    >
                        Cancle
                    </v-btn>
                    <v-btn 
                        color="blue-darken-1" 
                        text 
                        @click="dialog = false"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
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

        return { store, selectType, selectColor, selectFlavour, name, file, price, amount }
    },
    data() {
        return {
        dialog: false,
    }
    },
    methods: {
        increment() {
        this.count++
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
    mounted() {
        // methods can be called in lifecycle hooks, or other methods!
        this.increment()
    }
}

</script>

<style scoped>
.innerShadow{
    border: 2px solid #e4e4e4;
    box-shadow: inset 0px 0px 15px 0.5px rgba(231, 231, 231, 0.9);
}
.d-none {
    display: none !important;
}
</style>