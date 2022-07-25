<template>
    <v-container fluid class="pa-0 mt-16">
        <v-footer class="tw-bg-[#d84f47]">
            <v-row no-gutters justify="center">
                <v-row no-gutters class="ma-10">
                    <v-col cols="4" class="text-white">
                        <v-row no-gutters class="logo">CRUNCH</v-row>
                        <v-row no-gutters class="mt-5">
                            <v-icon>mdi-map-marker</v-icon>
                            <span class="ml-2">127, KwangYa Cosmo BKK 10540</span>
                        </v-row>
                        <v-row no-gutters class="my-5">
                            <v-icon>mdi-phone</v-icon>
                            <span class="ml-2">095-123-4567</span>
                        </v-row>
                        <v-row no-gutters class="text-black-lighten-3">
                            <v-icon>mdi-email</v-icon>
                            <span class="ml-2">crunchCookies@gmail.co.th</span>
                        </v-row>
                    </v-col>
                    <v-col cols="4" class="mt-12">
                        <v-btn 
                            variant="plain" 
                            class="
                                text-uppercase 
                                text-white" 
                            @click="this.$router.push('/')"
                        >
                            home
                        </v-btn>
                        <v-divider class="mt-1 mb-2 mr-16"></v-divider>
                        <v-btn 
                            variant="plain" 
                            class="
                                text-uppercase 
                                text-white" 
                                @click="this.$router.push('/product')"
                        >
                            Product
                        </v-btn>
                        <v-divider class="mt-1 mb-2 mr-16"></v-divider>
                        <v-btn 
                            variant="plain" 
                            class="
                                text-uppercase 
                                text-white" 
                                @click="this.$router.push('/aboutus')"
                        >
                            about us
                        </v-btn>
                        <v-divider class="mt-1 mb-2 mr-16"></v-divider>
                    </v-col>
                    <v-col cols="4" class="mt-15">
                        <v-row no-gutters class="text-uppercase text-white">keep in touch!</v-row>
                        <v-divider class="mt-2 mb-2 "></v-divider>
                        <v-row no-gutters class="mt-8">
                            <v-text-field 
                                label="your email address" 
                                single-line 
                                variant="solo"
                            ></v-text-field>
                            <v-btn 
                                color="black" 
                                size="x-large"
                            >
                                submit
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
                <v-col class="text-center text-white" cols="12">
                    {{ new Date().getFullYear() }} — <strong>CRUNCH</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-container>
</template>
<script setup>
</script>
<style scoped>
.logo {
    font-size: 40px;
    font-weight: bold;
}
</style>