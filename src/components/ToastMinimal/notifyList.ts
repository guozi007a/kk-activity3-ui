/** 存储和更新通知列表 */
import { create } from "zustand";
import { NotifyProp } from "./interface.config";

interface NotifyList {
    notifyList?: NotifyProp[]
    addNotify?: (notify: NotifyProp) => void
    delNotify?: (key: React.Key) => void
    clearNotifys?: () => void
    setSyncNotifys?: (notifys: NotifyProp[]) => void
}
export const useNotifyList = create<NotifyList>(set => ({
    notifyList: [],
    addNotify: (notify) => set(state => ({ notifyList: [...state.notifyList!, notify] })),
    delNotify: (key) => set(state => ({ notifyList: (state.notifyList!).filter(v => v.key !== key) })),
    clearNotifys: () => set({ notifyList: [] }),
    setSyncNotifys: (notifys) => set({ notifyList: notifys })
}))