import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import {Route, Link, useHistory} from 'react-router-dom';
import PaletteCircle from "../component/circle/PaletteCircle";
import SympathyCircle from "../component/circle/SympathyCircle";
import OtherHeader from "../component/header/OtherHeader";
import {useLocation} from "react-router-dom";
import baseService from "../axios/base-service";
import * as user_service from "../axios/user-service";

const SelectSympathy = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [color, setColor] = useState({
        angry : "#fc4e62",
        shy : "#fbaca5",
        sad : "#466597",
        laugh : "#FFF9D9",
    })
    const [feel, setFeel] = useState("");
    const [feelName, setFeelName] = useState("");
    const [body, setBody] = useState({});
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

    const clickSym = (f) => {
        setFeelName(f)
    }

    useEffect(() => {
        const getUser = async() => {
            const user = await user_service.getUser(sessionStorage.getItem('email'))
            var body = {
                boardId: props.location.state._id,
                userId: user._id,
                angry: 0,
                funny: 0,
                gloomy: 0,
                shameful: 0
            }
            if(feelName === 'angry') body.angry = 1
            else if(feelName === 'laugh') body.funny = 1
            else if(feelName === 'sad') body.gloomy = 1
            else if(feelName === 'shy') body.shameful = 1
            setBody(body)
            console.log(body)
        }
        getUser();
    }, [feelName])

    const postSympathy = async() => {
        await baseService.post(`/sympathy`, body)
        .then(
        result => console.log(result)
        )
    }

    const ShowComplete = () => {
        return <>
            {feel !== ""?
                <Wrap>
                    <Circles>
                        <SympathyCircle black={true} feeling={[5]} color={[feel]} backgroundColor={"#2c2d39"} />
                    </Circles>
                    <Message/>
                    <CompleteDiv><Complete onClick={()=>{history.push({pathname:'/sympathy', board_id: props.location.state._id}); postSympathy()}} opacity={1}>완료</Complete></CompleteDiv>
                </Wrap>
                : <Wrap>
                    <Circles>
                        <SetCircle data={location.state}/>
                    </Circles>
                    <Message>공감할 감정을 눌러주세요</Message>
                    <CompleteDiv><Complete opacity={0.5}>완료</Complete></CompleteDiv>
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
                <ColorButton color={color.angry} onClick={()=>{clickSym("angry"); setFeel("#fc4e62")}}/>
                <SelectDiv>화나요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.laugh} onClick={()=>{clickSym("laugh"); setFeel("#FFF9D9")}}/>
                <SelectDiv>웃겨요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.sad} onClick={()=>{clickSym("sad"); setFeel("#466597")}}/>
                <SelectDiv>우울해요</SelectDiv>
            </div>
            <div>
                <ColorButton color={color.shy} onClick={()=>{clickSym("shy"); setFeel("#fbaca5")}}/>
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
  position : relative;
  
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Circles = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 97px;

`

const Message = styled.div`
  margin-top : 300px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.03em;
  height : 21px;
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
  position : relative;
`
const CompleteDiv = styled.div`
  display : flex;
  justify-content: flex-end;
  //margin-right : 15%;
  width : 90%;
`
const Complete = styled.button`
  width: 61px;
  height: 18px;
  margin-top : 24px;
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: left;
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
