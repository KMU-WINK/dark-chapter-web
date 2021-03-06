import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import hr_group from "../svg/black_scale_group.svg"
import white_hr from "../svg/white_scale_group.svg"

import "../fonts/fonts.css"
import Record_3_nextFloor from "../component/Record_3_nextFloor";
import Record_3_goTop from "../component/Record_3_goTop";
import Record_3_header from "../component/Record_3_header";
import Record_3_circle from "../component/Record_3_circle";
import Record_3_bottom from "../component/Record_3_bottom";

import white_scale from "../svg/white_scale.svg"
import CategoryPopup from "../component/PopUp/CategoryPopup";
import {useHistory} from "react-router";

//TO DO
//1. 미터 글씨 커지게 하기
//2. 남은 미터 띄워주기
//3. 심층에선 위로 올라가기 버튼


function Record_3(props) {
    const history = useHistory();
    // console.log(props.history.location.state)
    const [isMove, setIsMove] = useState(false);
    const [isHundred, setIsHundred] = useState(false);
    const [nextMeter, setNextMeter] = useState(0);
    const [nextTextColor, setNextTextColor] = useState("#747474")
    const [goTop, setGoTop] = useState(false);
    const [category, setCategory] = useState(false)
    const [complete, setComplete] = useState(false)
    const [state, setState] = useState('')
    // 딱 10,000m 에서 멈추게 할라고 가장 바닥층 높이 설정.
    const bottomFloorHeight = window.innerHeight - 332
    const [crrnt, setCrrnt] = useState(0);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const useScroll = () => {
        const [state, setState] = useState({
            x: 0,
            y: 0
        });
        const onScroll = () => {
            setState({x: window.scrollX, y: window.scrollY});
        };
        useEffect(() => {
            window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
            return () => window.removeEventListener("scroll", onScroll); // clean up
        }, []);
        return state;
    }
    const {y} = useScroll();

    useEffect(() => {
        setState(props.history.location)
        if (window.scrollY > 0) setIsMove(true)
        const target = document.getElementById("test")

        let tmp = Math.floor(target.getBoundingClientRect().y / 5 / 10) * 10

        setCrrnt(tmp)


        if(tmp<100){
            setIsHundred(false)
            setNextMeter(100 - tmp)
            setNextTextColor("#747474")
        }
        else if(tmp >= 500){
            setGoTop(true)
            setNextTextColor("#FFFFFF")
            setIsHundred(true)
        }
        else if(100 <= tmp <= 500){
            setNextMeter(500 - tmp)
            setNextTextColor("#FFFFFF")
            setGoTop(false)
            setIsHundred(true)
        }


        // console.log(tmp)
        if(tmp<=10000 && tmp <= 0){

            for (let i = 0; i <= 10000; i += 10) {
                const notEqualCircle = document.getElementById(String(i))
                notEqualCircle.style.fontSize = "10px"
                notEqualCircle.style.marginTop = "6px"
            }
            const equalCircle = document.getElementById(String(tmp*-1))

            equalCircle.style.fontSize = "16px"
            equalCircle.style.marginTop = "4px"
        }
        else{
            const dd = document.getElementById("10000")
            dd.style.fontSize = "16px";
            dd.style.marginTop = "4px";
            // console.log(dd)
        }

    }, [y])


    const hrRendering = () => {
        const result = [];
        let meter = 0;
        for (let i = 0; i < 1000; i++) {

            if (meter <= 90) {
                result.push(
                    <MeterWrap className="jejugothic">
                        <Scale/>
                        <MeterText
                            id={meter}
                            color="#747474"
                        >{meter}m</MeterText>
                    </MeterWrap>
                )
            } else {
                result.push(
                    <MeterWrap className="jejugothic">
                        <WhiteScale/>
                        <MeterText
                            id={meter}
                            color="#FFFFFF"
                        >{meter}m</MeterText>
                    </MeterWrap>
                )
            }
            meter += 10
        }
        result.push(<MeterWrap>
            <WhiteHr/>
            <MeterText
                id="10000"
                color='#FFFFFF'
            >
                10000m
            </MeterText>
        </MeterWrap>)
        return result

    }
    return (

        <Wrap Wrap color={isMove ? "linear-gradient(#D2DADF 1%,#D2DADF 1%, #97A2B2 3%,#97A2B2 3%, #2C2C38 7%, #2C2C38 85%)" : "#F3F3ED"}>
            <Record_3_header
                flag={isMove}
                category={category}
                setCategory={setCategory}
                isHundred={isHundred}
                location_data = {props.history.location.state}
            />
            <div id="ykgkg">
                {isMove ? null :
                    <TextDiv className="jejugothic">
                        <P>아래로 내려</P>
                        <P>수심을 설정해 주세요</P>
                    </TextDiv>}
                <Space id="test" height={window.innerHeight/2-80}></Space>
                <Record_3_circle emotion={[props.history.location.state.angry, props.history.location.state.shy, props.history.location.state.sad, props.history.location.state.laugh]}/>


                {/*<GroundColor/>*/}

                <MeterSpace id="retkpeor" height={document.documentElement.clientHeight-56}>
                    {hrRendering()}
                </MeterSpace>
                {isMove ?
                    goTop ?
                        <Record_3_goTop
                            click={goToTop}
                        />
                        :
                        <Record_3_nextFloor
                            meter={nextMeter}
                            textColor={nextTextColor}
                        />
                    :
                    null
                }
                <Record_3_bottom height={bottomFloorHeight}/>
                {category ?
                    <CategoryPopup category={category} setCategory={setCategory}
                    state={state} depth ={crrnt} root='record'
                    /> : null
                }
            </div>
        </Wrap>
    )
}

const Space = styled.div`
    width : 100px;
    height : ${props=>props.height}px;
`


const Wrap = styled.div`
    width : 100%;
    background : ${props => props.color};
    position: relative;
  isolation: isolate;
`

const TextDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 122px;
    text-align: center
`

const P = styled.p`
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.03em;
    
    color: rgba(0, 0, 0, 0.5);
`


const Scale = styled.img.attrs({
    src: hr_group
})`
    display:block;
    margin-top:10px;
`
const WhiteScale = styled.img.attrs({
    src: white_hr
})`
    display:block;
    margin-top:10px;
`
const WhiteHr = styled.img.attrs({
    src: white_scale
})`
    display:block;
    margin-top:10px;
`

const MeterSpace = styled.div`
    padding-top:80px;

    // transform: translateX(-50%)
`

const MeterWrap = styled.div`
    display:flex;
    align-items: flex-start;
    z-index: -1

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
    color: ${props => props.color};
    
    opacity: 0.5;
`


export default Record_3;
