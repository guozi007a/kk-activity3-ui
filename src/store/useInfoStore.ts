import { create } from "zustand";

interface InfoType {
    username?: string
    avatar_url?: string
    access: boolean
    isRefresh?: boolean
}

interface InfoStore {
    userInfo: InfoType
    setUserInfo: (info?: InfoType) => void
}

const initInfo: InfoType = {
    username: "",
    avatar_url: "",
    access: false,
    isRefresh: false,
}

export const useInfoStore = create<InfoStore>(set => ({
    userInfo: initInfo,
    setUserInfo: (info = initInfo) => set({ userInfo: info })
}))