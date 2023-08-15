import Scrollbars from 'react-custom-scrollbars-2'

interface PropsConfig {
    // 滚动区内容
    children?: React.ReactNode
    // 不滚动时，自动隐藏滚动条，默认true
    autoHide?: boolean
}

const ScrollbarC = ({
    children,
    autoHide = true,
}: PropsConfig) => {
    return <Scrollbars
        autoHide={autoHide}
    >
        {children}
    </Scrollbars>
}

export default ScrollbarC