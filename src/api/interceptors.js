import axios from "axios";
const axiosObj = axios.create({
  timeout: 15000
});
// 请求拦截器
axiosObj.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("userToken")

    if (token) {
      config.headers['Authorization'] = token
    }
    console.log(config);
    return config
  },
  err => Promise.reject(err)
)

axiosObj.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
)

export default axiosObj