export default {
  getProducts(state, payload) {
    state.productData = payload;
  },
  getEditProductData(state, payload) {
    state.editProductData = { ...payload };
  },
};
