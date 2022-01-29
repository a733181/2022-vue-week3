export default {
  async getProducts(context) {
    const payload = {
      url: 'api/tita/admin/products/all',
    };
    const res = await context.dispatch('axios/get', payload, {
      root: true,
    });
    // console.log(res.data.products);
    context.commit('getProducts', res.data.products);
  },
  editProduct(context, payload) {
    context.commit('editProduct', payload);
  },
  async deleteProduct(context, payload) {
    const id = payload;
    const url = {
      url: `api/tita/admin/product/${id}`,
    };

    const res = await context.dispatch('axios/delete', url, {
      root: true,
    });
    return res.data.success;
  },
};
