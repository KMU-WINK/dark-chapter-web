import React, {useState, useEffect} from "react";
import '../styles/PostPage.css'
import backIcon from "../svg/record_3_goback.svg";
import styled from "styled-components";
import minus from "../svg/minusBtn.svg";
import {useHistory} from "react-router-dom";
import PaletteCircle from "../component/circle/PaletteCircle";

let cntAngry = 0;
let cntShy = 0;
let cntSad = 0;
let cntLaugh = 0;

function PostEmotionPage(props) {
    console.log(props)
    const history = useHistory();

    const [receiveTitle, setTitle] = useState("");
    const [receiveContent, setContent] = useState("");

    const [emotion, setEmotion] = useState([]);
    const [cnt, setCnt] = useState(0);
    const [angry, setAngry] = useState(0)
    const [shy, setShy] = useState(0)
    const [sad, setSad] = useState(0)
    const [laugh, setLaugh] = useState(0)
    const [fillEmotion, setFillEmotion] = useState(true)
    const [color, setColor] = useState({
        angry: [254, 78, 98],
        shy: [255, 249, 217],
        sad: [70, 101, 152],
        laugh: [253, 173, 166],
    })
    const [modify, setModify] = useState(false)
    const [complete, setComplete] = useState(false)
    useEffect(() => {
        popupInteraction()
    }, [cnt]);
    useEffect(() => {
        if (props.history.location.state.title) {
            setTitle(props.history.location.state.title)
            setContent(props.history.location.state.contents)
            setAngry(props.history.location.state.angry)
            setShy(props.history.location.state.shy)
            setSad(props.history.location.state.sad)
            setLaugh(props.history.location.state.laugh)

            cntAngry = props.history.location.state.angry;
            cntLaugh = props.history.location.state.laugh
            cntSad = props.history.location.state.sad
            cntShy = props.history.location.state.shy
            console.log(receiveTitle)
            console.log(receiveContent)
        }

    }, []);
    const popupInteraction = () => {
        document.querySelector('.popup').style.bottom = 0
        document.querySelector('.contentsInfo').style.opacity = 1
    }


    const showFeeling = async (feeling) => {
        if (cntAngry + cntShy + cntLaugh + cntSad >= 10) return null;

        if (feeling === "angry") {
            setAngry(angry + 1);
            cntAngry += 1;
        } else if (feeling === "shy") {
            setShy(shy + 1);
            cntShy += 1;
        } else if (feeling === "sad") {
            setSad(sad + 1);
            cntSad += 1;
        } else if (feeling === "laugh") {
            setLaugh(laugh + 1);
            cntLaugh += 1
        }

        setCnt(cnt + 1)
        console.log(cntAngry, cntShy, cntSad, cntLaugh)
    }
    const minusFeeling = async (feeling) => {
        if (feeling === "angry") {
            if (cntAngry > 0) {
                setAngry(angry - 1);
                cntAngry -= 1;
            }
        } else if (feeling === "shy") {
            if (cntShy > 0) {
                setShy(shy - 1);
                cntShy -= 1;
            }
        } else if (feeling === "sad") {
            if (cntSad > 0) {
                setSad(sad - 1);
                cntSad -= 1;
            }
        } else if (feeling === "laugh") {
            if (cntLaugh > 0) {
                setLaugh(laugh - 1);
                cntLaugh -= 1
            }
        }
        setCnt(cnt - 1)
    }

    const clickReset = () => {
        cntAngry = 0;
        cntSad = 0;
        cntLaugh = 0;
        cntShy = 0;
        setAngry(0);
        setShy(0);
        setSad(0);
        setLaugh(0);
        setCnt(0);
        console.log("초기화했습니다.")
    }

    const NextBtn = () => {
        if (cntAngry + cntShy + cntLaugh + cntSad < 10) {
            setFillEmotion(false)
            setTimeout(() => {
                setFillEmotion(true)
            }, 1000)
        } else {
            setComplete(true)
            document.querySelector('.popup').style.bottom = '-188px'
            document.querySelector('.contentsInfo').style.opacity = 0
            history.push({
                pathname: '/postDepth',
                state: {
                    ...props.history.location.state,
                    angry: cntAngry,
                    shy: cntShy,
                    sad: cntSad,
                    laugh: cntLaugh,
                }
            })
        }
    }
    const ModifyAction = () => {
        setModify(!modify)
    }
    let makeFeeling = [];
    let makeColor = [];
    if (angry > 0) {
        makeFeeling.push(angry);
        makeColor.push("#FE4E62");
    }
    if (shy > 0) {
        makeFeeling.push(shy);
        makeColor.push("#FFF9D9");
    }
    if (sad > 0) {
        makeFeeling.push(sad);
        makeColor.push("#466598");
    }
    if (laugh > 0) {
        makeFeeling.push(laugh);
        makeColor.push("#FDADA6");
    }
    return (<>
        <div className='Header'>
            <button className='backBtn'
                    onClick={
                        () => history.push({
                                pathname: '/post',
                                state: {
                                    title: receiveTitle,
                                    contents: receiveContent,
                                    angry: cntAngry,
                                    laugh: cntLaugh,
                                    sad: cntSad,
                                    shy: cntShy
                                }
                            }
                        )
                    }>
                <img src={backIcon} alt=""/>
            </button>
            {cntAngry + cntShy + cntLaugh + cntSad !== 10 ?
                <button className='nextBtn' style={{opacity: 0.3}} onClick={NextBtn}>다음</button>
                : <button className='nextBtn' style={{opacity: 1}} onClick={NextBtn}>다음</button>
            }
        </div>
        <p className='notCompleteNotice' style={{opacity: `${fillEmotion ? 0 : 1}`}}>감정을 다 채워주세요</p>
        <Reset>
            <ResetButton onClick={() => {
                clickReset()
            }}>초기화</ResetButton>
        </Reset>
        <Wrap>
            <Circles>
                {makeFeeling.length === 0 ?
                    <InitCircle><p className='emotionNotice'>10개의 감정이 필요해요!</p></InitCircle>
                    :
                    <PaletteCircle
                        width={240} height={240}
                        color={makeColor}
                        feeling={makeFeeling}
                    />
                }
            </Circles>

            <Result className='contentsInfo'>
                <p className='contentsLength'>{((cntAngry + cntShy + cntSad + cntLaugh) <= 10) ? cntAngry + cntShy + cntSad + cntLaugh : 10}/10</p>
                <button className='inputCompleteBtn' onClick={ModifyAction}>{modify ? '완료' : '수정'}</button>
            </Result>
            {modify ?
                <PopUp className='popup'>
                    <div style={{position: 'relative'}} onClick={() => {
                        minusFeeling('angry')
                    }}>
                        <ColorButton color={color.angry}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt'>{cntAngry}</p>
                        <SelectDiv>화나요</SelectDiv>
                    </div>
                    <div style={{position: 'relative'}} onClick={() => {
                        minusFeeling("shy")
                    }}>
                        <ColorButton color={color.shy}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt' style={{color: '#5A5A5A'}}>{cntShy}</p>
                        <SelectDiv>부끄러워요</SelectDiv>
                    </div>
                    <div style={{position: 'relative'}} onClick={() => {
                        minusFeeling("sad")
                    }}>
                        <ColorButton color={color.sad}/>
                        <img src={minus} className='minusBtn'/>
                        <p className='currentCnt'>{cntSad}</p>
                        <SelectDiv>우울해요</SelectDiv>
                    </div>
                    <div style={{position: 'relative'}} onClick={() => {
                        minusFeeling("laugh")
                    }}>
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
        <p className='completeMsg' style={{opacity: `${complete ? 1 : 0}`}}>으앙 부끄러워요 <br/>빨리 흑역사 빠뜨리러 가요 !</p>
    </>)
}

const Wrap = styled.div`
  width: 100vw;
  height: fit-content;
  background-size: contain;
  isolation: isolate;
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
  background: radial-gradient(circle at ${props => props.deg}, rgb(${props => props.color[0]},${props => props.color[1]},${props => props.color[2]}) ${props => props.feeling}%, rgba(${props => props.color[0]},${props => props.color[1]},${props => props.color[2]},0.2) 70.71%);
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
  background : rgb(${props => props.color[0]},${props => props.color[1]},${props => props.color[2]});
  border : none;
  margin-top : 40px;
  margin-left : 11.8px;
  margin-right : 11.8px;
`

const Reset = styled.div`
  display : flex;
  justify-content: flex-end;
  margin-right : 24px;
`

const ResetButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  position: static;
  width: 35px;
  height: 18px;
  left: 1px;
  top: 7px;
  background: #C4C4C4;
  opacity: 0.48;
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 5px 0;
  
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`

export default PostEmotionPage
