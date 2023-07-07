/** 大奖轮播 */
import styles from './index.module.scss'
// swiper@6.8.4
import { Swiper, SwiperSlide } from 'swiper/react' // 引入js
import SwiperCore, { Autoplay } from 'swiper/core'
import 'swiper/swiper.min.css' // 引入样式

SwiperCore.use([Autoplay])

export interface ItemType {
    userName: string
    awardName: string
}

interface PropType {
    datas?: ItemType[]
    texts: string
}

const PrixSwiperC = ({
    datas = [],
    texts = '',
}: PropType) => {
    return <div className={styles.prix_swiper}>
        <Swiper
            autoplay
            loop
            direction="vertical"
            observer
            observeParents
            observeSlideChildren
            style={{height: '100%'}}
        >
            {
                datas && datas.map((item, index) => {
                    return <SwiperSlide key={index}>
                        恭喜<span className={styles.report_name}>{item.userName}</span>{texts}<span>{item.awardName}</span>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </div>
}

export default PrixSwiperC