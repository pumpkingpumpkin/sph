import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL:'/mock',
    timeout:5000,//请求超时时间
})
requests.interceptors.request.use((config)=>{
    nProgress.start()
    return config;
})
requests.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('服务器响应数据失败'))
})

export default requests