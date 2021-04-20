import { PieCharts } from "@/types/const"


/**
 * @description: 检测是否为外部链接
 * @param {string} path
 * @return {*}
 */
export function isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)

}

/**
 * @description: 过去token
 * @param {*}
 * @return {*}
 */
export function getToken() {
    return localStorage.getItem('token')
}

export function transformArrToCharts(arr:string[][]):PieCharts[] {
    let obj:PieCharts[] = []
    for (let i = 0 ;i < arr.length ; i++) {
        obj.push({
            value: parseFloat(String(100*+arr[i][1])).toFixed(2),
            name: arr[i][0]+ ''
        })
    }
    return obj
}