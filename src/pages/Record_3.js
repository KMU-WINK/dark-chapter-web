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

//TO DO
//1. 미터 글씨 커지게 하기
//2. 남은 미터 띄워주기
//3. 심층에선 위로 올라가기 버튼


function Record_3() {
    const [isMove, setIsMove] = useState(false)
    const [nextMeter, setNextMeter] = useState(0);
    const [nextTextColor, setNextTextColor] = useState("#747474")
    const [goTop, setGoTop] = useState(false);
    const [category, setCategory] = useState(false)

    // 딱 10,000m 에서 멈추게 할라고 가장 바닥층 높이 설정.
    const bottomFloorHeight =window.innerHeight - 332

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
            setState({x:window.scrollX, y:window.scrollY});
        };
        useEffect(() => {
            window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
            return () =>window.removeEventListener("scroll", onScroll); // clean up
        }, []);
        return state;
    }
    const {y} = useScroll();

    useEffect(() => {
        console.log(window.scrollY)
        if (window.scrollY > 0) setIsMove(true)
        const target =document.getElementById("test")

        let tmp =Math.floor(target.getBoundingClientRect().y / -5 / 10) * 10

        if (tmp === 100) {

            setNextMeter(400)
            setNextTextColor("#747474")
            setGoTop(false)
        } else if (tmp >= 500) {

            setGoTop(true)
        } else if (100 < tmp <= 500) {

            setNextMeter(500 - tmp)
            setNextTextColor("#FFFFFF")
            setGoTop(false)
        }
        const equalCircle =document.getElementById(String(tmp))
        // console.log(equalCircle)
        for (let i = 0; i <= 10000; i += 10) {
            const notEqualCircle =document.getElementById(String(i))
            notEqualCircle.style.fontSize = "10px"
            notEqualCircle.style.marginTop = "6px"
        }

        equalCircle.style.fontSize = "16px"
        equalCircle.style.marginTop = "4px"
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

        <Wrap color={isMove ? "linear-gradient(#D2DADF 1%, #97A2B2 5%, #2C2C38 95%)" : "#F3F3ED"}>
            <Record_3_header flag={isMove} category={category} setCategory = {setCategory}/>
            <Space id="test"></Space>
            <Record_3_circle/>


            {/*<GroundColor/>*/}

            <MeterSpace>
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
            {category?
                <CategoryPopup category={category} setCategory ={setCategory}/>:null
            }
        </Wrap>
    )
}

const Space = styled.div`
    width : 100px;
    height : 211px;
`


const Wrap = styled.div`
    width : 100%;
    background : ${props => props.color};
    position: relative;
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
    color: ${props => props.color};

    opacity: 0.5;
`


export default Record_3;
