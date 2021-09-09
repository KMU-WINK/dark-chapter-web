import styled from "styled-components";
import React, {useState} from "react";
import PopUp from "./PopUp.js";

const ContentMenu = (props) => {
    const {onClose} = props;
    const [isPopup, setIsPopup] = useState(" ");

    return <OpacityView>
        <Blank onClick={()=>{onClose(false)}}></Blank>
        <Wrap>
            <Center>
                <ModalBar/>
            </Center>
            {props.state === "share"?
                <ContentList1 onClick={()=>{console.log("share")}}>공유하기</ContentList1>
                :
                <ContentList1 onClick={()=>{setIsPopup("collect")}}>공감 더 끌어모으기</ContentList1>
            }
            <ContentList2 onClick={()=>{setIsPopup("delete")}}>삭제</ContentList2>
        </Wrap>
        {isPopup === "collect"?
            <PopUp onClose={setIsPopup} state={props.state} text="공감을 더 모으고 싶으신가요?"/>
            : null
        }
        {isPopup === "delete"?
            <PopUp onClose={setIsPopup} state={props.state} text="정말 지우시겠어요?" text2="사라진 글은 되돌릴 수 없어요."/>
            : null
        }
    </OpacityView>
}

export default ContentMenu;

const OpacityView = styled.div`
  width : 360px;
  height : 760px;
  position : fixed;
  left : 0;
  right:0;
  top : 0;
  bottom : 0;
  z-index : 100;
  background : rgba(0,0,0,0.6);
`
const Blank = styled.div`
  width : 360px;
  height: 595px;
`

const Wrap = styled.div`
  background : white;
  width: 360px;
  height: 165px;
  position : fixed;
  top: 595.5px;
  border-radius: 20px 20px 0px 0px;
`

const ModalBar = styled.div`
  position: absolute;
  width: 40px;
  height: 4px;
  left: 160px;
  top: 12px;
  background: #C4C4C4;
  border-radius: 15px;
`

const Center = styled.div`
  display : flex;
  justify-content: center;
  margin-bottom : 10px;
`

const ContentList1 = styled.div`
  position: absolute;
  width: 252.17px;
  height: 26.5px;
  left: 25.1px;
  top: 39.26px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #040404;
`

const ContentList2 = styled.div`
  position: absolute;
  width: 104.83px;
  height: 26.5px;
  left: 25.1px;
  top: 79.29px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #040404;
`
