import { request } from './baseRequest';

const categoryAPI = {
  getAllCategories() {
    return request({
      url: '/v1/categories',
      method: 'GET',
    });
  },
};

export default categoryAPI;
