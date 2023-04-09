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