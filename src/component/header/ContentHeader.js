import GoBackBtn from "../button/GoBackBtn";
import styled from "styled-components";
import list from "../../svg/list.svg";
import {useState} from "react";
import ContentMenu from "../modal/ContentMenu";
import blackList from "../../svg/list_black.svg";

const ContentHeader = (props) => {
    const [visible, setVisible] = useState(false);

    return <>
        <Header>
            <GoBackBtn black={props.black} previousPage={props.previousPage}/>
            {props.black?
                <BListIcon onClick={()=>{setVisible(true)}} textColor={props.textColor}/>
                :
                <ListIcon onClick={()=>{setVisible(true)}} textColor={props.textColor}/>
            }
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
    fill: ${props=>props.color};
`

const BListIcon = styled.img.attrs({
    src : blackList
})`
    margin-right: 24px;
    margin-top : 16px;
    fill: ${props=>props.color};
`
