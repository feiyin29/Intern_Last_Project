<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="d-flex justify-center">
        <h1>HOME</h1>
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

      <v-col cols="12" class="count">
        {{ storeCounter.count }}
      </v-col>
      <v-col cols="12">
        <v-row no-gutters class="d-flex justify-center">
          <v-btn class="butt" @click="storeCounter.decreaseCount">-</v-btn>
          <v-btn class="butt" @click="storeCounter.increaseCount">+</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12">
        <hr class="mt-10">
        <v-row no-gutters class="d-flex justify-center mt-6">
          This counter is: {{ storeCounter.oddOrEven }}
        </v-row>
        <hr class="my-10">
        <v-row no-gutters>
          <v-col cols="12">
            <h3>Edit counter:</h3>
          </v-col>
          <v-col cols="12" class="mt-4">
            <input
              v-model="storeCounter.count"
              type="number"
            >
          </v-col>
          
          
        </v-row>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<style>
.count {
  font-size: 60px;
}
.butt {
  font-size: 20px;
  margin: 10px;
}
</style>