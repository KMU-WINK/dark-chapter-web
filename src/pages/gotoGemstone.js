import styled, {keyframes} from "styled-components";
import GemstoneCircle from "../component/circle/GemstoneCircle";
import React from "react";

const GotoGemstone = () => {
    const gemstone = () =>{
        window.location.href ='/gemstone'
    }

    return <Wrap onClick={gemstone} className={"jejugothic"}>
        <Wrap2>
        <GemstoneCircle
            size={240}
            sympathyFeeling={[50,30,27,20]}
            sympathyColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
            black={false}

            width={240} height={240}
            deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
            paletteColor={["#FF2036FF","#366197FF","#FFF890FF","#faaba4"]}
            paletteFeeling={[40,10,30,20]}
        />
        </Wrap2>
        <ClickMessage>화면을 터치해주세요!</ClickMessage>
    </Wrap>
}

export default GotoGemstone;

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
`

const Wrap2 = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display : flex;
  justify-content: center;
  padding-top: 240px;
  animation: ${FadeIn} 3s;
`

const TextFadeIn = keyframes`
  0% { 
  opacity: 0;
  transform: translateY(20px);
  }
  100% {
  opacity: 1;
  transform: none;
  }
`

const ClickMessage = styled.div`
  position: absolute;
  top: 530px;
  left: 106px;
  width: 100%;
  color: black;
  animation: ${TextFadeIn} 3s;
`
