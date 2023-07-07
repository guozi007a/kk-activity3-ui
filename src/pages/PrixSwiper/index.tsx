/** 大奖轮播 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import { MdPreview } from 'md-editor-rt'
import PrixSwiperC, { ItemType } from '~/components/PrixSwiperC'

const datas: ItemType[] = [
    { userName: '迪丽热巴', awardName: '万物生*1' },
    { userName: '小明到底有几个亲兄弟呀', awardName: '爱的火山*1' },
    { userName: '张三又出来嚣张啦', awardName: '太空战舰*1' },
]

const usageJSX = `
\`\`\`jsx
import PrixSwiper from 'prix-swiper'

// jsx
return <>
    <div className='container'>
        <PrixSwiper 
            texts='在挖掘宝藏时获得'
            datas={datas}
        />
    </div>
</>
\`\`\`
`

const usageLESS = `
\`\`\`less
.container {
    width: 50rem;
    height: 4rem;
    background-image: linear-gradient(to right, #eec694, #ddaf73);
    box-sizing: border-box;
    border: 1px solid brown;
    border-radius: 1rem;
    margin: 2rem 0;
    line-height: 4rem;
    text-align: center;
}
\`\`\`
`

const PrixSwiper = () => {
    return <div className={styles.prix_swiper}>
        <Tiny.TinyTitle1 title='大奖轮播' />
        <Tiny.TinyText>
            为了提升用户在活动玩法中的荣耀感，在玩法中，通常会将获得大奖的用户以轮播的形式在头部展示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='前置提示' />
        <Tiny.TinyText>
            组件依赖<Tiny.TinyTag tag='swiper@6.8.4' />
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.container}>
            <PrixSwiperC
                texts='在挖掘宝藏时获得'
                datas={datas}
            />
        </div>
        <Tiny.TinyTitle2 title='控制器' />
        <Controller>
            <tbody>
                <tr>
                    <td>轮播数据</td>
                    <td>datas</td>
                    <td>ItemType[]</td>
                    <td>[]</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>恭喜文本</td>
                    <td>texts</td>
                    <td>string</td>
                    <td>''</td>
                    <td>-</td>
                    <td>示例：'在挖掘宝藏时获得'</td>
                </tr>
            </tbody>
        </Controller>
        <Tiny.TinyTitle2 title='如何使用' />
        <MdPreview
            modelValue={usageJSX}
            showCodeRowNumber={true}
        />
        <MdPreview
            modelValue={usageLESS}
            showCodeRowNumber={true}
        />
    </div>
}

export default PrixSwiper