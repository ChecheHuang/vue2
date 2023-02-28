import axios from 'axios'
import {getToken} from '@/utils/setToken.js'
import { Message } from 'element-ui'
const service =axios.create({
    baseURL: '/api2',
    timeout:3000
})

//請求攔截
service.interceptors.request.use((config)=>{
    //請求前
    config.headers['token']=getToken('token')
    return config
}),(error)=>{
    return Promise.reject(error)
}

//響應攔截
service.interceptors.response.use((response)=>{
    //請求後
    let {status,message}=response.data
    if(status!==200){
        Message({message:message||'error',type:'warning'})
    }
    return response

}),(error)=>{
    return Promise.reject(error)
}

export default service