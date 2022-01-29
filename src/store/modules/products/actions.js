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
  editOneProduct(context, payload) {
    console.log(payload);
    context.commit('oneProduct', payload);
  },
};
