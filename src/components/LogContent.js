import styled from "styled-components";

const LogContent = () => {
    return <>
        <LogDate>21.05.23</LogDate>
        <Title>썸남 앞에서 코파버렸다</Title>
        <Tags>
            <Tag>#해시</Tag>
            <Tag>#해시태그</Tag>
            <Tag>#해시태</Tag>
            <Tag>#해시</Tag>
        </Tags>
        <TextBox>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</TextBox>
        <SeeMore>더보기</SeeMore>
    </>
}

export default LogContent;

const LogDate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
`

const Title = styled.div`
  font-family: JejuGothic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
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
  background: #ABABAF;
  border-radius: 16px;
  margin-right : 8px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
`

const TextBox = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: #FFFFFF;
  margin-top : 24px;
`

const SeeMore = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: #FFFFFF;
`
