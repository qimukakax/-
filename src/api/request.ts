import { getToken } from '@/untils/tools'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000 
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['X-Auth-Token'] = getToken()
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.headers['x-subject-token']) {
      localStorage.setItem('token',response.headers['x-subject-token'])
    }
    return res
  },
  error => {
    console.log('err' + error) 
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 1000
    })
    return Promise.reject(error)
  }
)

export default service
