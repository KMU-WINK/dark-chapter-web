import styled from "styled-components";
import {useState} from "react";

const LogTitle = (props) => {
    const [title, setTitle] = useState(props.title);
    const [tag, setTag] = useState(props.tag);
    const [timeStamp, setTimeStamp] = useState(props.timeStamp);

    return <Wrap className="jejugothic" textColor={props.textColor} tagColor={props.tagColor}>
        {props.timeStamp !== ""?
            <LogDate>{timeStamp}</LogDate>
            :
            null
        }
            <Title>{props.title}</Title>
        <Tags>
            {tag.map((tag)=><Tag tagColor={props.tagColor}># {tag}</Tag>)}
        </Tags>
    </Wrap>
}

export default LogTitle;

const Wrap = styled.div`
  color: ${props=>props.textColor};
`

const LogDate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin-top : 8px;
`

const Tags = styled.div`
  display : flex;
  justify-content: start;
  margin-top : 16px;
  height : 18px;
`

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1px 8px 1px 6px;
  height: 18px;
  background: ${props=>props.tagColor};
  border-radius: 16px;
  margin-right : 8px;
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color : black;
`
