import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";

import background_1 from "../svg/walk_through_1.svg"
import background_2 from "../svg/walk_through_2.svg";
import background_3 from "../svg/walk_through_3.svg";

import WalkThoughText from "../component/walk-through/WalkThoughText";
import Step from "../component/walk-through/Step";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const WalkThrough_1 = () => {
    const [currentSlide, setSlide] = useState(0)
    const [currentIdx, setIdx] = useState(0)


    const handleAfterChange = index => {
        console.log("after change", index);
        setSlide(index)
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: function(currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
            setIdx(nextSlide)
        },
        afterChange: handleAfterChange

    };
    const text1 = ["흑역사도", "흑역사에 대한 감정도", "털어내봐요."]
    const text2 = ["흑역사에 담긴 감정을 모아", "깊이", "빠뜨려요."]
    const text3 = ["비록, 흑역사일지라도", "저희가 함께", "잘해 드릴게요."]

    const step = [[1,0.5,0.5], [0.5,1,0.5], [0.5,0.5,1]]

    const a = "13"

    return (

        <Container id="qq">
            <Step step={step[currentIdx]}/>
            <Slider {...settings}>
                <Wrap bg={background_1} id="first">
                    <WalkThoughText text={text1}/>
                    <Img1/>

                </Wrap>

                <Wrap bg={background_2}>
                    <WalkThoughText text={text2}/>
                    <Img2/>
                </Wrap>

                <Wrap bg={background_3}>
                    <WalkThoughText text={text3}/>
                    <Img3/>
                </Wrap>
            </Slider>
        </Container>

    )
}

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Img1 = styled.img.attrs({
    src:background_1
})`
    width: 100%;
    
    position: absolute;
    bottom:0
`

const Img2 = styled.img.attrs({
    src:background_2
})`
    width: 100%;
    
    position: absolute;
    bottom:0
    
`

const Img3 = styled.img.attrs({
    src:background_3
})`
    width: 100%;
    position: absolute;
    bottom: 0;
`

const Container = styled.div`
    background: #2C2C38;
    width:100%;
    height: 100vh;
`





export default WalkThrough_1
