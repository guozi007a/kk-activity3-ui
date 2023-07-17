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

// 存储用户信息
export const KK_UI_USER_INFO = "kk_ui_user_info"

// 判断自然数正则
export const natureREG = /^\d+$/

// 取url参数值
export const getQueryString = (name: string): string => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.slice(1).match(reg);
    if (r != null)
        return encodeURIComponent(r[2]);
    return "";
}

// 默认头像
export const defaultAvatar = 'https://rescdn.kktv8.com/kk-web-res/activity3/play_2310/w-logo1.png'

// 直播间前缀
export const preRoom = isMobile ? "https://www.kktv1.com/m/?roomid=" : "https://www.kktv5.com/"

interface KKUtils {
    // IMAGE_CDN_PATH_PREFIX?: string
    // joinAvatarUrl?: (prefix: string | null, url: string | null, size: number) => string
    [name: string]: any
}
const util: KKUtils = {}

// 头像或海报前缀
util.IMAGE_CDN_PATH_PREFIX = "https://ares.kktv8.com/kktv"

// 头像地址拼接
util.joinAvatarUrl = function (prefix: string | null, url: string | null, size: number): string {
    if (!url || (url.indexOf('.png') < 0 && url.indexOf('.jpg') < 0 && url.indexOf('.jpeg') < 0 && url.indexOf('.gif') < 0 && url.indexOf('.webp') < 0 && url.indexOf('.svga') < 0 && url.indexOf('.mp4') < 0)) {
        return defaultAvatar;
    }

    if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0 || url.indexOf("://") == 0 || url.indexOf("/images/") == 0 || url.indexOf("/show/") == 0 || url.indexOf("/friends/") == 0) {
        return url;
    }

    if (size && url.indexOf("!") == -1) {
        url = url + "!" + size
    }

    if (url.indexOf("/") != 0) {
        url = "/" + url;
    }

    if (prefix && prefix.lastIndexOf("/") == prefix.length - 1) {
        prefix = prefix.substr(0, prefix.length - 1);
    }

    return (prefix || kkUtils.IMAGE_CDN_PATH_PREFIX) + url;
}

export const kkUtils = util