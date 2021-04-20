import { Token } from '@/types/request'
import request from './request'


export const getHuaWeiToken = (data: Token) => {
    return request({
        url: '/v3/auth/tokens',
        method: 'post',
        data
    })
}

export const reportImg = (data:any) => {
    return request({
        url: '/v1/infers/a8987c05-3768-4f8d-af26-5d4f544c1215',
        method: 'post',
        data
    })
}