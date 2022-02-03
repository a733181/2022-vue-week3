<template>
  <div class="container mx-auto my-5">
    <section class="w-full mb-6 lg:flex lg:justify-between">
      <button
        type="button"
        @click="logout"
        class="px-4 py-2 text-red-400 border border-red-400 rounded-lg active:bg-red-800 hover:bg-red-600 hover:text-white"
      >
        登出
      </button>
      <button
        type="button"
        @click="showAddProduct"
        class="py-2 text-white bg-[#40916C] rounded-lg hover:bg-[#2D6A4F] active:bg-[#1B4332] px-2"
      >
        新增商品
      </button>
    </section>
    <product-list @productId="deleteProduct" @editProductData="editProduct" />
    <base-loading :show="isLoading"></base-loading>
    <base-dialog :show="!!error" title="Error" @close="closeDialog">
      {{ error }}
    </base-dialog>
    <base-dialog :show="switchAddProduct" @close="closeAddProduct" productModel title="新增商品">
      <product-form addProductModel @productFromData="addProduct"></product-form>
    </base-dialog>
  </div>
</template>

<script>
import ProductList from '../components/product/ProductList.vue';
import ProductForm from '../components/product/ProductForm.vue';

export default {
  components: { ProductList, ProductForm },
  data() {
    return {
      error: null,
      isLoading: false,
      switchAddProduct: false,
    };
  },
  computed: {},
  methods: {
    async tryLogin() {
      try {
        this.isLoading = true;
        const res = await this.$store.dispatch('auth/tryLogin');
        if (res) {
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
    showAddProduct() {
      this.switchAddProduct = true;
    },
    closeAddProduct() {
      this.switchAddProduct = false;
    },
    async addProduct(productData) {
      this.switchAddProduct = false;
      try {
        this.isLoading = true;
        const res = await this.$store.dispatch('product/addProduct', productData);
        if (res) {
          this.getProducts();
        }
      } catch (err) {
        this.isLoading = false;
        this.err = err.message;
      }
    },
    async editProduct(productData) {
      try {
        this.isLoading = true;
        const res = await this.$store.dispatch('product/editProduct', productData);
        if (res) {
          this.getProducts();
        }
      } catch (err) {
        this.isLoading = false;
        this.error = err.message;
      }
    },
    async deleteProduct(productId) {
      try {
        this.isLoading = true;
        const res = await this.$store.dispatch('product/deleteProduct', productId);
        if (res) {
          this.getProducts();
        }
      } catch (err) {
        this.isLoading = false;
        this.error = err.message;
      }
    },
    async logout() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('auth/logout');
        this.$router.replace('/login');
      } catch (err) {
        this.err = err.message;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.tryLogin();
  },
};
</script>
