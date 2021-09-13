import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";
import {useState} from "react";
import {useLocation} from "react-router-dom";

const MyLog = (props) => {
    const location = useLocation();
    console.log(location);
    const [depth, setDepth] = useState(location.state.depth);
    const background = ["#d1d9de","#96a1b1","#2c2d39"]
    const tag = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const text = ["#000","#fff","#fff"]

    let backgroundColor = background[depth];
    let tagColor = tag[depth];
    let textColor = text[depth];

    const SetCircle = (props) => {
        let feeling = [];
        let color = [];

        if (props.data.angry>0) {
            feeling.push(props.data.angry);
            color.push("#FE4E62");
        }
        if (props.data.shameful>0) {
            feeling.push(props.data.shameful);
            color.push("#FFF9D9");
        }
        if (props.data.gloomy>0) {
            feeling.push(props.data.gloomy);
            color.push("#466598");
        }
        if (props.data.funny>0) {
            feeling.push(props.data.funny);
            color.push("#FDADA6");
        }
        return <PaletteCircle
            width={240} height={240}
            color={color}
            feeling={feeling}
        />
    }

    const [palette,setPalette] = useState(true);

    const clickPalette = () => {
        if (palette) setPalette(false);
        else setPalette(true);
    }

    return <Wrap backgroundColor={backgroundColor}>
            <ContentHeader textColor={textColor} previousPage={'/myLogPage'} state={"share"} boardId={location.state.state._id}/>

            <Wrap2 onClick={()=>{clickPalette()}}>
                <SetCircle data={location.state.state}/>
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
                <LogContent seeMorePage={'/myLog/seeMore'} tagColor={tagColor} textColor={textColor} depth={depth}
                            title={location.state.state.title} tag={location.state.state.tag}
                            timeStamp={location.state.state.createdAt.split('T')[0]}
                            content={location.state.state.content}
                            data={location.state.state}
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

