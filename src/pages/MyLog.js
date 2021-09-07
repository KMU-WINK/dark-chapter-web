import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";
import {useState} from "react";

const MyLog = () => {
    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

    const [palette,setPalette] = useState(true)

    const clickPalette = () => {
        if (palette) setPalette(false);
        else setPalette(true);
    }

    return <Wrap backgroundColor={backgroundColor[2]}>
            <ContentHeader textColor={textColor[2]} previousPage={'/myLogPage'}/>

            <Wrap2 onClick={()=>{clickPalette()}}>
                <PaletteCircle
                    width={240} height={240}
                    deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                    feeling={[20,10,20,50]}
                />
                {palette?
                    null
                    :
                    <>
                        <SympathyCircle black={true} feeling={[40,30,20,10]} color={["#FF2036FF","#366197FF","#faaba4","#FFF890FF"]} backgroundColor={backgroundColor[2]} />
                    </>
                }
            </Wrap2>

            <LogContent seeMorePage={'/myLog/seeMore'} tagColor={tagColor[2]} textColor={textColor[2]}/>
    </Wrap>
}

export default MyLog

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props=>props.backgroundColor};
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 97px;
`

