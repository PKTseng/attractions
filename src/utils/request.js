import axios from "axios"
import Vue from "vue"

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 50000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    // 任何 HTTP status code 為 2xx 開頭時觸發此函式
    // console.log(response)
    if (response.status === 200) {
      return response.data
    } else {
      Vue.prototype.$swal.fire({ title: response.statusText, icon: "error", timer: 1500, showConfirmButton: false })
    }
  },

  //這裡是http status
  (error) => {
    console.log(error)
    switch (error.response.status) {
      case 400:
        console.log(response)
        break
      case 401:
        // tokenExpire();
        $router.replace("/login")
        break
      case 403:
        console.log(response)
        break
      case 404:
        console.log("你要找的頁面不存在")
        // go to 404 page
        break
      case 500:
        console.log("程式發生問題")
        // go to 500 page
        break
      default:
        console.log(error.message)
    }

    return Promise.reject(error)
  }
)

export default service
