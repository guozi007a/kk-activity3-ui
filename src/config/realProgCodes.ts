/** 显示实时进度 */

// react code
const reactCode = `
\`\`\`jsx
import './app.less'

const Progress = ({
    task = 0,
    finish = 0,
}) => {

    const rate = \`\${task ? (finish >= task ? '100' : (finish / task * 100)) : '0'}%\`

    return <div className='real_prog'>
        <div className='prog'
            style={{
                width: rate,
                transition: 'all .3s'
            }}
        >
            <div className='accompany'>{rate}</div>
        </div>
    </div>
}

const App = () => {
    return <div className='app'>
        <Progress
            task={100}
            finish={20}
        />
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less
.real_prog {
    position: relative;
    max-width: 800px;
    height: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.06);

    .prog {
        position: relative;
        width: 0%;
        height: 100%;
        border-radius: 5px;
        background-color: #1677ff;
        transition: all .3s;

        .accompany {
            position: absolute;
            z-index: 1;
            top: calc(100% + 4px);
            right: -20px;
            width: 40px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            box-shadow: 0 0 2px 1px #4096ff;
            border-radius: 6px;
            color: #1677ff;
            font-size: 14px;
        }
    }
}
\`\`\`
`

export const realProgCodes = [reactCode, lessCode]