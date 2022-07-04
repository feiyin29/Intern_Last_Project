<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="d-flex justify-center">
        <h1>ABOUT</h1>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters class="d-flex justify-center">
          <router-link to="/">
            <v-col cols="6">Home</v-col>
          </router-link>
        
          <router-link to="/about">
            <v-col cols="6">about</v-col>
          </router-link>
        </v-row>
      </v-col>
      <v-col cols="12">
        <button 
          @click="storeCounter.increaseCount"
          class="counter-button"
        >
          {{ storeCounter.count }}
        </button>
      </v-col> 
    </v-row>
  </v-container>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
const storeCounter = useCounterStore()
</script>

<style>
.counter-button {
  font-size: 50px;
}
</style>
