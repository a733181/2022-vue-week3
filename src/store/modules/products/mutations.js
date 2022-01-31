export default {
  getProducts(state, payload) {
    state.productData = payload;
  },
  editProductData(state, payload) {
    state.editProduct = { ...payload };
  },
};
