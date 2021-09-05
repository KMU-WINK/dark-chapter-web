import React, {useEffect} from 'react';
import styled from "styled-components";
import back from "../svg/record_3_background.svg"
import hr_group from "../svg/black_scale_group.svg"
import circle from "../svg/record_3_circle.svg"
import white_hr from "../svg/white_hr.svg"

import "../fonts/fonts.css"

//TO DO
//1. 미터 글씨 커지게 하기
//2. 남은 미터 띄워주기
//3. 심층에선 위로 올라가기 버튼


function Record_3(){


    useEffect(() => {
        console.log(window.scrollY)
    },[])

    const hrRendering = () => {
        const result = [];
        let meter = 0;
        for(let i= 0;i < 1001; i++){
            if (meter <= 90){
                console.log("black")
                result.push(<MeterWrap className="jejugothic">

                        <Scale/>
                        <MeterText>{meter}m</MeterText>
                    </MeterWrap >
                )
            }
            else{
                console.log("white")
                result.push(<MeterWrap className="jejugothic">

                        <WhiteScale/>
                        <MeterText>{meter}m</MeterText>
                    </MeterWrap>
                )
            }
            meter += 10
        }
        return result

    }
    // const target = document.getElementById("test")
    // console.log(target.getBoundingClientRect().top)

    return(
        <Wrap>
            <Space id="test"></Space>
            <Div>
                <Circle/>
            </Div>
            {/*<GroundColor/>*/}

            <MeterSpace>
                {hrRendering()}
            </MeterSpace>

        </Wrap>
    )
}

const Space = styled.div`
    width : 100%;
    height : 267px;
`

const Wrap = styled.div`
    width : 360px;
    height : fit-content; 
    background : linear-gradient(#D2DADF 1%, #97A2B2 5%, #2C2C38 );
`


const GroundColor = styled.img.attrs({
    src: back
})`
`

const Scale = styled.img.attrs({
    src:hr_group
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

const MeterSpace = styled.div`
    margin-top: 80px;
`

const MeterWrap = styled.div`
    display:flex;
    align-items: flex-start;
    
`

const MeterText = styled.span`
    margin-left : 4px;
    margin-top : 6px;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    
    color: #FFFFFF;
    
    opacity: 0.5;
`

const Div = styled.div`
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX( -50% ); 
    height: 56px;
    margin-left: 100px;
`

const Circle = styled.img.attrs({
    src: circle
})`
    
`

export default Record_3;
