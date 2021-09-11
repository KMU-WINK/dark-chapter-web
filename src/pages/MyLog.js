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

    return <Wrap backgroundColor={backgroundColor[0]}>
            <ContentHeader textColor={textColor[0]} previousPage={'/myLogPage'}/>

            <Wrap2 onClick={()=>{clickPalette()}}>
                <PaletteCircle
                    width={240} height={240}
                    deg={["14% 14%", "14% 86%", "86% 14%", "86% 86%"]}
                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                    feeling={[28,14,21,7]}
                />
                {palette?
                    null
                    :
                    <>
                        <SympathyCircle black={true} feeling={[40,30,20,10]}
                                        color={["#FF2036FF","#366197FF","#faaba4","#FFF890FF"]}
                                        backgroundColor={backgroundColor[0]} />
                    </>
                }
            </Wrap2>
            <Wrap3>
                <LogContent seeMorePage={'/myLog/seeMore'} tagColor={tagColor[0]} textColor={textColor[0]}
                            title={"myLog의 title"} tag={["# 나의 기록","# 해시태그"]}
                            timeStamp={"2021-05-21"}
                            content={"myLog의 content"}
                />
            </Wrap3>
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

const Wrap3 = styled.div`
    margin-top : 300px;
`

