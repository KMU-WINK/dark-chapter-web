import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import MyLogFloor from "../component/MyLog/MyLogFloor";
import MyLogHeader from "../component/MyLog/MyLogHeader";
import MyLogBottomFloor from "../component/MyLog/MyLogBottomFloor";
import scale from "../svg/hr_group.svg"





function MyLogPage(){

    const hrRendering = () => {
        const result = [];
        for(let i= 0;i < 150; i++){
            result.push(<Scale/>)
        }
        return result

    }

    // 임의로 정한 흑역사 층별 데이터 개수
    const firstFloor = 7
    const secondFloor = 14
    const thirdFloor = 4

    // 눈금 영역 height
    let height = 1320;
    if (firstFloor > 3) height += 130* (firstFloor-3)
    if (secondFloor > 3) height += 130* (secondFloor-3)
    if (thirdFloor > 3) height += 130* (thirdFloor-3)

    return(
        <Div>

            {/* num은 이 페이지가 흑역사 하나당 높이가 130px인데 기본적으로 층별로 흑역사 3개의 높이는 차지하고 있어야 되가지고
                num으로 흑역사가 몇개인지 넘겨줘서 3개 미만이면 height : 440px 아니면 auto로 줄라고 넣은겁니다.
             */}

            <MyLogHeader/>
            <br/>
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
            <MyLogFloor num={thirdFloor}color={"white"} bodyTextColor = {"#DCDCDC"} backgroundTop={"#2C2C38"} backgroundBottom={"#2C2C38"} floor={"심충"}/>
            <MyLogBottomFloor color={"white"} background={"#2C2C38"} floor={"바닥층"}/>
        </Div>
    )
}

const Div = styled.div`
    background:#D2DADF;
    width : 360px;

`

const Scale = styled.img.attrs({
    src:scale
})`
    display:block;
    margin-top:10px;
`
const ScaleWrap = styled.div`
    height : ${props=>props.height}px;
    width:10px;
    position: absolute;
    top: 154px;
    overflow:hidden;
`


export default MyLogPage
