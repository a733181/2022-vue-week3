export default {
  getProducts(state, payload) {
    state.productData = payload;
  },
  editOneProduct(state, payload) {
    state.editOneProduct = payload;
  },
};
