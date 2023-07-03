/** 全局轻提示 */
import { createRoot } from "react-dom/client";
import { NotifyProp, GlobalConfig } from './interface.config'
import Notify from "./Notify";

let uniqueKey = 0

const open = (content?: string | React.ReactNode, config?: NotifyProp) => {
    document.getElementById('__toast')?.remove()

    const div = document.createElement('div')
    div.setAttribute('id', '__toast')
    div.dataset.dataKey = `toast-${uniqueKey}`
    document.body.appendChild(div)

    const root = createRoot(div)
    root.render(
        <Notify
            content={content}
            dataKey={`toast-${uniqueKey}`}
            type={config?.type}
            during={config?.during}
            position={config?.position}
        />
    )

    uniqueKey++
}

export const toast = {
    // 全局配置
    config: {} as GlobalConfig,
    default(content?: string | React.ReactNode, localConfig?: GlobalConfig) {
        open(content, { type: 'default', ...this.config, ...localConfig })
    },
    info(content?: string | React.ReactNode, localConfig?: GlobalConfig) {
        open(content, { type: 'info', ...this.config, ...localConfig })
    },
    sc(content?: string | React.ReactNode, localConfig?: GlobalConfig) {
        open(content, { type: 'sc', ...this.config, ...localConfig })
    },
    err(content?: string | React.ReactNode, localConfig?: GlobalConfig) {
        open(content, { type: 'err', ...this.config, ...localConfig })
    },
    warn(content?: string | React.ReactNode, localConfig?: GlobalConfig) {
        open(content, { type: 'warn', ...this.config, ...localConfig })
    },
}

export const showToast = (content?: string | React.ReactNode) => {
    open(content, { type: 'default' })
}