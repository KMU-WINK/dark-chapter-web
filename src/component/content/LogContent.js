import styled from "styled-components";
import {Route, Link} from 'react-router-dom';
import LogTitle from "./LogTitle";

const LogContent = (props) => {
    return <Wrap tagColor={props.tagColor} textColor={props.textColor}>
        <LogTitle title={props.title} tag={props.tag} timeStamp={props.timeStamp}
                  tagColor={props.tagColor} textColor={props.textColor}/>
        <div>
            <TextBox>{props.content}</TextBox>
            <Link style={{color: props.textColor, textDecoration: 'none'}} to={props.seeMorePage}><SeeMore>더보기</SeeMore></Link>
        </div>
    </Wrap>
}

export default LogContent;

const Wrap = styled.div`
  margin : 102px 24px 70px 24px;
  color: ${props => props.textColor};
`

const TextBox = styled.div`
  //font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  margin-top : 24px;
  height : 77px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap:break-word;
`

const SeeMore = styled.div`
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 25px;
`
