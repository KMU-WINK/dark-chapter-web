import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import baseService from "../axios/base-service";

const MyLog = (props) => {
    const location = useLocation();
    console.log(location);
    const [depth, setDepth] = useState(location.state.depth);
    const background = ["#d1d9de","#96a1b1","#2c2d39"]
    const tag = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const text = ["#000","#fff","#fff"]
    const [palette,setPalette] = useState(true);

    let backgroundColor = background[depth];
    let tagColor = tag[depth];
    let textColor = text[depth];

    const [sympathyFeel, setSympathyFeel] = useState([0,0,0,0]);
    const [sympathyColor, setSympathyColor] = useState(["#fe4e62","#466598","#fff9d9","#fdada6"]);

    useEffect(async() => {
        const GetSympathy = async() => {
            await baseService.get(`/sympathy/${location.state.state._id}`).then(
                result => {
                    console.log(result.data)
                    let symFeel = [0, 0, 0, 0];
                    for (let i = 0; i < result.data.length; i++) {
                        if (result.data[i].angry === 1) symFeel[0]++;
                        else if (result.data[i].gloomy === 1) symFeel[1]++;
                        else if (result.data[i].funny === 1) symFeel[2]++;
                        else if (result.data[i].shameful === 1) symFeel[3]++;
                    }

                    let feeling = [];
                    let color = [];

                    if (symFeel[0] > 0) {
                        feeling.push(symFeel[0]);
                        color.push("#fe4e62");
                    }
                    if (symFeel[1] > 0) {
                        feeling.push(symFeel[1]);
                        color.push("#466598");
                    }
                    if (symFeel[2] > 0) {
                        feeling.push(symFeel[2]);
                        color.push("#fff9d9");
                    }
                    if (symFeel[3] > 0) {
                        feeling.push(symFeel[3]);
                        color.push("#fdada6");
                    }
                    console.log(feeling);

                    let symFeeling = [];
                    let symColor = [];
                    for (let i = 0; i < feeling.length; i++) {
                        let maxSym = 0;
                        let maxIdx = -1;
                        for (let j = 0; j < feeling.length; j++) {
                            if (maxSym < feeling[j]) {
                                maxSym = feeling[j];
                                maxIdx = j;
                            }
                        }
                        feeling[maxIdx] = -1;
                        symFeeling.push(symFeel[maxIdx])
                        symColor.push(color[maxIdx])
                    }

                    setSympathyColor(symColor);
                    setSympathyFeel(symFeeling);
                }
            )
        }
        await GetSympathy();
        console.log(sympathyColor)
        console.log(sympathyFeel)
    },[])

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

    const clickPalette = () => {
        if (palette) setPalette(false);
        else setPalette(true);
    }

    return <Wrap backgroundColor={backgroundColor}>
        <ContentHeader textColor={textColor} previousPage={'/myLogPage'} state={"share"} boardId={location.state.state._id}/>

        <Wrap2 onClick={()=>{clickPalette()}}>
            <SetCircle data={location.state.state}/>
            {palette?
                <SetCircle data={location.state.state}/>
                :
                <SympathyCircle black={true}
                                feeling={sympathyFeel}
                                color={sympathyColor}
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

export default MyLog;

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

