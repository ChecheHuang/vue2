import service from '@/utils/service'
import qs from 'qs'
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

export function studentDel(id){
    return service({
        method:'delete',
        url:`/students/${id}`
    })
}

export function student(name){
    return service({
        method:'get',
        url:`/students/${name}`
    })
}

export function info(data){
    data=qs.stringify(data)
    return service({
        method:"post",
        url:"/info",
        data
    })
}


export function updateInfo(data) {
    data = qs.stringify(data)
    console.log(data)
    return service({
        method: "put",
        url: "/info",
        data
    })
}

export function getInfo() {
    return service({
        method: "get",
        url: "/info",
    })
}