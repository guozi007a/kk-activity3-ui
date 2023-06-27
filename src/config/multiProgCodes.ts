/** 多阶段任务进度 */

// react code
const reactCode = `
\`\`\`jsx
import './app.less'

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|ipad/i.test(navigator.userAgent);
const UNIT = isMobile ? 'rem' : 'px'

const App = ({
    taskList = [],
    finish = 0,
    left = [],
    width = 0,
}) => {
    
    // 获取进度
    const getRate = () => {
        if (!taskList || !taskList.length || !left || !left.length || taskList.length !== left.length || !finish || !width) return 0

        if (finish >= taskList[taskList.length - 1]) return 1

        // 核心逻辑
        for (let i = 0; i < taskList.length; i++) {
            if (finish < taskList[i]) {
                if (i === 0) {
                    return (finish / taskList[0]) * (left[0] / width)
                } else {
                    return (left[i - 1] / width) + ((finish - taskList[i - 1]) / (taskList[i] - taskList[i - 1])) * ((left[i] - left[i - 1]) / width)
                }
            }
        }
    }

    return <div className='prog_multi' style={{width: \`\${width}\${UNIT}\`}}>
        <div className='prog'
            style={{
                width: \`\${getRate() * 100}%\`,
                transition: 'all .3s',
            }}
        ></div>
        {
            taskList && taskList.length > 1 &&
            left && (left.length === taskList.length) &&
            taskList.map((v, i) => {
                return <div key={i}
                    className={\`award \${finish >= v ? 'active' : ''}\`}
                    style={{
                        left: \`\${left[i]}\${UNIT}\`,
                    }}
                ></div>
            })
        }
    </div>
}
export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less
.prog_multi {
    position: relative;
    height: 10px;
    border-radius: 5px;
    background-color: var(--gray-2);

    .prog {
        position: relative;
        width: 0%;
        height: 100%;
        border-radius: 5px;
        background-color: var(--red-1);
        transition: all .3s;
    }

    @keyframes shake {
        0% {}
        25% {transform: rotate(5deg);}
        50% {transform: rotate(0deg);}
        75% {transform: rotate(-5deg);}
        100% {transform: rotate(0deg);}
    }

    .award {
        position: absolute;
        z-index: 1;
        bottom: -2px;
        width: 30px;
        height: 29px;
        background: url('https://rescdn.kktv8.com/kk-web-res/activity3/play_2368/b-page1-qianjingeshu-moren.png') center center no-repeat;
        background-size: 100% 100%;

        &.active {
            background-image: url('https://rescdn.kktv8.com/kk-web-res/activity3/play_2368/b-page1-qianjingeshu-keling.png');
            animation: shake .3s infinite;
            cursor: pointer;
        }
    }
}
\`\`\`
`

export const multiProgCodes = [reactCode, lessCode]