import GoBackBtn from "../button/GoBackBtn";
import styled from "styled-components";
import list from "../../svg/list.svg";
import {useState} from "react";
import ContentMenu from "../modal/ContentMenu";

const ContentHeader = (props) => {
    const [visible, setVisible] = useState(false);

    return <>
        <Header>
            <GoBackBtn back={props.back}/>
            <ListIcon onClick={()=>{setVisible(true)}} textColor={props.textColor}/>
        </Header>
        {visible?
            <ContentMenu onClose={setVisible} state={props.state}/>
            : null
        }
    </>
}

export default ContentHeader;

const Header = styled.div`
  display : flex;
  justify-content : space-between;
`

const ListIcon = styled.img.attrs({
    src : list
})`
    margin-right: 24px;
    margin-top : 16px;
`

const ModalBar = styled.div`
  width: 40px;
  height: 4px;
  display : flex;
  justify-content: center;

  background: #C4C4C4;
  border-radius: 15px;
`

const Center = styled.div`
  display : flex;
  justify-content: center;
  margin-bottom : 10px;
`

const ContentList = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #040404;
  margin-top : 13px;
`
