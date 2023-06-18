<template>
  <div class="row row-cols-3 py-4 g-3">
    <div v-for="item in sortProducts" :key="item.id" class="col">
      <div class="card h-100">
        <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <p class="card-title fw-bold h6">
            {{ item.title }}
            <span class="float-end">$ {{ item.price }}</span>
          </p>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(item.id,)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import productsStore from "../stores/productsStore.js";
  import cartStore from "../stores/cartStore.js";
  import { mapState, mapActions } from "pinia";

  export default {
    computed: {
      // 將Pinia處理好的state對映到這個元件
      // 使用輔助函數mapState()
      ...mapState(productsStore, ['sortProducts'])
    },
    methods: {
      ...mapActions(cartStore, ['addToCart'])
    }
  }
</script>