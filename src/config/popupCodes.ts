/** 弹出框代码 */

// react code
const reactCode = `
\`\`\`jsx
import { createPortal } from "react-dom"
import './app.less'

const App = ({
    children,
    isOpen,
    onClose,
    isMaskClickEnable = true,
    isShowCloseIcon = true,
    closeIcon = 'icon-close1'
}) => {

    const Portal = (
        <div className='dialog'>
            <div className='mask' onClick={() => {
                isMaskClickEnable && onClose && onClose()
            }}></div>
            <div className='wrap'>
                {
                    isShowCloseIcon
                        ? <div className='x' onClick={onClose}>
                            <AliIcon icon={closeIcon} />
                        </div>
                        : null
                }
                {children}
            </div>
        </div>
    )

    return <>
        {
            isOpen
                ? createPortal(Portal, document.body)
                : null
        }
    </>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less

.dialog {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
    }

    .wrap {
        position: relative;

        .x {
            position: absolute;
            z-index: 1;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            svg {
                width: 50%;
                height: 50%;
            }

            &:hover {
                background-color: #f0f0f0;
            }
        }
    }
}
\`\`\`
`

export const popupCodes = [reactCode, lessCode]