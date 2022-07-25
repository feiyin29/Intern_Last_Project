<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters 
            class="my-16 d-flex justify-center">
            <v-col cols="7" class="ml-16">
                <v-row no-gutters 
                    class="
                        text-h1 
                        font-weight-regular"
                >
                    Hi!
                </v-row>
                <v-row no-gutters 
                    class="
                        text-h1 
                        font-weight-regular"
                >
                    I'm Fei Chonticha
                </v-row>
                <v-row no-gutters 
                    class="
                        detail 
                        mt-8"
                >
                    I'm a Front-End Web Developer.
                </v-row>
                <v-row no-gutters 
                    class="detail">
                        Currently I'm a sophomore in King Mongkut's 
                        Institute of Technology Ladkrabang. 
                </v-row>
                <v-row no-gutters class="mt-10 text-subtitle-1">My skills : </v-row>
                <v-row no-gutters class="mt-10">
                    <v-col cols="2">
                        <v-img src="../src/assets/java.jpg" class="align-center" height="80px"></v-img>
                    </v-col>
                    <v-col cols="2">
                        <v-img 
                            src="https://freeiconshop.com/wp-content/uploads/edd/html-flat.png" 
                            class="align-center"
                            height="80px">
                        </v-img>
                    </v-col>
                    <v-col cols="2">
                        <v-img 
                            src="https://freeiconshop.com/wp-content/uploads/edd/js-flat.png" 
                            class="align-center"
                            height="80px">
                        </v-img>
                    </v-col>
                    <v-col cols="2">
                        <v-img 
                            src="https://freeiconshop.com/wp-content/uploads/edd/css-flat.png" 
                            class="align-center"
                            height="80px">
                        </v-img>
                    </v-col>
                    <v-col cols="2">
                        <v-img 
                            src="../src/assets/vue.jpg" 
                            class="align-center"
                            height="80px">
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-img 
                    src="../src/assets/me.jpg" 
                    class="white--text align-end" 
                    height="500px">
                </v-img>
                <v-row no-gutters class="ml-16 mt-5 ">
                    <v-icon 
                        size="small" 
                        color="grey"
                    > 
                        mdi-email 
                    </v-icon>
                    <span class="ml-2 mr-5 mt-n1">chonticha.phs@gmail.com</span>
                    <v-icon 
                        size="small" 
                        color="grey"
                    > 
                        mdi-phone 
                    </v-icon>
                    <span class="ml-2 mt-n1">082-715-8171</span>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style scoped>
.detail {
    font-size: 23px;
}
</style>