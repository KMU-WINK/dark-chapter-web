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
import WalkThrough_2 from "./WalkThrough_2";

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



    return (

        <Container id="qq">
            <Step step={step[currentIdx]}/>
            <Slider {...settings}>
                {/*<div style={{}}>*/}
                {/*    <h3>1</h3>*/}
                {/*</div >*/}
                {/*<div style={{}}>*/}
                {/*    <h3>2</h3>*/}
                {/*</div>*/}
                {/*<div style={{}}>*/}
                {/*    <h3>3</h3>*/}
                {/*</div>*/}
                <Wrap>
                    <WalkThoughText text={text1}/>
                    <div style={{position: "absolute", bottom:0, width: "100%"}}>
                        <Wave/>

                    </div>
                    {/*<Img1/>*/}
                </Wrap>

                <Wrap>
                    <WalkThoughText text={text2}/>
                    {/*<Img2/>*/}
                </Wrap>

                <Wrap>
                    <WalkThoughText text={text3}/>
                    {/*<Img3/>*/}
                </Wrap>
            </Slider>
        </Container>

    )
}


const Container = styled.div`
    background: #2C2C38;
    width:100%;
    height: 100vh;
`

const Wrap = styled(Container)`
    position: relative;
`

const Wave = styled.div`
  position: relative;
  bottom: 0;
  height: 300px;
  width: 100%;
  background: black;
  
  
  
  &::before {
    content: "";
      display: block;
      position: absolute;
      border-radius: 100% 50%;
      width: 80%;
      height: 200px;
      background-color: black;
      right: -140px;
      top: -60px;
      border-top: 1px solid white
      
  };
  
  &::after {
    content: "";
  display: block;
  position: absolute;
  border-radius: 60% 50%;
  width: 90%;
  height: 240px;
  background-color: #2C2C38;
  left: -58px;
  top: -200px;
  border-bottom: 1px solid white
  
  }
`



export default WalkThrough_1
