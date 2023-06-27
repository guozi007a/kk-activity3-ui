/** 切换型徽标 */

// react code
const reactCode = `
\`\`\`jsx
import './app.less'

const Badge = ({ isVisible }) => {
    return <>
        {
            isVisible
                ? <div className={styles.switch_badge}></div>
                : null
        }
    </>
}   

const App = () => {
    return <div className='app'>
        <Badge isVisible={false} />
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less
.switch_badge {
    position: absolute;
    z-index: 1;
    top: -8px;
    right: -8px;
    width: 18px;
    height: 18px;
    .setbg('r-icon.png');
}
\`\`\`
`

export const switchBadgeCodes = [reactCode, lessCode]