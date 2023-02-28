import service from '@/utils/service'

export function login(data){
    return service({
        method:'post',
        url:'login',
        data
    })
}