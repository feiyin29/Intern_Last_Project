import { defineStore } from 'pinia';
export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [
      { name: "'Biscoff S\'more",
        img: 'src/assets/biscoffsmore.png',
        price: '69',
        stock: '25',
        wanted: 0,
        fav: false,
      },
      { name: 'Red Velvet S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '23',
        wanted: 0,
        fav: false,
      },
      { name: 'Matcha S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '89',
        stock: '10',
        wanted: 0,
        fav: false,
      },
      { name: 'Choco S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '0',
        wanted: 0,
        fav: false,
      },
      { name: 'Oreo S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '69',
        stock: '4',
        wanted: 0,
        fav: false,
      },
      { name: 'Peanut Butter S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '4',
        wanted: 0,
        fav: false,
      },
      { name: 'Minty S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '4',
        wanted: 0,
        fav: false,
      },
      
    ],
  }),
  actions: {
    pushData(param) {
      this.products.push(param);
    },
    increaseCount(index){
        this.products[index].wanted < this.products[index].stock ?
        this.products[index].wanted++ : this.products[index].stock
      
      },
    decreaseCount(index){
      if ( this.products[index].wanted!=0 ) this.products[index].wanted--
      else this.products[index].wanted==0
    },
    favorite(index){
      (this.products[index].fav) = !(this.products[index].fav)
    }
  },
});