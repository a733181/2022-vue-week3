export default {
  async login(context, payload) {
    try {
      const res = await context.dispatch('axios/post', payload, {
        root: true,
      });
      // console.log(res);
      const { token } = res.data;

      // cookie
      const expired = new Date(res.data.expired).toUTCString();
      document.cookie = `token=${token};expires=${expired};`;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async tryLogin(context) {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

    const payload = {
      url: 'api/user/check',
      token,
    };

    try {
      const res = await context.dispatch('axios/post', payload, {
        root: true,
      });

      // console.log(res);
      context.commit('isLogin', res.data.success);
      return res.data.success;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  logout() {
    document.cookie = `token=;expires=${new Date().toGMTString()}`;
  },
};
