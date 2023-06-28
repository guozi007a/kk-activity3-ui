/** 切换型徽标 */

// react code
const reactCode = `
\`\`\`jsx
import './app.less'
import { useState } from 'react'

const App = ({
    pageSize = 5,
    onPage,
    total = 0
}) => {

    const [current, setCurrent] = useState(1);

    const handlePre = () => {
        if (current <= 1) return
        setCurrent(current - 1)
    }

    const handleNext = () => {
        if (current >= Math.ceil(total / pageSize)) return
        setCurrent(current + 1)
    }

    useEffect(() => { 
        onPage && onPage(current)
    }, [current])

    return <div className={styles.turn_btns}>
        {
            current <= 1
                ? null
                : <div className='btn pre' onClick={handlePre}>上一页</div>
        }
        {
            current >= Math.ceil(total / pageSize)
                ? null
                : <div className='btn next' onClick={handleNext}>下一页</div>
        }
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less
.turn_btns {
    width: 100%;

    .btn {
        width: 120px;
        height: 40px;
        border-radius: 8px;
        background-image: linear-gradient(to right, #FFC4D7, #F35681);
        text-align: center;
        line-height: 40px;
        color: #fff;
        cursor: pointer;

        &.pre {
            float: left;
        }
        &.next {
            float: right;
        }
    }
}
\`\`\`
`

export const turnPageCodes = [reactCode, lessCode]