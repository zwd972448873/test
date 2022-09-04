import axios from 'axios'
import { Notification, Message } from 'element-ui'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: '/dev-api',
  // 超时
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200
  // 获取错误信息
  const msg = res.data.msg
  if (code !== 200) {
    Notification.error({
      title: msg
    })
    return Promise.reject(new Error('error'))
  } else {
    return res.data
  }
},
error => {
  console.log('err' + error)
  const { message } = error
  Message({
    message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
)

export default service
