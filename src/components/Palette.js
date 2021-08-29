import {useEffect, useState} from "react";
import styled from 'styled-components';
import pencil from '../img/ei_pencil.png';
import trash from '../img/ei_trash.png';
import back from '../img/eva_arrow-ios-back-fill.png';
import colorPalette from '../img/fluent_color-20-regular.png';
import help from '../img/help.png';

const resultColor = ["#FF2036FF","#FFF890FF","#366197FF","#EAEAE5","#EAEAE5","#EAEAE5","#EAEAE5","#EAEAE5","#EAEAE5","#EAEAE5"]
let cntAngry = 0;
let cntShy = 0;
let cntSad = 0;
let cntLaugh = 0;

export const Palette = () => {
    const [kind, setKind] = useState(0);
    const [cnt, setCnt] = useState(0);

    const [angry, setAngry] = useState(0)
    const [shy, setShy] = useState(0)
    const [sad, setSad] = useState(0)
    const [laugh, setLaugh] = useState(0)

    const [color, setColor] = useState({
        angry : [254, 78, 98],
        shy : [255, 249, 217],
        sad : [70, 101, 152],
        laugh : [253, 173, 166],
    })

    useEffect(() => {
        // showColor();
    }, [cnt]);

    const ShowCircles = () => {
        let feel = [];
        let feelColor = [];

        if (cntAngry>0) {
            feel.push(angry);
            feelColor.push(color.angry);
        }
        if (cntShy>0) {
            feel.push(shy);
            feelColor.push(color.shy);
        }
        if (cntSad>0) {
            feel.push(sad);
            feelColor.push(color.sad);
        }
        if (cntLaugh>0) {
            feel.push(laugh);
            feelColor.push(color.laugh);
        }
        console.log(feel);
        console.log(feelColor);

        // if (feel.length === 0) return <InitCircle><InitText>10개의 감정이 필요해요!</InitText></InitCircle>
        if (feel.length === 0) return <InitCircle>10개의 감정이 필요해요!</InitCircle>

        else if (feel.length === 1) return <Circle deg={"50% 0"} feeling={feel[0]} color={feelColor[0]}/>
        else if (feel.length === 2){
            return <>
                <Circle deg={"14.6% 14.6%"} feeling={feel[0]} color={feelColor[0]}/>
                <Circle deg={"85.4% 85.4%"} feeling={feel[1]} color={feelColor[1]}/>
            </>
        }
        else if (feel.length === 3){
            return <>
                <Circle deg={"50% 0"} feeling={feel[0]} color={feelColor[0]}/>
                <Circle deg={"6.7% 75%"} feeling={feel[1]} color={feelColor[1]}/>
                <Circle deg={"93.3% 75%"} feeling={feel[2]} color={feelColor[2]}/>
                <Circle deg={"93.3% 75%"} feeling={feel[2]} color={feelColor[2]}/>
            </>
        }
        else if (feel.length === 4){
            return <>
                <Circle deg={"14.6% 14.6%"} feeling={feel[0]} color={feelColor[0]}/>
                <Circle deg={"14.6% 85.4%"} feeling={feel[1]} color={feelColor[1]}/>
                <Circle deg={"85.4% 14.6%"} feeling={feel[2]} color={feelColor[2]}/>
                <Circle deg={"85.4% 14.6%"} feeling={feel[2]} color={feelColor[2]}/>
                <Circle deg={"85.4% 85.4%"} feeling={feel[3]} color={feelColor[3]}/>
                <Circle deg={"85.4% 85.4%"} feeling={feel[3]} color={feelColor[3]}/>
            </>
        }
    }

    const showFeeling = async (feeling) => {
        if(feeling === "angry") {
            setAngry(angry+8);
            cntAngry += 1;
        }
        else if(feeling === "shy") {
            setShy(shy+8);
            cntShy += 1;
        }
        else if(feeling === "sad") {
            setSad(sad+8);
            cntSad += 1;
        }
        else if(feeling === "laugh") {
            setLaugh(laugh+12);
            cntLaugh += 1
        }

        let idx = 0;
        for(let j=0;j<cntAngry;j++) resultColor[idx++] = "#FF2036FF"
        for(let j=0;j<cntShy;j++) resultColor[idx++] = "#FFF890FF"
        for(let j=0;j<cntSad;j++) resultColor[idx++] = "#366197FF"
        for(let j=0;j<cntLaugh;j++) resultColor[idx++] = "#faaba4"
        setCnt(cnt+1)
    }

    const Reset = () => {
        cntAngry = 1;
        cntSad = 1;
        cntLaugh = 0;
        cntShy = 1;
        setAngry(0);
        setShy(0);
        setSad(0);
        setLaugh(0);
        for (let i=0;i<10;i++) resultColor[i] = "#EAEAE5"
        console.log("초기화했습니다.")
    }

    return <Wrap>
        <Header>
            <div><img src={back}/></div>
            <MenuTab>
                <div>
                    <MenuImg src={pencil}/>
                    <Menu>●</Menu>
                </div>
                <div>
                    <MenuImg src={colorPalette}/>
                    <MenuNow>●</MenuNow>
                </div>
                <div>
                    <MenuImg src={trash}/>
                    <Menu>●</Menu>
                </div>
            </MenuTab>
            <div>{null}</div>
        </Header>

        <Help>
            <ResetButton onClick={()=>{Reset()}}>초기화</ResetButton>
            <img src={help}/>
        </Help>

        <Circles>
            <ShowCircles/>
        </Circles>

        <Result>
            <div>{null}</div>
            <ColorResult>
                <CircleResult idx={0}/>
                <CircleResult idx={1}/>
                <CircleResult idx={2}/>
                <CircleResult idx={3}/>
                <CircleResult idx={4}/>
                <CircleResult idx={5}/>
                <CircleResult idx={6}/>
                <CircleResult idx={7}/>
                <CircleResult idx={8}/>
                <CircleResult idx={9}/>
            </ColorResult>
            <ResultButton>완료</ResultButton>
        </Result>

        <PopUp>
            <div>
                <ColorButton color={color.angry} onClick={()=>{showFeeling("angry")}}/>
                <SelectDiv>화나요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.shy} onClick={()=>{showFeeling("shy")}}/>
                <SelectDiv>부끄러워요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.sad} onClick={()=>{showFeeling("sad")}}/>
                <SelectDiv>우울해요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.laugh} onClick={()=>{showFeeling("laugh")}}/>
                <SelectDiv>웃겨요</SelectDiv>
            </div>
        </PopUp>
    </Wrap>
}
export default Palette
const Wrap = styled.div`
  width: 100vw;
  height: fit-content;
  background-size: contain;
  //background: #f2f2ec;
`

