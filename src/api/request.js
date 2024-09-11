import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import store from '@/store'

const requests = axios.create({
    baseURL:'/api',
    timeout:5000,//请求超时时间
})
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
    }
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
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