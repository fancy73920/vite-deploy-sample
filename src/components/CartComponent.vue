<template>
  <div class="bg-light my-4 p-4">
  <div v-if="!cartList.carts.length">購物車沒有任何品項</div><!-- v-if -->
  <!-- v-else -->
  <table v-else class="table">
    <!-- 購物車裡的所有品項 -->
    <tbody>
      <tr class="align-middle" v-for="item in cartList.carts" :key="item.id">
        <td width="100">
          <a href="#" class="text-decoration-none text-danger"
          @click.prevent="removeCartItem(item.id)"
          >X</a>
        </td>
        <td width="100">
          <img :src="item.product.imageUrl" class="table-img" :alt="item.product.title">
        </td>
        <td>{{ item.product.title }}</td>
        <td>
          <select name="" id="" class="form-select" :value="item.qty" @change="setCartQty(item.id, $event)">
            <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
          </select>
        </td>
        <td class="text-end">
          $ {{ item.subTotal }}
        </td>
      </tr>
    </tbody>
    <!-- 小計 -->
    <tfoot>
      <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
    </tfoot>
  </table>
</div>
</template>

<script>
  import cartStore from '../stores/cartStore.js';
// const { mapState, mapActions } = Pinia;
  import { mapState, mapActions } from "pinia";


export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  }
}
</script>