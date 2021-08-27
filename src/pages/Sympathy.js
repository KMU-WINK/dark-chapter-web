import styled from 'styled-components';
import {useEffect, useState} from "react";

let cntAngry = 0;
let cntShy = 0;
let cntSad = 0;
let cntLaugh = 0;

const Sympathy = () => {
    const [cnt, setCnt] = useState(0);
    const [color, setColor] = useState({
        angry : "#fc4e62",
        shy : "#fbaca5",
        sad : "#466597",
        laugh : "#FFF9D9",
    })

    useEffect(() => {
    }, [cnt]);

    const clickSym = (sym) => {
        if (sym === "angry") cntAngry++;
        else if (sym === "laugh") cntLaugh++;
        else if (sym === "sad") cntSad++;
        else if (sym === "shy") cntShy++;
        setCnt(cnt+1)
    }

    const ShowSympathy = () => {
        return <>
            {cntLaugh+cntShy+cntSad+cntAngry !== 0?
                <Black/>
                : null
            }
            {/* left : 60 & top : 176 */}
            {/* 공감받은 수로 위치 결정 */}
            {cntLaugh>0?
                <SympathyCircle left={Math.min(70+7*cntLaugh,136.5)} top={Math.min(205+7*cntLaugh,275)} color={color.laugh}/>
                : null
            }
            {cntShy > 0 ?
                <SympathyCircle left={Math.min(60 + 7 * cntShy, 77)} top={Math.max(150 - 7 * cntShy, 77)} color={color.shy}/>
                : null
            }
            {cntAngry>0?
                <SympathyCircle left={Math.max(60-7*cntAngry,24)} top={Math.max(180-7*cntAngry,148)} color={color.angry}/>
                : null
            }
            {cntSad>0?
                <SympathyCircle left={Math.min(70+7*cntSad,150)} top={Math.max(190-7*cntSad,162)} color={color.sad}/>
                : null
            }
        </>
    }

    return <Wrap>
        <Space/>
        <Header>공감하기</Header>

        <Circles>
            <MyFeeling/>
            <ShowSympathy/>
        </Circles>

        <Message>공감할 감정을 눌러주세요</Message>
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

export default Sympathy;

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

const MyFeeling = styled.div`
  position : absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #eb7280;
`

const Message = styled.div`
  margin-top : 66px;
  font-family: JejuGothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.03em;

  /* Black Typo/White */

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

const SympathyCircle = styled.div`
  position: absolute;
  width: 182px;
  height: 182px;
  left: ${props=>props.left}px;
  top: ${props=>props.top}px;
  border-radius: 50%;
  background : ${props=>props.color};
  filter: blur(60px);

`
