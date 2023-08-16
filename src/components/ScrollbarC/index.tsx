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
    // 滚动条背景色
    backgroundColor?: string
    // 横向滚动条的高度或者纵向滚动条的宽度，单位px
    thumbDim?: number
}

interface ThumbStyle {
    style: React.CSSProperties
}

interface ThumbType {
    width?: number
    height?: number
    backgroundColor?: string
    borderRadius?: number
}

const ScrollbarC = ({
    children,
    autoHide = true,
    autoHideDuration = 300,
    thumbSize,
    backgroundColor,
    thumbDim,
}: PropsConfig) => {

    const defaultHorTrack = {
        height: 6,
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3,
    }
    const defaultVerTrack = {
        width: 6,
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3,
    }

    const renderHorTrack = ({ style }: ThumbStyle) => {
        const o: Pick<ThumbType, 'height'> = {}
        if (thumbDim) {
            o.height = thumbDim
        }
        return <div style={{
            ...style,
            ...defaultHorTrack,
            ...o,
        }}></div>
    }
    const renderVerTrack = ({ style }: ThumbStyle) => {
        const o: Pick<ThumbType, 'width'> = {}
        if (thumbDim) {
            o.width = thumbDim
        }
        return <div style={{
            ...style,
            ...defaultVerTrack,
            ...o,
        }}></div>
    }

    const defaultThumb = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)',
    }

    const renderHorThumb = ({ style }: ThumbStyle) => {
        const o: Omit<ThumbType, 'width'> = {}
        if (backgroundColor) {
            o.backgroundColor = backgroundColor
        }
        if (thumbDim) {
            o.height = thumbDim
            o.borderRadius = Math.ceil(thumbDim / 2)
        }
        return <div style={{
            ...style,
            ...defaultThumb,
            ...o,
        }}></div>
    }
    const renderVerThumb = ({ style }: ThumbStyle) => {
        const o: Omit<ThumbType, 'height'> = {}
        if (backgroundColor) {
            o.backgroundColor = backgroundColor
        }
        if (thumbDim) {
            o.width = thumbDim
            o.borderRadius = Math.ceil(thumbDim / 2)
        }
        return <div style={{
            ...style,
            ...defaultThumb,
            ...o,
        }}></div>
    }
    return <Scrollbars
        autoHide={autoHide}
        autoHideDuration={autoHideDuration}
        thumbSize={thumbSize}
        renderTrackHorizontal={renderHorTrack}
        renderTrackVertical={renderVerTrack}
        renderThumbHorizontal={renderHorThumb}
        renderThumbVertical={renderVerThumb}
    >
        {children}
    </Scrollbars>
}

export default ScrollbarC