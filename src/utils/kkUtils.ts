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

// 设备是否为手机端
export const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|ipad/i.test(navigator.userAgent);

// 判断自然数正则
export const natureREG = /^\d+$/

// 默认头像
export const defaultAvatar = 'https://rescdn.kktv8.com/kk-web-res/activity3/play_2310/w-logo1.png'