/** 简易版进度条 */

// react code
const reactCode = `
\`\`\`jsx
/** 简易版进度条 */
import './app.less'

const Progress = ({
    task = 0,
    finish = 0,
}) => {
    return <div className='prog_wrap'>
        <div className='prog'
            style={{
                width: \`\${task ? (finish >= task ? '100' : (finish / task * 100)) : '0'}%\`,
                transition: 'all .3s',
            }}
        ></div>
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

.prog_wrap {
    position: relative;
    max-width: 800px;
    height: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.06);
    overflow: hidden;

    .prog {
        width: 0%;
        height: 100%;
        border-radius: 5px;
        background-color: #1677ff;
        transition: all .3s;
    }
}
\`\`\`
`

export const progSimpleCodes = [reactCode, lessCode]