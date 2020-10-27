import axios from 'axios'

export function request (config) {
  // eslint-disable-next-line new-cap
  const instance = new axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => { console.log(err) })

  // 相应拦截
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => { console.log(err) })

  return instance(config)
}

export function request2 (config) {
  // eslint-disable-next-line new-cap
  const instance = new axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6'
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => { console.log(err) })

  // 相应拦截
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => { console.log(err) })

  return instance(config)
}
