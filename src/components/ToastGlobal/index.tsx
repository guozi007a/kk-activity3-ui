/** 全局轻提示 */
import { createRoot } from "react-dom/client";
import { POSITION, DURING, ToastType, OpenType } from './interface.config'
import Notify from "./Notify";

let uniqueKey = 0

const open: OpenType = (content, config) => {
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

export const toast: ToastType = {
    // 全局配置
    config: {
        during: DURING,
        position: POSITION,
    },
    default(content, localConfig) {
        open(content, { ...this.config, ...localConfig, type: 'default' })
    },
    info(content, localConfig) {
        open(content, { ...this.config, ...localConfig, type: 'info' })
    },
    sc(content, localConfig) {
        open(content, { ...this.config, ...localConfig, type: 'sc' })
    },
    err(content, localConfig) {
        open(content, { ...this.config, ...localConfig, type: 'err' })
    },
    warn(content, localConfig) {
        open(content, { ...this.config, ...localConfig, type: 'warn' })
    },
}

export const showToast = (content?: string | React.ReactNode) => {
    open(content, { type: 'default' })
}