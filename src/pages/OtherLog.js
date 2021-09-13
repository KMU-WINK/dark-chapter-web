import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import LogContent from "../component/content/LogContent";
import PaletteCircle from "../component/circle/PaletteCircle";
import OtherHeader from "../component/header/OtherHeader";
import SelectCategory from "../component/content/SelectCategory";
import React from "react";

const OtherLog = (props) => {
    const location = useLocation();
    const backgroundColor = "#2c2d39"
    const tagColor = "#ABABAF"
    const textColor = "#fff"

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

    return <Wrap backgroundColor={backgroundColor}>
        <OtherHeader previousPage={'/other'} list={true}/>
        <Wrap1>
            <SelectCategory/>
        </Wrap1>
        <Wrap2>
            <SetCircle data={location.state.state}/>
        </Wrap2>
        <Wrap3>
            <LogContent seeMorePage={'/other/seeMore'} tagColor={tagColor} textColor={textColor}
                        data={location.state.state}
                        title={location.state.state.title}
                        tag={location.state.state.tag}
                        content={location.state.state.content}
            />
        </Wrap3>
    </Wrap>
}

export default OtherLog;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props=>props.backgroundColor};
`
const Wrap1 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 16px;
`
const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 56px;
`
const Wrap3 = styled.div`
  margin-top : 300px;
`
