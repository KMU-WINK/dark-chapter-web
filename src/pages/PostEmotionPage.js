import React,{ useState, useEffect } from "react";
import '../styles/PostPage.css'
import black_x from "../svg/black_x.svg";
import styled from "styled-components";
import minus from "../svg/minusBtn.svg"
import whiteCircle from "../svg/whiteCircle.svg"
import PaletteCircle from "../component/circle/PaletteCircle";

let cntAngry = 0;
let cntShy = 0;
let cntSad = 0;
let cntLaugh = 0;

function PostEmotionPage () {
    const [emotion,setEmotion] = useState([]);
    const [cnt, setCnt] = useState(0);
    const [angry, setAngry] = useState(0)
    const [shy, setShy] = useState(0)
    const [sad, setSad] = useState(0)
    const [laugh, setLaugh] = useState(0)
    const [fillEmotion, setFillEmotion] = useState(true)
    const [color, setColor] = useState({
        angry : "#FF2036FF",
        shy : "#FFF890FF",
        sad : "#366197FF",
        laugh : "#faaba4",
    })
    const [modify, setModify] = useState(false)
    const [complete, setComplete] = useState(false)
    useEffect(() => {
        popupInteraction()
    }, [cnt]);
    const popupInteraction = () =>{
        document.querySelector('.popup').style.bottom = 0
        document.querySelector('.contentsInfo').style.opacity = 1
    }
    const ShowCircles = () => {
        let feel = [];
        let feelColor = [];
        let degree = [];

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

        if (feel.length === 0) return <InitCircle><p className='emotionNotice'>10개의 감정이 필요해요!</p></InitCircle>
        else if (feel.length === 1) degree = ["50% 50%", "0% 0%", "0% 0%", "0% 0%"]
        else if (feel.length === 2) degree = ["14.6% 14.6%", "85.4% 85.4%", "0% 0%", "0% 0%"]
        else if (feel.length === 3) degree = ["50% 0", "6.7% 75%","93.3% 75%", "0% 0%"]
        else if (feel.length === 4) degree = ["14% 14%", "14% 86%", "86% 14%","86% 86%"]
        for (let i=4;i>0;i--){
            feel.push(0);
            feelColor.push("transparent");
        }

        return <>
            <PaletteCircle
                width={240} height={240}
                deg={degree}
                color={feelColor}
                feeling={feel} />
        </>
    }

    const showFeeling = async (feeling) => {
        if (cntAngry+cntShy+cntSad+cntLaugh > 10) return null;

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
        setCnt(cnt+1)
        console.log(cntAngry, cntShy, cntSad, cntLaugh)
    }

    const minusFeeling = async (feeling) => {
        if(feeling === "angry") {
            if (cntAngry>0) {
                setAngry(angry - 8);
                cntAngry -= 1;
            }
        }
        else if(feeling === "shy") {
            if (cntShy>0) {
                setShy(shy - 8);
                cntShy -= 1;
            }
        }
        else if(feeling === "sad") {
            if (cntSad>0) {
                setSad(sad - 8);
                cntSad -= 1;
            }
        }
        else if(feeling === "laugh") {
            if (cntLaugh>0) {
                setLaugh(laugh - 12);
                cntLaugh -= 1
            }
        }
        setCnt(cnt+1)
    }

    const NextBtn =()=>{
        if (cnt<10){
            setFillEmotion(false)
            setTimeout(()=>{setFillEmotion(true)},1000)
        }else {
            setComplete(true)
            document.querySelector('.popup').style.bottom = '-188px'
            document.querySelector('.contentsInfo').style.opacity = 0
            setTimeout(()=>{window.location.href ='/postDepth'},3000)
        }
    }
    const ModifyAction = () =>{
        setModify(!modify)
    }
    return(<>
        <div className='Header'>
            <button className='backBtn'><img src={black_x} alt=""/></button>
            {cnt < 10?
                <button className='nextBtn' style={{opacity: 0.3}} onClick={NextBtn}>다음</button>
                : <button className='nextBtn' style={{opacity : 1}} onClick={NextBtn}>다음</button>
            }
        </div>
        <p className='notCompleteNotice' style={{opacity : `${fillEmotion?0:1}`}}>감정을 다 채워주세요</p>
        <Wrap>
            <Circles>
                <ShowCircles/>
            </Circles>

            <Result className='contentsInfo'>
                <p className='contentsLength'>{((cntAngry+cntShy+cntSad+cntLaugh)<=10)?cntAngry+cntShy+cntSad+cntLaugh:10}/10</p>
                <button className='inputCompleteBtn' onClick={ModifyAction}>{modify?'완료':'수정'}</button>
            </Result>
            {modify ?
                <PopUp className='popup'>
                    <div style={{position:'relative'}} onClick={()=>{minusFeeling('angry')}}>
                        <ColorButton color={color.angry}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt'>{cntAngry}</p>
                        <SelectDiv>화나요</SelectDiv>
                    </div>
                    <div style={{position:'relative'}}  onClick={() => {minusFeeling("shy")}}>
                        <ColorButton color={color.shy}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt' style={{color : '#5A5A5A'}}>{cntShy}</p>
                        <SelectDiv>부끄러워요</SelectDiv>
                    </div>
                    <div style={{position:'relative'}} onClick={() => {minusFeeling("sad")}}>
                        <ColorButton color={color.sad}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt'>{cntSad}</p>
                        <SelectDiv>우울해요</SelectDiv>
                    </div>
                    <div style={{position:'relative'}} onClick={() => {minusFeeling("laugh")}}>
                        <ColorButton color={color.laugh}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt'>{cntLaugh}</p>
                        <SelectDiv>웃겨요</SelectDiv>
                    </div>
                </PopUp> :
                <PopUp className='popup'>
                    <div>
                        <ColorButton color={color.angry} onClick={() => {
                            showFeeling("angry")
                        }}/>
                        <SelectDiv>화나요</SelectDiv>
                    </div>
                    <div>
                        <ColorButton color={color.shy} onClick={() => {
                            showFeeling("shy")
                        }}/>
                        <SelectDiv>부끄러워요</SelectDiv>
                    </div>
                    <div>
                        <ColorButton color={color.sad} onClick={() => {
                            showFeeling("sad")
                        }}/>
                        <SelectDiv>우울해요</SelectDiv>
                    </div>
                    <div>
                        <ColorButton color={color.laugh} onClick={() => {
                            showFeeling("laugh")
                        }}/>
                        <SelectDiv>웃겨요</SelectDiv>
                    </div>
                </PopUp>
            }
        </Wrap>
        <p className='completeMsg' style={{opacity : `${complete?1:0}`}}>으앙 부끄러워요 <br/>빨리 흑역사 빠뜨리러 가요 !</p>
    </>)
}

const Wrap = styled.div`
  width: 100vw;
  height: fit-content;
  background-size: contain;
  //background: #f2f2ec;
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
const White = styled.img.attrs({
    src : whiteCircle
})`
    opacity: 50;
`


const Circle = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  mix-blend-mode: ${props=>props.mode};
  background: radial-gradient(circle at ${props=>props.deg}, rgb(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]}) ${props => props.feeling}%, rgba(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]},0.2) 70.71%);
  filter: blur(3px);
  backdrop-filter: blur(20px);
`

const Result = styled.div`
  width : calc(100% - 48px);
  padding: 0 24px 16px 24px;
  display : flex;
  justify-content: space-between;
  position: absolute;
  bottom: 188px;
  opacity: 0;
  transition: opacity 2s;
`

const PopUp = styled.div`
  width: 100%;
  height: 188px;
  background: #ffffff;
  position: absolute;
  bottom: -188px;
  display: flex;
  justify-content: center;
  border-radius: 22px 22px 0 0;
  transition: bottom 1s;
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
  background : ${props=>props.color};
  border : none;
  margin-top : 40px;
  margin-left : 11.8px;
  margin-right : 11.8px;
`

export default PostEmotionPage
