import styled from "styled-components";

const ContentMenu = (props) => {
    const {onClose} = props;
    console.log(props.state);
    return <OpacityView onClick={()=>{onClose(false)}}>
        {props.state !== "none"?
            <Wrap>
                <Center>
                    <ModalBar/>
                </Center>
                {props.state === "share"?
                    <ContentList1 onClick={()=>{console.log("share")}}>공유하기</ContentList1>
                    :
                    <ContentList1 onClick={()=>{console.log("sympathy")}}>공감 더 끌어모으기</ContentList1>
                }
                <ContentList2>삭제</ContentList2>
            </Wrap>
            :
            <Wrap2>
                <Center>
                    <ModalBar/>
                </Center>
                <ContentList1>삭제</ContentList1>
            </Wrap2>
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

const Wrap = styled.div`
  background : white;
  width: 360px;
  height: 165px;
  position : fixed;
  top: 595.5px;
  border-radius: 20px 20px 0px 0px;
`

const Wrap2 = styled.div`
  background : white;
  position: absolute;
  width: 360px;
  height: 118px;
  left: 0px;
  top: 642px;
  border-radius: 10px 10px 0px 0px;
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
