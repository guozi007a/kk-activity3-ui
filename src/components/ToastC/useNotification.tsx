/** 轻提示逻辑层 */
import { useState, useEffect, useMemo } from "react";
import Notifications from "./Notifications";
import { NotificationsConfig, NotificationAPI, Task, mergeConfig } from "./toast.config";

// 默认的容器挂载点
const defaultContainer = document.body
// 提示的key值
let uniqueKey = 0

const useNotification = (rootConfig: NotificationsConfig = {}): [NotificationAPI, React.ReactElement] => {

    const {
        container = defaultContainer,
        position = 'center',
        ...otherConfig
    } = rootConfig

    const [taskQueue, setTaskQueue] = useState<Task[]>([])

    // 通知列表容器实例
    const contextHolder = (
        <Notifications
            container={container}
            position={position}
        />
    )

    // api 包括open close destroy方法
    const api = useMemo<NotificationAPI>(() => {
        return {
            // 调用open 会往提示任务列表中添加一条新的配置
            open: (config) => {
                const mergedConfig = mergeConfig(otherConfig, config)
                if (mergedConfig.key === null || mergedConfig.key === undefined) {
                    mergedConfig.key = uniqueKey
                    uniqueKey++
                }
                setTaskQueue((queue) => [...queue, { type: 'open', config: mergedConfig }])
            }
        }
    }, [])

    

    return [api, contextHolder]
}

export default useNotification