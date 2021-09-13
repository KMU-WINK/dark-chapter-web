import styled from "styled-components";
import LogTitle from "./LogTitle";
import { Route, Link, useHistory } from 'react-router-dom';
import React, {useState} from "react";
import PopUp from "../modal/PopUp.js";

const LogMoreContent = (props) => {
    const history = useHistory();
    const [isPopup, setIsPopup] = useState(false);
    const [content, setContent] = useState(props.content);
    return <>
            <Wrap textColor={props.textColor}>
            <LogTitle tagColor={props.tagColor} textColor={props.textColor}
                      title={props.title} tag={props.tag} timeStamp={props.timeStamp}
            />
            <TextBox>
                {content}
                <Wrap2>
                    {props.status === "MyLog"?
                        <OvercomeBtn tagColor={props.tagColor} textColor={props.textColor} onClick={()=>{setIsPopup(true)}}>극복하기</OvercomeBtn>
                        :
                        <>
                            {props.status === "OtherLog"?
                                <OvercomeBtn tagColor={props.tagColor} textColor={props.textColor} onClick={()=>history.push({pathname:'/selectSympathy', state:props.data})}>공감하기</OvercomeBtn>
                                :
                                null
                            }
                        </>
                    }
                </Wrap2>
            </TextBox>
        </Wrap>
        {isPopup?
            <PopUp onClose={setIsPopup} state={props.state} title="overcome" text="흑역사를 극복하셨나요?" data={props.data}/>
            : null
        }
        </>
}

export default LogMoreContent;

const Wrap = styled.div`
  margin : 52px 24px 70px 24px;
  color : ${props=>props.textColor};
`

const TextBox = styled.div`
  overflow: auto;
  height : 350px;
  margin-top : 24px;

  //display : flex;
  //justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  word-break : break-all;
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 15px;
`

const OvercomeBtn = styled.button`
  width: 80px;
  height: 32px;
  border: 1px solid ${props=>props.textColor};
  color : ${props=>props.textColor};
  box-sizing: border-box;
  border-radius: 20px;
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  padding : 14px;
  margin-bottom : 10px;
`
