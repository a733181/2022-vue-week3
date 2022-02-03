<template>
  <div>
    <section>
      <div class="flex items-center justify-between">
        <h2 class="mb-2 text-2xl font-extrabold">產品列表</h2>
        <p>
          目前有
          <span> {{ productsData.length }} </span>
          項產品
        </p>
      </div>
      <table class="w-full lg:text-center">
        <thead>
          <tr class="border-b-2 border-black">
            <th class="p-2" @click="sort('title')">
              產品名稱
              <img
                src="@/assets/long-arrow-alt-down-solid.svg"
                alt="arrow"
                class="w-[8px] inline"
                :class="{ ' rotate-180': toSort }"
                v-if="sortType === 'title'"
              />
              <img
                src="@/assets/window-minimize-regular.svg"
                alt="minimize"
                class="w-[8px] inline"
                v-if="sortType !== 'title'"
              />
            </th>
            <th class="p-2">主圖</th>
            <th class="p-2" @click="sort('category')">
              分類
              <img
                src="@/assets/long-arrow-alt-down-solid.svg"
                alt="arrow"
                class="w-[8px] inline"
                :class="{ ' rotate-180': toSort }"
                v-if="sortType === 'category'"
              />
              <img
                src="@/assets/window-minimize-regular.svg"
                alt="minimize"
                class="w-[8px] inline"
                v-if="sortType !== 'category'"
              />
            </th>
            <th class="p-2" @click="sort('origin_price')">
              原價
              <img
                src="@/assets/long-arrow-alt-down-solid.svg"
                alt="arrow"
                class="w-[8px] inline"
                :class="{ ' rotate-180': toSort }"
                v-if="sortType === 'origin_price'"
              />
              <img
                src="@/assets/window-minimize-regular.svg"
                alt="minimize"
                class="w-[8px] inline"
                v-if="sortType !== 'origin_price'"
              />
            </th>
            <th class="p-2" @click="sort('price')">
              售價
              <img
                src="@/assets/long-arrow-alt-down-solid.svg"
                alt="arrow"
                class="w-[8px] inline"
                :class="{ ' rotate-180': toSort }"
                v-if="sortType === 'price'"
              />
              <img
                src="@/assets/window-minimize-regular.svg"
                alt="minimize"
                class="w-[8px] inline"
                v-if="sortType !== 'price'"
              />
            </th>
            <th class="p-2" @click="sort('is_enabled')">
              是否啟用
              <img
                src="@/assets/long-arrow-alt-down-solid.svg"
                alt="arrow"
                class="w-[8px] inline"
                :class="{ ' rotate-180': toSort }"
                v-if="sortType === 'is_enabled'"
              />
              <img
                src="@/assets/window-minimize-regular.svg"
                alt="minimize"
                class="w-[8px] inline"
                v-if="sortType !== 'is_enabled'"
              />
            </th>
            <th class="p-2">編輯/刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsData" :key="product[1].id" class="border-b-2">
            <td class="">{{ product[1].title }}</td>
            <td class="w-[100px] p-1"><img :src="product[1].imageUrl" alt="" /></td>
            <td class="">{{ product[1].category }}</td>
            <td class="">{{ product[1].origin_price }}</td>
            <td class="">{{ product[1].price }}</td>
            <td class="" :class="{ 'text-red-500': product[1].is_enabled === 0 }">
              {{ product[1].is_enabled === 0 ? '未啟用' : '啟用' }}
            </td>
            <td>
              <button
                type="button"
                class="p-2 mr-2 border border-[#40916C] text-[#40916C] rounded hover:bg-[#40916C] hover:text-white active:bg-[#1B4332]"
                @click="showEditProduct(product[1])"
              >
                編輯
              </button>
              <button
                type="button"
                class="p-2 text-red-400 border border-red-400 rounded active:bg-red-800 hover:bg-red-600 hover:text-white"
                @click="deleteProduct(product[1])"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <base-dialog :show="switchEditProduct" @close="closeEditProduct" productModel title="修改商品">
      <product-form @productFromData="editProduct"></product-form>
    </base-dialog>
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue';

export default {
  emit: ['productId', 'editProductData'],
  components: { ProductForm },
  data() {
    return {
      switchEditProduct: false,
      sortType: 'title',
      toSort: false,
    };
  },
  computed: {
    productsData() {
      const data = this.$store.getters['product/productsData'] ?? '';
      const dataArr = Object.entries(data);

      if (this.sortType !== '') {
        return dataArr.sort((itemA, itemB) => {
          if (itemA[1][this.sortType] > itemB[1][this.sortType]) return this.toSort ? -1 : 1;
          if (itemA[1][this.sortType] < itemB[1][this.sortType]) return this.toSort ? 1 : -1;
          return 0;
        });
      }
      return dataArr;
    },
  },

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
    sort(type) {
      this.toSort = !this.toSort;
      this.sortType = type;
    },
  },
};
</script>
