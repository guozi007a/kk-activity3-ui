/** 获取cookie中的用户信息 */
import { defaultAvatar } from "~/utils/kkUtils"

const useUserInfo = () => {
    const cookies = document.cookie
    if (!cookies) return {
        userId: 0,
        nickname: '',
        avatarUrl: defaultAvatar
    }
    const info = cookies.replace('UI_USER_INFO=', '')
    return JSON.parse(info)
}

export default useUserInfo