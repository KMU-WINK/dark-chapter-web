import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";
import {useState} from "react";
import {useLocation} from "react-router";

const MyLog = () => {
    const location = useLocation();
    // console.log(location.state.title)
    const title = location.state.title;
    const content = location.state.content;
    const tagList = location.state.tag;
    const date = location.state.date


    const [depth, setDepth] = useState(2);
    let backgroundColor = "";
    let tagColor = "";
    let textColor = "";

    const background = ["#d1d9de","#96a1b1","#2c2d39"]
    const tag = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const text = ["#000","#fff","#fff"]

    backgroundColor = background[depth];
    tagColor = tag[depth];
    textColor = text[depth];

    const [palette,setPalette] = useState(true);

    const clickPalette = () => {
        if (palette) setPalette(false);
        else setPalette(true);
    }

    return <Wrap backgroundColor={backgroundColor}>
            <ContentHeader textColor={textColor} previousPage={'/myLogPage'} state={"share"}/>

            <Wrap2 onClick={()=>{clickPalette()}}>
                <PaletteCircle
                    width={240} height={240}
                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                    feeling={[28,14,21,7]}
                />
                {palette?
                    null
                    :
                    <SympathyCircle black={true} feeling={[40,30,20,10]}
                                        color={["#FF2036FF","#366197FF","#faaba4","#FFF890FF"]}
                                        backgroundColor={backgroundColor}
                    />
                }
            </Wrap2>
            <Wrap3>
                <LogContent seeMorePage={'/myLog/seeMore'} tagColor={tagColor} textColor={textColor}
                            title={title} tag={tagList}
                            timeStamp={date}
                            content={content}
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

