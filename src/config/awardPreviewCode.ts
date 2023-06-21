// react code
const reactCode = `
\`\`\`tsx
import React from 'react'
import './app.less'

const getImg = (url, id) => {
    if (url) return url
    if (id) return \`https://rescdn.kktv8.com/kktv/icon/web/gift/png_80/\${id}.png\`
    return ''
}

const previewList = [
    [
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
    ],
    [
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
        { name: '龙舟小队', url: '', id: 40003289 },
    ],
]

/** 
 * direction表示排列方式，默认为横排。传入'column'时，是竖排
 * count表示当列表礼物个数<=count个时，就居中排列。count = 5表示默认值为5
 */
const App = ({ direction, count = 5 }) => {
    return <div className="preview_container">
        <ul className={\`preview_ul \${direction ?? ''}\`}>
            {
                previewList.map((v, i) => {
                    return <li key={i} className={\`preview_li preview_li_\${i + 1}\`}>
                        <div className="preview_main">
                            <div className='preview_inner'>
                                <ul className={\`preview_item_ul \${v.length > count ? '' : 'center'}\`}>
                                    {
                                        v && v.map((item, index) => {
                                            return <li key={index} className={\`preview_item preview_item_\${index + 1}\`}>
                                                <div className='preview_img'>
                                                    <img src={getImg(item.url, item.id)} alt="" />
                                                </div>
                                                <p className='preview_name'>{item.name}</p>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
}

export default App
\`\`\`
`

const lessCode = `
\`\`\`less
.setbg(@url) {
	background-image: url('https://rescdn.kktv8.com/kk-web-res/activity3/play_2375/@{url}');
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
}

.preview_container {

    @height: 215px;
    @paddingTop: 64px;
    @space: 20px;

    .preview_ul {
        display: flex;
        justify-content: center;
        user-select: none;

        .preview_li {
            width: 458px;
            height: @height;
            box-sizing: border-box;
            padding-top: @paddingTop;
            margin-left: @space;

            &.preview_li_1 {
                margin-left: 0;
                margin-top: 0;
                .setbg('w-zhanshi1.png');
            }
            &.preview_li_2 {
                .setbg('w-zhanshi2.png');
            }

            .preview_main {
                box-sizing: border-box;
                padding: 0 30px;
                height: (@height - @paddingTop - 20px);

                .preview_inner {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    overflow-x: auto;

                    @bar-height: 10px;

                    &::-webkit-scrollbar,
                    &::-webkit-scrollbar-track {
                        height: @bar-height;
                        background-color: transparent;
                    }
                    &::-webkit-scrollbar-thumb {
                        height: @bar-height;
                        border-radius: (@bar-height / 2);
                        background-color: #FFC5EF;
                    }

                    .preview_item_ul {
                        min-width: 100%;
                        display: flex;
    
                        @img-width: 60px;
    
                        .preview_item {
                            margin-right: 20px;
                            min-width: @img-width;
                            flex-shrink: 0;
                            
                            .preview_img {
                                width: @img-width;
                                height: @img-width;
                                margin: auto;
                                border-radius: 50%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-color: #FFE9E9;
    
                                img {
                                    width: 100%;
                                }
                            }
    
                            .preview_name {
                                text-align: center;
                                font-size: 14px;
                                color: #843A27;
                                margin-top: 8px;
                            }
                        }

                        &.center {
                            justify-content: space-evenly;

                            .preview_item {
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }

        &.column {
            flex-direction: column;

            .preview_li {
                margin-left: 0;
                margin-top: @space;
            }
        }
    }
}
\`\`\`
`

export const awardCodes = [reactCode, lessCode]