import styled, { keyframes } from "styled-components";
import React,{ useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import toastMessage from "./ToastMessage.js"

function PopUp(props) {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [toastText, setToastText] = useState("");
    const {onClose} = props;

    const yesButtonClicked = () => {
        switch (props.title) {
            case "exit_PostPage":
                history.push('/home');
                break;
            case "collect_sympathy":
                setVisible(true);
                setToastText("공감을 더 모으기 위해 다시 업로드 되었어요!");
                setTimeout(function() {
                    setVisible(false);
                }, 3000);
                break;
            case "delete_posting":
                setVisible(true);
                setToastText("흑역사를 삭제했어요.");
                setTimeout(function() {
                    setVisible(false);
                }, 3000);
                break;
            case "delete_gemstone":
                setVisible(true);
                setToastText("원석을 삭제했어요.");
                setTimeout(function() {
                    setVisible(false);
                }, 3000);
                break;
            case "overcome":
                history.push('/generateGemstone');
                break;
        }
    }

    return <OpacityView className={"jejugothic"}>
        <PopupBox>
            <Message>{props.text}</Message>
            {props.text2 ? <Message2>{props.text2}</Message2> : null}
            <NoButton onClick={()=>{onClose(false)}}>아니오</NoButton>
            <YesButton onClick={yesButtonClicked}>예</YesButton>
        </PopupBox>
        {visible === true?
            toastMessage(toastText)
            : null
        }
    </OpacityView>
}

export default PopUp;

const OpacityView = styled.div`
  width : 100%;
  height : 100vh;
  position : fixed;
  left : 0;
  right: 0;
  top : 0;
  bottom : 0;
  z-index : 100;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
`

const PopupBox = styled.div`
    position: absolute;
    height: 124px;
    width: 230px;
    top: 279.35px;
    border-radius: 5px;
    background: #F7F7F5;
    margin-left: 18%;
    text-align: center;
    box-shadow: 0px 2.668604612350464px 7.116279125213623px 0px #0000001A;
`

const Message = styled.div`
    padding-top: 32px;
    font-size: 16px;
`

const Message2 = styled.div`
    padding-top: 4px;
    font-size: 12px;
    color: #BCBCBC;
`

const NoButton = styled.div`
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 35.68px;
    box-sizing: border-box;
    border-top: 0.331798px solid #A4A4A4;
    border-right: 0.331798px solid #A4A4A4;
    line-height: 35.68px;
    color: #FF4242;
    font-size: 14px;
`

const YesButton = styled.div`
    position: absolute;
    left: 115px;
    bottom: 0;
    width: 50%;
    height: 35.68px;
    box-sizing: border-box;
    border-top: 0.331798px solid #A4A4A4;
    line-height: 35.68px;
    font-size: 14px;
`


