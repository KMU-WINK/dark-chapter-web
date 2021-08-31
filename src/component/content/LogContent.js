import styled from "styled-components";
import { Route, Link } from 'react-router-dom';
import LogTitle from "./LogTitle";

const LogContent = (props) => {
    return <Wrap tagColor={props.tagColor} textColor={props.textColor}>
        <LogTitle tagColor={props.tagColor} textColor={props.textColor}/>
        <TextBox>hjhjkj하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</TextBox>
        <Link style={{color:props.textColor, textDecoration: 'none'}} to={props.seeMorePage}><SeeMore>더보기</SeeMore></Link>
    </Wrap>
}

export default LogContent;

const Wrap = styled.div`
  margin : 102px 24px 70px 24px;
  color: ${props=>props.textColor};
`

const TextBox = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  margin-top : 24px;
  height : 77px;
  overflow : hidden;
`

const SeeMore = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
`
