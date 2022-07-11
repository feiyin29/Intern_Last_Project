<template>
<v-select
    v-model="select"
    :items="sort"
    item-title="state"
    label="Select"
    return-object
    single-line
    variant="solo"
  ></v-select>

</template>
<script >
export default {
    data () {
      return {
        select: { state: 'Sort by Default'},
        sort: [ 'Sort by Popularity', 'Sort by Newest', 'Sort by Price : High-Low', 'Sort by Price : Low-High'],
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
