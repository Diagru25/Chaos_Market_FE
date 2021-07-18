import { request } from './baseRequest';

const brandAPI = {
  getAllBrands() {
    return request({
      url: '/v1/brands',
      method: 'GET',
    });
  },
};

export default brandAPI;
