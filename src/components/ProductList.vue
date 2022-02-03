<template>
  <div>
    <section>
      <h2 class="mb-3 text-2xl font-extrabold">產品列表</h2>
      <table class="w-full lg:text-center">
        <thead>
          <tr class="border-b-2 border-black">
            <th class="p-2">產品名稱</th>
            <th class="p-2">主圖</th>
            <th class="p-2">分類</th>
            <th class="p-2">原價</th>
            <th class="p-2">售價</th>
            <th class="p-2">是否啟用</th>
            <th class="p-2">編輯/刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsData" :key="product.id" class="border-b-2">
            <td class="p-2">{{ product.title }}</td>
            <td class="p-2 w-[200px]"><img :src="product.imageUrl" alt="" /></td>
            <td class="p-2">{{ product.category }}</td>
            <td class="p-2">{{ product.origin_price }}</td>
            <td class="p-2">{{ product.price }}</td>
            <td class="p-2" :class="{ 'text-red-500': product.is_enabled === 0 }">
              {{ product.is_enabled === 0 ? '未啟用' : '啟用' }}
            </td>
            <td>
              <button
                type="button"
                class="p-2 mr-2 border border-[#40916C] text-[#40916C] rounded hover:bg-[#40916C] hover:text-white active:bg-[#1B4332]"
                @click="showEditProduct(product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="p-2 text-red-400 border border-red-400 rounded active:bg-red-800 hover:bg-red-600 hover:text-white"
                @click="deleteProduct(product)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="mt-2">
        目前有
        <span> {{ Object.entries(productsData).length }} </span>
        項產品
      </p>
    </section>
    <base-dialog :show="switchEditProduct" @close="closeEditProduct" productModel title="修改商品">
      <product-form @productFromData="editProduct"></product-form>
    </base-dialog>
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue';

export default {
  props: ['productsData'],
  emit: ['productId', 'editProductData'],
  components: { ProductForm },
  data() {
    return {
      switchEditProduct: false,
    };
  },
  computed: {},
  methods: {
    showEditProduct(product) {
      this.$store.dispatch('product/getEditProductData', product);
      this.switchEditProduct = true;
    },
    closeEditProduct() {
      this.switchEditProduct = false;
    },
    deleteProduct(product) {
      const { id } = product;
      this.$emit('productId', id);
    },
    editProduct(product) {
      this.switchEditProduct = false;
      this.$emit('editProductData', product);
    },
  },
};
</script>