const Header = styled.div`
  display : flex;
  justify-content: space-between;
  //margin-top : 16px;
`

const MenuImg = styled.img`
  margin-left : 7px;
  margin-right : 7px;
`

const MenuNow = styled.div`
  text-align: center;
  color: #000000;
`

const Menu = styled.div`
  text-align : center;
  color : #aeb0b2;
`

const MenuTab = styled.div`
  display : flex;
  justify-content: space-between;
`

const Help = styled.div`
  display : flex;
  justify-content: flex-end;
  margin-top : 11px;
  margin-right : 16px;
`

const ResetButton = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;

  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  font-family: NanumGothicCoding;

  position: static;
  width: 48px;
  height: 22px;
  left: 1px;
  top: 7px;
  margin-right : 10px;

  background: #C4C4C4;
  opacity: 0.48;
  border-radius: 16px;
`

const Circles = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 67px;
`

const InitCircle = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  mix-blend-mode: normal;
  background: #e9e9e4;
  text-align : center;
`

const Circle = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  mix-blend-mode: soft-light;
  background: radial-gradient(circle at ${props=>props.deg}, rgb(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]}) ${props => props.feeling}%, rgba(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]},0.2) 70.71%);
  filter: blur(3px);
  backdrop-filter: blur(20px);
`

const Result = styled.div`
  display : flex;
  justify-content: space-between;
  position: absolute;
  left: 93px;
  top: 535px;
  
`

const ColorResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const CircleResult = styled.div`
  border-radius: 50%;
  width : 13px;
  height : 13px;
  margin-left : 2.5px;
  margin-right : 2.5px;
  background : ${props=>resultColor[props.idx]}
`

const ResultButton = styled.button`
  background : transparent;
  border : none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 1px;
  width: 46px;
  height: 35px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
  margin-left : 31px;
  text-align: center;
`

const PopUp = styled.div`
  width: 100%;
  height: 188px;
  background: #ffffff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  border-radius: 22px 22px 0 0;
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
`

const ColorButton = styled.button`
  width : 50px;
  height : 50px;
  border-radius: 50px;
  background : rgb(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]});
  border : none;
  margin-top : 40px;
  margin-left : 11.8px;
  margin-right : 11.8px;
`
