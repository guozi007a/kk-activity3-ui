/** 函数式弹出框 
 * 在任意位置都可以函数式调用
 * 调用后渲染在容器中并展示出来
 * 渲染同一个组件的弹出框具有唯一性
*/
import { createRoot } from 'react-dom/client'
import Modal, { ConfigType } from './Modal'

let dialogId = 0

export function dialog(Comp?: React.ReactNode | React.FC, config?: ConfigType) {
    const div = document.createElement('div')
    const dialogRoot = createRoot(div, {
        // 设置唯一标识，防止冲突
        identifierPrefix: 'KK__DIALOG__' + dialogId,
    })
    // 此处需要调用bind绑定dialogRoot，以免在传递closeFn方法时丢失this而报错
    // const closeFn = dialogRoot.unmount.bind(dialogRoot) 

    dialogRoot.render(
        <Modal Comp={Comp}
            // 这种传值方式需要按照上述方式使用bind进行绑定，以免丢失this
            // closeFn={closeFn}

            // 这种传值方式就不需要使用bind进行绑定
            // closeFn={() => {dialogRoot.unmount()}}

            // 使用unmount方法，不能卸载外层的div容器层，所以这里要使用原生的remove方法
            closeFn={() => { div.remove() }}
            config={config}
        />
    )
    document.body.appendChild(div)

    dialogId++

    // 弹出框是全局形式的，不会自动关闭
    // 调用dialog方法时，会返回一个关闭弹出框的方法，用于关闭弹出框
    return () => { div.remove() }
}