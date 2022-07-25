<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>
            <v-col cols="12">
                <v-row no-gutters>
                    <video autoplay allowfullscreen muted playinline loop
                        class="
                            absolute 
                            inset-0 
                            object-cover 
                            w-full h-full"
                    >
                        <source
                            src="https://player.vimeo.com/external/478618193.hd.mp4?s=701446f31509fca309f64ee8260dc53b574e2e6b&profile_id=175"
                            type="video/mp4">
                    </video>
                </v-row>
                <v-row no-gutters class="setPos">
                    <v-col cols="12" 
                        class="
                            d-flex justify-center 
                            text-uppercase 
                            font-weight-bold
                            title"
                    >
                        crunch
                    </v-col>
                    <v-col cols="12" 
                        class="
                            d-flex justify-center 
                            font-weight-bold
                            mt-n7
                            text-white
                            subTitle"
                    >
                        Homemade Cookies
                    </v-col>
                    <v-col cols="12" 
                        class="
                        d-flex justify-center 
                        mt-10"
                    >
                        <v-btn 
                            rounded="pill" 
                            color="white" 
                            class="btnBorder" 
                            @click="this.$router.push('/product')"
                        >
                            <span class="tw-text-[#d84f47]">Shop now</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters class="setPos2 mx-16 ">
                    <v-col cols="12" class="d-flex justify-center subTitle">
                        Why must be CRUNCH's Cookies?
                    </v-col>
                    <v-col cols="12" 
                        class="
                            d-flex justify-space-around 
                            mb-14 mt-14"
                        >
                        <v-card 
                            width="300" 
                            height="360" 
                            rounded="xl" 
                            class="mr-5"
                        >
                            <v-col cols="12" 
                                class="
                                    d-flex justify-center 
                                    mt-10 mb-6" 
                                style="height: 130px"
                            >
                                <v-img 
                                    class="
                                        white--text 
                                        align-end" 
                                    src="https://cdn-icons-png.flaticon.com/512/3349/3349225.png"
                                    height="200px"
                                ></v-img>
                            </v-col>
                            <v-card-title 
                                class="d-flex justify-center"
                            >
                                The Sweetest Gift
                            </v-card-title>
                            <v-card-text class="d-flex text-center">
                                From holiday, birthday and thank-you presents to 
                                personalized corporate cookie gifts,
                                show your appreciation.
                            </v-card-text>
                        </v-card>
                        <v-card  
                            width="300" 
                            height="360" 
                            rounded="xl" 
                            class="mr-5"
                        >
                            <v-col cols="12" 
                                class="
                                    d-flex justify-center 
                                    mt-10 mb-6" 
                                style="height: 130px"
                            >
                                <v-img 
                                    src="https://cdn-icons-png.flaticon.com/512/609/609361.png"
                                    class="
                                        white--text 
                                        align-end" 
                                        height="200px"
                                ></v-img>
                            </v-col>
                            <v-card-title class="d-flex justify-center">Fast Delivery</v-card-title>
                            <v-card-text class="d-flex text-center">
                                If you're a last-minute gifter, 
                                we've got you covered with next-day delivery, 
                                anywhere in Thailand.
                            </v-card-text>
                        </v-card>
                        <v-card 
                            width="300" 
                            height="360" 
                            rounded="xl" 
                            class="mr-5"
                        >
                            <v-col cols="12" 
                                class="
                                    d-flex justify-center 
                                    mt-10 mb-6" 
                                    style="height: 130px"
                            >
                                <v-img 
                                    src="https://cdn-icons-png.flaticon.com/512/2913/2913124.png"
                                    class="white--text align-end" 
                                    height="200px"
                                ></v-img>
                            </v-col>
                            <v-card-title class="d-flex justify-center">Meticulous</v-card-title>
                            <v-card-text class="d-flex text-center">
                                The CRUNCH's cookies are baked with love.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider class="my-10"></v-divider>
            <v-col cols="12" class="my-16">
                <v-row class="d-flex justify-center">
                    <v-col cols="5" class="">
                        <v-img 
                            src="../src/assets/popular.png"
                        ></v-img>
                    </v-col>
                    <v-col cols="5" 
                        class="
                            d-flex justify-center 
                            align-center"
                    >
                        <v-col no-gutters class="ml-16">
                            <v-row no-gutters class="subTitle">The most popular cookies</v-row>
                            <v-row no-gutters class="tw-indent-16 mt-4">
                                Our signature gourmet cookies weigh nearly
                                a half-pound each. In every bite, you can taste
                                the pure butter and hints of brown sugar.
                                Crispy on the outside, soft and chewy on the inside,
                                they're a simple indulgence you won't forget! And,
                                Carol still makes them the same way today
                                as when it all started over 40 years ago in her home kitchen.
                            </v-row>
                        </v-col>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style scoped>
.setPos {
    margin-top: -640px;
}

.setPos2 {
    margin-top: 500px;
}

.title {
    font-size: 100px;
    color: white;
}

.subTitle {
    font-size: 30px;
}

.btnBorder {
    border: 3px solid #d84f47;
}
</style>