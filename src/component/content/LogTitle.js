import styled from "styled-components";

const LogTitle = (props) => {
    console.log(props)
    return <Wrap className="jejugothic" textColor={props.textColor} tagColor={props.tagColor}>
        <LogDate>21.05.23</LogDate>
        <Title>썸남 앞에서 코파버렸다</Title>
        <Tags>
            <Tag tagColor={props.tagColor}>#해시</Tag>
            <Tag tagColor={props.tagColor}>#해시태그</Tag>
            <Tag tagColor={props.tagColor}>#해시태</Tag>
            <Tag tagColor={props.tagColor}>#해시</Tag>
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
  padding: 4px 8px 4px 6px;
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
