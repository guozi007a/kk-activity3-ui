/** 徽标数 */

// react code
const reactCode = `
\`\`\`jsx
/** 徽标数 */
import './app.less'

const Badge = ({
    count = 0,
    showZero = false,
    critical = 0,
    onlydot = false,
}) => {

    const cls = onlydot
        ? ''
        : critical
            ? count > critical
                ? (\`\${critical}+\`).length >= 3
                    ? 'multi'
                    : ''
                : count > 100
                    ? 'multi'
                    : ''
            : count > 100
                ? 'multi'
                : ''
    
    const Bridge = <span className='badge'>
        {
            onlydot
                ? null
                : <sup className={cls}>
                    {
                        critical
                            ? count > critical
                                ? \`\${critical}+\`
                                : count
                            : count
                    }
                </sup>
        }
    </span>

    return <>
        {
            count
                ? Bridge
                : showZero
                    ? Bridge
                    : null
        }
    </>
}

const App = () => {
    return <div className='app'>
        <Badge
            count={5}
            critical={99}
        />
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less

.app {
    position: relative;
    width: 60px;
    height: 60px;
    background-color: rgb(0 0 0 / 25%);
    border-radius: 6px;
    margin: 20px 0;
}

/*************** 徽标样式 *******************/

.badge {
    position: absolute;
    z-index: 1;
    top: -10px;
    right: -10px;
    display: inline-block;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    background-color: #ff4d4f;
    font-size: 14px;
    box-sizing: border-box;

    sup {
        &.multi {
            padding: 0 6px;
        }
    }
}
\`\`\`
`

export const badgeCodes = [reactCode, lessCode]