import styled from "styled-components";
import GoBack from "../svg/goBack_black.svg";
import GemstoneCircle from "../component/circle/GemstoneCircle";

const GemstoneList = () => {
    return <>
        <Header>
            <Icon/>
            <Text>원석함</Text>
        </Header>

        <Log>
            <GemstoneCircle/>
        </Log>
    </>
}

export default GemstoneList;

const Header = styled.div`
  height: 56px;
  display : flex;
  justify-content: start;
`

const Icon = styled.img.attrs({
    src : GoBack
})`
    margin-left : 24px;
    margin-top : 16px;
    width: 24px;
    height: 24px;
`

const Text = styled.span`
  margin-left : 6px;
  margin-top : 10px;
  height: 32px;
      
  font-family: JejuGothic;
  font-style: normal; 
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.03em;
`

const Log = styled.div`
  display : flex;
  justify-content: center;
`
