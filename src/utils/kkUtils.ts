/** 通过礼物id获取礼物图片地址 */
export const getImgById = (id?: number): string => {
    if(!id) return ''
    return `https://rescdn.kktv8.com/kktv/icon/bang/png/${id}.png`
}

/** 通过礼物地址或id获取礼物图片地址 */
export const getImgByUrlOrId = (url?: string, id?: number): string => {
    if (url) return url
    return getImgById(id)
}