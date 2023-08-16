import Scrollbars from 'react-custom-scrollbars-2'

interface PropsConfig {
    // 滚动区内容
    children?: React.ReactNode
    // 不滚动时，自动隐藏滚动条，默认true
    autoHide?: boolean
    // 隐藏动画持续时间，单位ms，默认300
    autoHideDuration?: number
    // 纵向滚动条的高度，或者横向滚动条的宽度，单位px
    thumbSize?: number
    // 滚动条style样式
    thumbStyle?: React.CSSProperties
}

interface ThumbStyle {
    style: React.CSSProperties
}

const ScrollbarC = ({
    children,
    autoHide = true,
    autoHideDuration = 300,
    thumbSize,
    thumbStyle,
}: PropsConfig) => {

    const renderThumb = ({ style }: ThumbStyle) => {
        return <div style={{ ...style, ...thumbStyle }}></div>
    }
    return <Scrollbars
        autoHide={autoHide}
        autoHideDuration={autoHideDuration}
        thumbSize={thumbSize}
        renderThumbHorizontal={thumbStyle && renderThumb}
        renderThumbVertical={thumbStyle && renderThumb}
    >
        {children}
    </Scrollbars>
}

export default ScrollbarC