import { defineStore } from 'pinia';
export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [
      {
        name: "Biscoff S\'more",
        img: 'src/assets/biscoffsmore.png',
        price: '69',
        stock: '25',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Biscoff",
        color: "Brown",
        fav: false,
      },
      {
        name: 'Red Velvet S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '23',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Red Velvet",
        color: "Red",
        fav: false,
      },
      {
        name: 'Matcha S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '89',
        stock: '10',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Matcha",
        color: "Green",
        fav: false,
      },
      {
        name: 'Choco S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '0',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Chocolate",
        color: "Black",
        fav: false,
      },
      {
        name: 'Oreo S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '69',
        stock: '4',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Oreo",
        color: "Black",
        fav: false,
      },
      {
        name: 'Peanut Butter S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '4',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Butter",
        color: "Brown",
        fav: false,
      },
      {
        name: 'Minty S\'more',
        img: 'src/assets/biscoffsmore.png',
        price: '79',
        stock: '4',
        wanted: 1,
        selectInCart: 1,
        type: "S'more",
        flavour: "Mint",
        color: "Green",
        fav: false,
      },
      {
        name: 'Chocolate Chip Cookie',
        img: 'src/assets/biscoffsmore.png',
        price: '49',
        stock: '14',
        wanted: 1,
        selectInCart: 1,
        type: "Cookie",
        flavour: "Chocolate",
        color: "Brown",
        fav: false,
      },

    ],
    showProduct: [],
    cart: [],
    voucher: [{
      name: 'Free Shipping',
      discount: "Number(Shipping.value)"
    },
    {
      name: '10% off',
      discount: "0.1 * sumTotal.value"
    }
    ],
    myFav: [],
    type: ["Cookie", "S'more",],
    color: ['Yellow', 'Green', 'Brown', 'Red', 'Pink'],
    flavour: ['Vanila', 'Chocolate', 'Matcha','Oreo', 'Butter', 'Red Velvet','Mint', 'Biscoff' ],

  }),
  actions: {
    updateByEdit(item) {
      const find = this.products.find((each, index) => {
        console.log(index)
        console.log(item.index)

        if (index == item.index.value) return each
      })
      find.name = item.name.value
      find.price = item.price.value
      find.stock = item.stock.value
      find.img = item.img.value
      this.products.splice(item.index.value, 1, find)
    },
    editProd(input, index){
      console.log("input",input)
      console.log("its editProd work");
    },
    deleteProd(index){
      this.products.splice(index, 1);
      
    },
    addNewProduct(data) {
      this.products.push(data);
      console.log("out ", this.products);
    },
    showing(data) {
      this.showProduct.push(data);
    },
    notShow() {
      this.showProduct.splice(0, this.showProduct.length);
    },
    addToCart(data) {
      const findCart = this.cart.find((each) => {
        if (each.name == data.name) return each
      })
      const findProd = this.products.find((each) => {
        if (each.name == data.name) return each
      })
      console.log(find);
      if (this.cart.length == 0 || findCart == undefined) {
        this.cart.push(data);
        findProd.selectInCart = data.wanted;
      }
      else findCart.selectInCart += data.wanted;
      findProd.wanted = 1;
    },
    deleteCart(index) {
      this.cart.splice(index, 1);
    },
    increaseCount(index) {
      if (this.products[index].wanted < this.products[index].stock &&
        (this.products[index].selectInCart + this.products[index].wanted) < this.products[index].stock)
        this.products[index].wanted++
      else this.products[index].stock
    },
    decreaseCount(index) {
      if (this.products[index].wanted != 0) this.products[index].selectInCart--
      else this.products[index].wanted = 0
    },
    increaseCountCart(index) {
      this.cart[index].selectInCart < this.cart[index].stock ?
        this.cart[index].selectInCart++ : this.cart[index].stock
    },
    decreaseCountCart(index) {
      if (this.cart[index].selectInCart != 0) this.cart[index].selectInCart--
      else this.cart[index].selectInCart = 0
    },
    checkOut() {
      for (let i = 0; i < this.cart.length; i++) {
        const searchIndex = this.products.findIndex((item) => item.name == this.cart[i].name);
        this.products[searchIndex].stock -= this.cart[i].selectInCart
      }
      this.cart.splice(0, this.cart.length);

    },
    favorite(name) {
      const searchIndex = this.products.findIndex((item) => item.name == name);
      const find = this.products.find((each) => {
        if (each.name == name) return each
      })
      if (find.fav == false) this.myFav.push(find);
      else {
        const index = this.myFav.findIndex((item) => item.name == name);
        this.myFav.splice(index, 1);
      }
      find.fav = !find.fav
      this.products.splice(searchIndex, 1, find)
    }
  },
});