<template>
  <div class="container mx-auto">
    <section>
      <h2 class="mb-3 text-2xl font-extrabold">產品列表</h2>
      <table class="table-auto">
        <thead>
          <tr class="border-b-2 border-black">
            <th class="p-4">產品名稱</th>
            <th class="p-4">原價</th>
            <th class="p-4">售價</th>
            <th class="p-4">是否啟用</th>
            <th class="p-4">編輯/刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsData" :key="product.id">
            <td class="p-4">{{ product.title }}</td>
            <td class="p-4">{{ product.origin_price }}</td>
            <td class="p-4">{{ product.price }}</td>
            <td class="p-4" :class="{ 'text-red-500': product.is_enabled === 0 }">
              {{ product.is_enabled === 0 ? '未啟用' : '啟用' }}
            </td>
            <td>
              <button
                type="button"
                class="p-2 mr-2 border border-[#40916C] text-[#40916C] rounded hover:bg-[#40916C] hover:text-white active:bg-[#1B4332]"
              >
                編輯
              </button>
              <button
                type="button"
                class="p-2 text-red-400 border border-red-400 rounded active:bg-red-800 hover:bg-red-600 hover:text-white active:"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        目前有
        <span> {{ Object.entries(productsData).length }} </span>
        項產品
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: ['productsData'],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
