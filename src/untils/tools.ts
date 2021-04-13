
/**
 * @description: 检测是否为外部链接
 * @param {string} path
 * @return {*}
 */
export function isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)

}