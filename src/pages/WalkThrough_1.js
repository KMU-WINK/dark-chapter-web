import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";

import background_1 from "../svg/walk_through_1.svg"
import background_2 from "../svg/walk_through_2.svg";
import WalkThoughText from "../component/walk-through/WalkThoughText";
import Step from "../component/walk-through/Step";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WalkThrough_2 from "./WalkThrough_2";

const WalkThrough_1 = () => {
    const [currentSlide, setSlide] = useState(0)
    const [currentIdx, setIdx] = useState(0)


    const handleAfterChange = index => {
        console.log("after change", index);
        setSlide(index)
    };

    const settings = {
        dots: true,
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



    return (

        <Container>
            <Step step={step[currentIdx]}/>
            <Slider {...settings}>
                <Wrap>
                    <WalkThoughText text={text1}/>
                    <Img1/>
                </Wrap>

                <Wrap>
                    <WalkThoughText text={text2}/>
                    <Img2/>
                </Wrap>

                <Wrap>
                    <WalkThoughText text={text3}/>
                    <Img2/>
                </Wrap>
            </Slider>
        </Container>

    )
}


const Container = styled.div`
    background: #2C2C38;
`

const Wrap = styled.div`
    height: 100vh;
    width: 100%;
    position: relative
`

const Img1 = styled.img.attrs({
    src: background_1
})`
    width: 100%/3;
    height: 100vh;
    position: fixed;
    bottom: 0
`
const Img2 = styled.img.attrs({
    src: background_2
})`
    width: 100%/3;
    height: 100vh;
    position: fixed;
    bottom: 0
`
// const Img1 = styled.img.attrs({
//     src: background_img
// })`
//     width: 100%;
//     height: 100vh;
//     position: fixed;
//     bottom: 0
// `

export default WalkThrough_1
