<template>
  <form action="" @submit.prevent="submitFrom">
    <div class="p-3 lg:flex lg:gap-7">
      <div class="lg:w-[300px]">
        <!-- 主圖 -->
        <div class="mb-3">
          <label for="imageUrl" class="text-xl"><span class="text-red-500">*</span>主圖</label>
          <input
            type="text"
            id="imageUrl"
            v-model="imageUrl.value"
            class="w-full px-2 py-1 mt-2 mb-3 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': imageUrl.isValue }"
            @blur="imageUrl.isValue = false"
            placeholder="輸入圖片網址"
          />
          <!-- 主圖預覽 -->
          <div class="w-full h-[200px] border-2 border-gray-600 mb-2">
            <p class="p-1">主圖預覽</p>
            <img
              :src="imageUrl.value"
              alt="主圖預覽"
              class="w-full h-[165px] object-cover"
              v-if="!!imageUrl.value"
            />
          </div>
        </div>
      </div>
      <div>
        <!-- 詳情圖-0 -->
        <div class="mb-3">
          <label for="imagesUrl0" class="text-xl">詳情圖-1</label>
          <input
            type="text"
            id="imagesUrl0"
            v-model="imagesUrl0.value"
            class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': imagesUrl0.isValue }"
            placeholder="輸入圖片網址"
            @blue="imagesUrl0.isValue = true"
          />
        </div>
        <!-- 詳情圖-1 -->
        <div class="mb-3">
          <label for="imagesUrl1" class="text-xl">詳情圖-2</label>
          <input
            type="text"
            id="imagesUrl1"
            v-model="imagesUrl1.value"
            class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': imagesUrl1.isValue }"
            placeholder="輸入圖片網址"
            @blue="imagesUrl1.isValue = true"
          />
        </div>
        <!-- 詳情圖-2 -->
        <div class="mb-3">
          <label for="imagesUrl2" class="text-xl">詳情圖-3</label>
          <input
            type="text"
            id="imagesUrl2"
            v-model="imagesUrl2.value"
            class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': imagesUrl2.isValue }"
            placeholder="輸入圖片網址"
            @blue="imagesUrl2.isValue = true"
          />
        </div>
        <!-- 詳情圖-3-->
        <div class="mb-3">
          <label for="imagesUrl3" class="text-xl">詳情圖-4</label>
          <input
            type="text"
            id="imagesUrl3"
            v-model="imagesUrl3.value"
            class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': imagesUrl3.isValue }"
            placeholder="輸入圖片網址"
            @blue="imagesUrl3.isValue = true"
          />
        </div>
        <!-- 詳情圖-4 -->
        <div class="mb-3">
          <label for="imagesUrl4" class="text-xl">詳情圖-5</label>
          <input
            type="text"
            id="imagesUrl4"
            v-model="imagesUrl4.value"
            class="w-full px-2 py-1 mt-2 mb-3 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': imagesUrl4.isValue }"
            placeholder="輸入圖片網址"
            @blue="imagesUrl4.isValue = true"
          />
        </div>
      </div>
      <div class="2xl:w-[600px]">
        <!-- 名稱 -->
        <div class="mb-3">
          <label for="title" class="text-xl"><span class="text-red-500">*</span>名稱</label>
          <input
            type="text"
            id="title"
            v-model="title.value"
            class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
            :class="{ 'border-red-300': title.isValue }"
            @blur="title.isValue = false"
          />
        </div>
        <!-- 描述/副標 -->
        <div class="mb-3">
          <label for="description" class="text-xl">描述 / 副標題</label>
          <input
            type="text"
            id="description"
            v-model="description"
            class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
          />
        </div>
        <!-- 原價/售價 -->
        <div class="flex gap-2">
          <div class="w-full mb-3">
            <label for="originPrice" class="text-xl"><span class="text-red-500">*</span>原價</label>
            <input
              type="number"
              id="originPrice"
              v-model="originPrice.value"
              class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
              :class="{ 'border-red-300': originPrice.isValue }"
              @blur="originPrice.isValue = false"
            />
          </div>
          <div class="w-full">
            <label for="price" class="text-xl"><span class="text-red-500">*</span>售價</label>
            <input
              type="number"
              id="price"
              v-model="price.value"
              class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
              :class="{ 'border-red-300': price.isValue }"
              @blur="price.isValue = false"
            />
          </div>
        </div>
        <!-- 分類/單位 -->
        <div class="flex gap-2">
          <div class="w-full">
            <label for="category" class="text-xl"><span class="text-red-500">*</span>分類</label>
            <input
              type="text"
              id="category"
              v-model="category.value"
              class="w-full px-2 py-1 mt-2 mb-3 bg-gray-200 border-2 border-gray-400 rounded-md"
              :class="{ 'border-red-300': category.isValue }"
              @blur="category.isValue = false"
            />
          </div>
          <div class="w-full">
            <label for="unit" class="text-xl"><span class="text-red-500">*</span>單位</label>
            <input
              type="text"
              id="unit"
              v-model="unit.value"
              class="w-full px-2 py-1 mt-2 bg-gray-200 border-2 border-gray-400 rounded-md"
              :class="{ 'border-red-300': unit.isValue }"
            />
          </div>
        </div>
        <!-- 內容說明/啟用 -->
        <div class="mb-1">
          <label for="content" class="text-xl"><span class="text-red-500">*</span>內容說明</label>
          <textarea
            type="text"
            id="content"
            v-model="content.value"
            class="bg-gray-200 border-2 border-gray-400 rounded-md w-full mt-2 px-2 py-1 h-[140px]"
            :class="{ 'border-red-300': content.isValue }"
            @blue="content.isValue = false"
          />
        </div>
        <div class="">
          <label for="enabled" class="mr-1 text-xl">啟用</label>
          <input type="checkbox" id="enabled" value="1" v-model="enabled" />
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        type="button"
        class="text-[#40916C] rounded-lg hover:text-[#2D6A4F] active:text-[#1B4332] px-4 py-1 border border-[#40916C] hover:border-[#2D6A4F] active:border-[#1B4332] mr-2"
        @click="clearFrom"
      >
        {{ productAdd ? '清除' : '還原' }}
      </button>
      <button
        class="text-white bg-[#40916C] rounded-lg hover:bg-[#2D6A4F] active:bg-[#1B4332] px-4 py-1"
      >
        送出
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    productAdd: {
      type: Boolean,
      relative: false,
      default: false,
    },
  },
  data() {
    return {
      id: '',
      title: {
        value: '',
        isValue: false,
      },
      description: '',
      originPrice: {
        value: '',
        isValue: false,
      },
      price: {
        value: '',
        isValue: false,
      },
      category: {
        value: '',
        isValue: false,
      },
      unit: {
        value: '',
        isValue: false,
      },
      content: {
        value: '',
        isValue: false,
      },
      enabled: 0,
      imageUrl: {
        value: '',
        isValue: false,
      },
      imagesUrl0: {
        value: '',
        isValue: false,
      },
      imagesUrl1: {
        value: '',
        isValue: false,
      },
      imagesUrl2: {
        value: '',
        isValue: false,
      },
      imagesUrl3: {
        value: '',
        isValue: false,
      },
      imagesUrl4: {
        value: '',
        isValue: false,
      },
    };
  },
  methods: {
    submitFrom() {
      const url = /\b(?:(?:https?|http):\/\/|www\.)[-a-z0-9+&@#%?=~_|!:,.;]*[-a-z0-9+&@#%=~_|]/i;

      if (this.imageUrl.value === '' || !url.test(this.imageUrl.value)) {
        this.imageUrl.isValue = true;
        return;
      }
      if (this.title.value === '') {
        this.title.isValue = true;
        return;
      }
      if (this.originPrice.value === '' || this.originPrice.value <= 0) {
        this.originPrice.isValue = true;
        return;
      }
      if (this.price.value === '' || this.originPrice.value <= 0) {
        this.price.isValue = true;
        return;
      }
      if (this.category.value === '') {
        this.category.isValue = true;
        return;
      }
      if (this.unit.value === '') {
        this.unit.isValue = true;
        return;
      }
      if (this.content.value === '') {
        this.content.isValue = true;
        return;
      }
      for (let item = 0; item < 5; item += 1) {
        const imageNumber = `imagesUrl${item}`;
        if (this[imageNumber].value !== '') {
          if (!url.test(this[imageNumber].value)) {
            this[imageNumber].isValue = true;
            return;
          }
        }
      }

      const imagesUrl = [];
      for (let i = 0; i < 5; i += 1) {
        const imageNumber = `imagesUrl${i}`;
        imagesUrl.push(this[imageNumber]);
      }

      const data = {
        title: this.title.value,
        category: this.category.value,
        origin_price: this.originPrice.value,
        price: this.price.value,
        unit: this.unit.value,
        description: this.description,
        content: this.content.value,
        is_enabled: this.is_enabled,
        imageUrl: this.imageUrl.value,
        imagesUrl,
      };
      console.log(data);
    },
    clearFrom() {
      if (this.productAdd) {
        this.title.value = '';
        this.description = '';
        this.originPrice.value = '';
        this.price.value = '';
        this.category.value = '';
        this.unit.value = '';
        this.content.value = '';
        this.enabled = 0;
        this.imageUrl = '';

        for (let i = 0; i < 5; i += 1) {
          const imageNumber = `imagesUrl${i}`;
          this[imageNumber] = '';
        }
      } else {
        this.getEditProductData();
      }
    },
    getEditProductData() {
      const product = this.$store.getters['product/editProduct'];
      this.id = product.id;
      this.title.value = product.title;
      this.description = product.description ?? '';
      this.originPrice.value = product.origin_price;
      this.price.value = product.price;
      this.category.value = product.category;
      this.content.value = product.content;
      this.imageUrl.value = product.imagesUrl;
      this.enabled = product.is_enabled;
      this.unit.value = product.unit;
      product.imagesUrl.forEach((item, index) => {
        const imageNumber = `imagesUrl${index}`;
        this[imageNumber].value = item ?? '';
      });
    },
  },
  mounted() {
    const product = this.$store.getters['product/editProduct'];
    if (product && !this.productAdd) {
      this.getEditProductData();
    }
  },
};
</script>
