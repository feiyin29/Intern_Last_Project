<template>
<v-card>
    <v-layout>
      <v-navigation-drawer
      v-model="drawer"
      >
          <v-list density="compact" nav
            class="mb-6"
            v-for="subheader in filter[0].header"
              :key="subheader"
          >
            <v-list-subheader class="text-uppercase">{{subheader}}</v-list-subheader>
            <v-list-item 
              class="d-flex flex-column align-start"
              v-for="item in filter[1].flavour"
              :key="item.name"
            >
              <v-checkbox 
                :label= "item.name"
                :color= "item.color"
                hide-details
                class="mb-n8"
              ></v-checkbox>
          </v-list-item> 
          </v-list>
      </v-navigation-drawer>
      <v-main style="height: 550px">
        <div class="d-flex justify-center align-center h-100">
          <v-btn
            color="primary"
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script >
export default {
    data () {
      return {
        drawer: null,
        filter: [
          {
            header: ["type", "flavour", "color"],
          },
          {
            type:[
              {
                name: 'Cookie',
                color: '#5A5A5A',
              },
              {
                name: 'S\'more',
                color: '#744321',
              }
            ],
            flavour: [
              {
                name: 'Vanila',
                color: '#FFCEB2',
              },
              {
                name: 'Chocolate',
                color: '#744321',
              },
              {
                name: 'Macha',
                color: '#43610A',
              },
              {
                name: 'Oreo',
                color: '#5A5A5A',
              },
              {
                name: 'Strawberry',
                color: '#d84f47',
              },
            ],
            color: [
              {
                name: 'Light Blue',
                color: '#6AC8CE',
              },
              {
                name: 'Green',
                color: '#7FA536',
              },
              {
                name: 'Brown',
                color: '#74533D',
              },
              {
                name: 'Red',
                color: '#d84f47',
              },
              {
                name: 'Pink',
                color: '#FFB0A6',
              },
            ]
          },
        ],
      }
    },
  }

</script>

<style scoped>
.counter-button {
  font-size: 50px;
}

.minusB {
  font-size: 25px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
