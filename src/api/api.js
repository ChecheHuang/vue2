import service from '@/utils/service'

export function login(data){
    return service({
        method:'post',
        url:'login',
        data
    })
}
export function students(params){
    return service({
        method:'get',
        url:'/students',
        params
    })
}