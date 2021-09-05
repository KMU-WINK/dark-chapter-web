import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import MyLogFloor from "../component/MyLog/MyLogFloor";
import MyLogHeader from "../component/MyLog/MyLogHeader";
import MyLogBottomFloor from "../component/MyLog/MyLogBottomFloor";
import scale from "../svg/black_scale_group.svg"
import white_hr from "../svg/white_scale_group.svg"





function MyLogPage(){


    // 임의로 정한 흑역사 층별 데이터 개수
    const firstFloor = 4
    const secondFloor = 5
    const thirdFloor = 8

    const total = firstFloor + secondFloor + thirdFloor;
    const firstPct = firstFloor/total * 100-10;
    const secondPct = secondFloor/total * 100-30;
    const thirdPct = thirdFloor/total * 100;
    // const firstPct=10
    // const secondPct=20
    // const thirdPct=30

    console.log(firstPct)
    console.log(secondPct)
    console.log(thirdPct)


    let checkFirst = 0;
    // 눈금 영역 height
    let height = 1320;
    if (firstFloor > 3) {
        height += 130* (firstFloor)
        checkFirst=firstFloor*2
    }
    else checkFirst = 7
    if (secondFloor > 3) height += 130* (secondFloor)
    if (thirdFloor > 3) height += 130* (thirdFloor)

    console.log(checkFirst)

    const hrRendering = () => {
        const result = [];
        for(let i= 0;i < 1001; i++){
            if(checkFirst>=0){
                result.push(<Scale/>)
                checkFirst -= 1
            }
            else{
                result.push(<WhiteScale/>)
            }

        }
        return result
    }



    return(
        <Div
            first={firstPct}
            second={secondPct}
            third={thirdPct}
        >

            {/* num은 이 페이지가 흑역사 하나당 높이가 130px인데 기본적으로 층별로 흑역사 3개의 높이는 차지하고 있어야 되가지고
                num으로 흑역사가 몇개인지 넘겨줘서 3개 미만이면 height : 440px 아니면 auto로 줄라고 넣은겁니다.
             */}

            <MyLogHeader/>
            <div
                style={{
                    width:"100%",
                    height: 14
                }}
            ></div>
            <div style={{position:"relative"}}>
                <ScaleWrap height={height}>
                    {hrRendering()}
                </ScaleWrap>
                <MyLogFloor
                    color={"black"}
                    bodyTextColor = {"#747474"}
                    backgroundTop={"#D2DADF"} backgroundBottom={"#97A2B2"}
                    floor={"상충"}
                    num={firstFloor}
                />
                <MyLogFloor
                    color={"white"}
                    bodyTextColor = {"#DCDCDC"}
                    backgroundTop={"#97A2B2"}
                    backgroundBottom={"#2C2C38"}
                    floor={"중충"}
                    num={secondFloor}
                />
                <MyLogFloor
                    num={thirdFloor}
                    color={"white"}
                    bodyTextColor = {"#DCDCDC"}
                    backgroundTop={"#2C2C38"}
                    backgroundBottom={"#2C2C38"}
                    floor={"심충"}/>
                <MyLogBottomFloor
                    color={"white"}
                    background={"#2C2C38"}
                    floor={"바닥층"}/>
            </div>

        </Div>
    )
}

const Div = styled.div`
    
    width : 360px;
    background : #D2DADF
    
`

const Scale = styled.img.attrs({
    src:scale
})`
    display:block;
    margin-top:10px;
`

const WhiteScale = styled.img.attrs({
    src:white_hr
})`
    display:block;
    margin-top:10px;
`
const ScaleWrap = styled.div`
    height : 100%-161px;
    position: absolute;
    top: 104px;
    overflow:hidden;
    
`


export default MyLogPage
