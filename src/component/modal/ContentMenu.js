import styled from "styled-components";
import React, {useState} from "react";
import PopUp from "./PopUp.js";

const ContentMenu = (props) => {
    console.log(props)
    const {onClose} = props;
    const [isPopup, setIsPopup] = useState(" ");

    return <OpacityView>
        <Blank onClick={()=>{onClose(false)}}></Blank>
        <Wrap height={props.state==="none"?118:165} top={props.state==="none"?642:595.5}>
            <Center>
                <ModalBar/>
            </Center>
            {props.state === "share"?
                <ContentList1 onClick={()=>{setIsPopup("share")}}>공유하기</ContentList1>
                :
                <>
                    {props.state === "collect"?
                        <ContentList1 onClick={()=>{setIsPopup("collect")}}>공감 더 끌어모으기</ContentList1>
                        :
                        null
                    }
                </>
            }
            {props.state === "none"?
                <ContentList1 onClick={()=>{setIsPopup("delete_gemstone")}}>삭제</ContentList1>
                :
                <ContentList2 onClick={()=>{setIsPopup("delete")}}>삭제</ContentList2>
            }
        </Wrap>
        {isPopup === "share"?
            <PopUp onClose={setIsPopup} state={props.state} title="share_posting" text="글을 공유하고 싶으신가요?"/>
            : null
        }
        {isPopup === "collect"?
            <PopUp onClose={setIsPopup} state={props.state} title="collect_sympathy" text="공감을 더 모으고 싶으신가요?"/>
            : null
        }
        {isPopup === "delete"?
            <PopUp onClose={setIsPopup} state={props.state} title="delete_posting" text="정말 지우시겠어요?" text2="사라진 글은 되돌릴 수 없어요." boardId = {props.boardId}/>
            : null
        }
        {isPopup === "delete_gemstone"?
            <PopUp onClose={setIsPopup} state={props.state} title="delete_gemstone" text="정말 지우시겠어요?" text2="사라진 글은 되돌릴 수 없어요."/>
            : null
        }
    </OpacityView>
}

export default ContentMenu;

const OpacityView = styled.div`
  width : 100%;
  height : 100vh;
  position : fixed;
  left : 0;
  right:0;
  top : 0;
  bottom : 0;
  z-index : 100;
  background : rgba(0,0,0,0.6);
`
const Blank = styled.div`
  width : 100%;
  height: 595px;
`

const Wrap = styled.div`
  background : white;
  width: 100%;
  height: 100vh;
  position : fixed;
  top: ${props=>props.top}px;
  border-radius: 20px 20px 0px 0px;
`


const ModalBar = styled.div`
  position: absolute;
  width: 40px;
  height: 4px;
  left: 45%;
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
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #040404;
`

const ContentList2 = styled.div`
  position: absolute;
  width: 100%;
  height: 26.5px;
  left: 8%;
  top: 79.29px;
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #040404;
`
