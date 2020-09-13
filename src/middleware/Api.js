import axios from 'axios';

function baseAxios() {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
}

function executeRequest(method, pathname, data, options = {}) {
  const body =
    method === 'get' || !data
      ? {}
      : {
          data,
        };

  const reqObj = {
    method,
    url: pathname,
    params: options.query,
    ...body,
  };

  const baseAxiosRequest = baseAxios(options);

  return new Promise((resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        console.log('Request success', res);
        resolve(res);
      })
      .catch(error => {
        console.log('Request error', error.response);
        reject(error);
      });
  });
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options);
  },

  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options);
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options);
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },
};
