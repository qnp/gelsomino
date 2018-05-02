import Vue from 'vue'

import config from '../config/app'

export default {
  get: function (url, request) {
    return Vue.http.get(config.baseUrl + url, request)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error))
  },
  post: function (url, request) {
    return Vue.http.post(config.baseUrl + url, request)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error))
  },
  put: function (url, request) {
    return Vue.http.put(config.baseUrl + url, request)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error))
  },
  delete: function (url, request) {
    return Vue.http.delete(config.baseUrl + url, request)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error))
  }
}
