import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import {Route, Link, useHistory} from 'react-router-dom';
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";
import OtherHeader from "../component/header/OtherHeader";
import {useLocation} from "react-router-dom";

const SelectSympathy = (prpos) => {
    const location = useLocation();
    const history = useHistory();
    const [color, setColor] = useState({
        angry : "#fc4e62",
        shy : "#fbaca5",
        sad : "#466597",
        laugh : "#FFF9D9",
    })
    const [feel, setFeel] = useState("");
    console.log(location.state)
    const SetCircle = (props) => {
        console.log(props.data)
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

    const clickSym = (sym) => {
        setFeel(sym)
    }

    const ShowComplete = () => {
        return <>
            {feel !== ""?
                <Wrap>
                    <SympathyCircle black={true} feeling={[5]} color={[feel]} backgroundColor={"#2c2d39"} />
                    {/*<SympathyText>웃기다니 저도 한층 가볍네요!</SympathyText>*/}
                    <Complete onClick={()=>{history.push({pathname:'/sympathy'})}} opacity={1}>완료</Complete>
                </Wrap>
                : <Wrap>
                    <Circles>
                        <SetCircle data={location.state}/>
                    </Circles>
                    <Message>공감할 감정을 눌러주세요</Message>
                    <Complete opacity={0.5}>완료</Complete>
                </Wrap>
            }
        </>
    }

    return <Wrap className={"jejugothic"}>
        <OtherHeader previousPage={'/other/seeMore'} data={location.state} list={false}/>
        <Wrap1>
            <ShowComplete/>
        </Wrap1>

        <Select>
            <div>
                <ColorButton color={color.angry} onClick={()=>{clickSym("#fc4e62")}}/>
                <SelectDiv>화나요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.laugh} onClick={()=>{clickSym("#FFF9D9")}}/>
                <SelectDiv>웃겨요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.sad} onClick={()=>{clickSym("#466597")}}/>
                <SelectDiv>우울해요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.shy} onClick={()=>{clickSym("#fbaca5")}}/>
                <SelectDiv>부끄러워요</SelectDiv>
            </div>
        </Select>
    </Wrap>
}

export default SelectSympathy;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2c2c38;
`

const Circles = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 97px;

`

const Message = styled.div`
  margin-top : 60px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #FFFFFF;
`

const Select = styled.div`
  width: 100%;
  height: 188px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`

const ColorButton = styled.div`
  width : 50px;
  height : 50px;
  border-radius: 50px;
  background : ${props=>props.color};
  border : none;
  margin-top : 40px;
  margin-left : 11.8px;
  margin-right : 11.8px;
`

const SelectDiv = styled.div`
  text-align : center;
  margin-top : 28px;
  font-family: NanumGothicCoding;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.025em;
  color : white;
`

const Wrap1 = styled.div`
  display : flex;
  justify-content: flex-end;
`

const Complete = styled.button`
  position: absolute;
  width: 61px;
  height: 18px;
  left: 310px;
  top: 520.5px;
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #FFFFFF;
  opacity: ${props=>props.opacity};
`

const SympathyText = styled.div`
  position: absolute;
  height: 21px;
  left: 96.83px;
  top: 483px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #FFFFFF;
`
