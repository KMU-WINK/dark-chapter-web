import styled from "styled-components";
import GemstoneCircle from "../component/circle/GemstoneCircle";
import React from "react";

const GotoGemstone = () => {
    return <Wrap>
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
    </Wrap>
}

export default GotoGemstone;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display : flex;
  justify-content: center;
  padding-top: 240px;
`
