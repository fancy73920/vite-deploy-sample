// const { defineStore } = Pinia;
import { defineStore } from "pinia";
import productsStore from "./productsStore.js";

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // console.log(productId, qty )
      const currentCart = this.cart.find(item => item.productId === productId);
      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        });
      }
      console.log(this.cart)
    },
    removeCartItem(id) {
      const index = this.cart.findIndex(item => item.id === id);
      this.cart.splice(index, 1)
    },
    setCartQty(id, e) {
      // console.log(e.target.value)
      // console.log(id, e.target.value)
      const currentCart = this.cart.find(item => item.id === id)
      currentCart.qty = parseInt(e.target.value, 10)
      console.log(currentCart)
    }
  },
  getters: {
    // 必須計算小計的金額
    // 必須計算總金額
    
    cartList: ({cart}) => {
      // 購物車的品項資訊，需要整合產品資訊
      const { products } = productsStore();
      // 取得當前cart的狀態
      const carts = cart.map(item => {
        // 單一產品取出
        const product = products.find(product => product.id === item.productId)
        // console.log('相同id的產品', product)
        return {
          ...item,
          product,
          subTotal: product.price * item.qty
        }
      });

      const total = carts.reduce((counter, item) => counter + item.subTotal, 0);

      return {
        carts,
        total
      }
    }
  }
})