import styled from 'styled-components';
import {useEffect, useState} from "react";
import { Route, Link } from 'react-router-dom';
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";

const SelectSympathy = () => {
    const [cnt, setCnt] = useState(0);
    const [color, setColor] = useState({
        angry : "#fc4e62",
        shy : "#fbaca5",
        sad : "#466597",
        laugh : "#FFF9D9",
    })
    const [feel, setFeel] = useState("");

    const clickSym = (sym) => {
        setFeel(sym)
    }

    const ShowComplete = () => {
        return <>
            {feel !== ""?
                <Wrap>
                    <SympathyCircle black={true} feeling={[5]} color={[feel]} backgroundColor={"#2c2d39"} />
                    <SympathyText>웃기다니 저도 한층 가볍네요!</SympathyText>
                    <Link to={'/sympathy'}><Complete opacity={1}>완료</Complete></Link>
                </Wrap>
                : <Wrap>
                    <Circles>
                        <PaletteCircle
                            width={240} height={240}
                            deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                            color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                            feeling={[20,10,20,50]}
                        />
                    </Circles>
                    <Message>공감할 감정을 눌러주세요</Message>
                    <Complete opacity={0.5}>완료</Complete>
                </Wrap>
            }
        </>
    }

    return <Wrap className={"jejugothic"}>
        <Space/>
        <Header>공감하기</Header>
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

const Space = styled.div`
  height : 10px;
`

const Header = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  margin-left : 56px;
  letter-spacing: -0.03em;
  margin-top : 5px;
  height: 56px;
  color : white;
`

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
const Black = styled.div`
  z-index : 10;
  position: absolute;
  width : 240px;
  height : 240px;
  border-radius: 50%;
  background: #2c2c38;
`

const Wrap1 = styled.div`
  display : flex;
  justify-content: flex-end;
`

const Complete = styled.button`
  position: absolute;
  width: 61px;
  height: 18px;
  left: 275px;
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
