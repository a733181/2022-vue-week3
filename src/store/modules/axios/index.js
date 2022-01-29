import axios from 'axios';

const apiUrl = 'https://vue3-course-api.hexschool.io/v2/';

export default {
  namespaced: true,
  actions: {
    async post(context, payload) {
      try {
        const addUrl = payload.url;
        const { data } = payload;

        const { token } = payload;
        axios.defaults.headers.common.Authorization = token;

        const url = `${apiUrl}${addUrl}`;

        const res = await axios({
          method: 'post',
          url,
          data,
        });
        return res;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    async get(context, payload) {
      try {
        const addUrl = payload.url;
        const url = `${apiUrl}${addUrl}`;

        const res = await axios({
          method: 'get',
          url,
        });
        return res;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    async delete(context, payload) {
      try {
        const addUrl = payload.url;
        const url = `${apiUrl}${addUrl}`;
        const res = await axios({
          method: 'delete',
          url,
        });
        return res;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
};
