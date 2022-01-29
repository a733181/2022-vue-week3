<template>
  <section class="container mx-auto my-5">
    <button
      type="button"
      @click="showProductAdd"
      class="py-2 text-white bg-[#40916C] rounded-lg hover:bg-[#2D6A4F] active:bg-[#1B4332] px-2"
    >
      新增商品
    </button>
  </section>
  <product-list :productsData="productsData" @id="deleteProduct" />
  <base-loading :show="isLoading"></base-loading>
  <base-dialog :show="!!error" title="Error" @close="closeDialog">
    {{ error }}
  </base-dialog>
  <base-dialog :show="productAdd" @close="closeProductAdd" productModel title="新增商品">
    <product-form productAdd></product-form>
  </base-dialog>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import ProductForm from '../components/ProductForm.vue';

export default {
  components: { ProductList, ProductForm },
  prop: ['id'],
  data() {
    return {
      error: null,
      isLoading: false,
      productAdd: false,
    };
  },
  computed: {
    productsData() {
      return this.$store.getters['product/productsData'] ?? '';
    },
  },
  methods: {
    async tryLogin() {
      try {
        this.isLoading = true;
        const isLogin = await this.$store.dispatch('auth/tryLogin');
        if (isLogin) {
          this.getProducts();
        }
      } catch (err) {
        this.$router.replace('/login');
        this.isLoading = false;
      }
    },
    async getProducts() {
      try {
        await this.$store.dispatch('product/getProducts');
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
    closeDialog() {
      this.error = null;
    },
    showProductAdd() {
      this.productAdd = true;
    },
    closeProductAdd() {
      this.productAdd = false;
    },
    async deleteProduct(id) {
      try {
        this.isLoading = true;
        const res = await this.$store.dispatch('product/deleteProduct', id);
        if (res) {
          this.getProducts();
        }
      } catch (err) {
        this.error = err.message;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.tryLogin();
  },
};
</script>
