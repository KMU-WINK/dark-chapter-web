import styled from "styled-components";
import UpArrow from '../../svg/upArrow.svg';
import listView from '../../svg/listView.svg';
import {useHistory} from "react-router-dom";

const OtherHeader = (props) => {
    const history = useHistory();
    return <>
        <Wrap className={"jejugothic"}>
            <Wrap2>
                <UpArrowIcon onClick={()=>{history.push(props.previousPage)}}/>
                <HeaderText>공감하기</HeaderText>
            </Wrap2>
            {props.list?
                <ListViewIcon onClick={()=>{history.push('/other')}}/>
                :
                null
            }
        </Wrap>
    </>
}

export default OtherHeader;

const Wrap = styled.div`
  height : 56px;
  display : flex;
  justify-content: space-between;
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
`

const UpArrowIcon = styled.img.attrs({
    src : UpArrow
})`
    margin-left: 24px;
    margin-top : 16px;
    width : 24px;
    height : 24px;
`

const HeaderText = styled.div`
  margin : 12px 0 0 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #FFFFFF;
`
const ListViewIcon = styled.img.attrs({
        src : listView
    })`
    margin-right: 24px;
    margin-top : 16px;
    width : 24px;
    height : 24px;
`
