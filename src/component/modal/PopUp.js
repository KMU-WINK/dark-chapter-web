import styled from "styled-components";
import {useHistory} from "react-router-dom";

const PopUp = (props) => {
    const history = useHistory();
    const {onClose} = props;

    return <OpacityView className={"jejugothic"}>
        <PopupBox>
            <Message>{props.text}</Message>
            {props.text2 ? <Message2>{props.text2}</Message2> : null}
            <NoButton onClick={()=>{onClose(false)}}>아니오</NoButton>
            <YesButton onClick={()=>{history.push('/home')}}>예</YesButton>
        </PopupBox>
    </OpacityView>
}

export default PopUp;

const OpacityView = styled.div`
  width : 360px;
  height : 760px;
  position : fixed;
  left : 0;
  right: 0;
  top : 0;
  bottom : 0;
  z-index : 100;
  background: rgba(0, 0, 0, 0.3);
`

const PopupBox = styled.div`
    position: absolute;
    height: 124px;
    width: 230px;
    border-radius: 5px;
    background: #F7F7F5;
    left: 66px;
    top: 279.35px;
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
