export default {
  getProducts(state, payload) {
    state.productData = payload;
  },
  editProduct(state, payload) {
    state.editProduct = { ...payload };
  },
};
