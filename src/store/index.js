import { createStore } from 'vuex';
import AxiosModules from './modules/axios/index';
import AuthModules from './modules/auth/index';
import productsModules from './modules/products/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    axios: AxiosModules,
    auth: AuthModules,
    product: productsModules,
  },
});
