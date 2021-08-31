import styled from 'styled-components';
import {useEffect, useState} from "react";
import { Route, Link } from 'react-router-dom';
import PaletteCircle from "../component/circle/PaletteCircle";

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
                <Link to={'/sympathy'}><Complete>완료</Complete></Link>
                : null
            }
        </>
    }

    return <Wrap>
        <Space/>
        <Header>공감하기</Header>

        <Circles>
            <PaletteCircle
                width={240} height={240}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
        </Circles>

        <Message>공감할 감정을 눌러주세요</Message>

        <Wrap1>
            <ShowComplete/>
        </Wrap1>

        <Select>
            <div>
                <ColorButton color={color.angry} onClick={()=>{clickSym("angry")}}/>
                <SelectDiv>화나요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.laugh} onClick={()=>{clickSym("laugh")}}/>
                <SelectDiv>웃겨요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.sad} onClick={()=>{clickSym("sad")}}/>
                <SelectDiv>우울해요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.shy} onClick={()=>{clickSym("shy")}}/>
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
  font-family: JejuGothic;
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
  font-family: JejuGothic;
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
  width : 50px;
  margin: 24px 24px 0 0;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  background : transparent;
  border : none;
`
