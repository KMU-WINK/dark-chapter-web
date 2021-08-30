import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import OtherHeader from "../component/header/OtherHeader";
import listView from "../svg/listView.svg";
import downArrow from '../svg/downArrow.svg'

const OtherLog = () => {
    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

    return <Wrap backgroundColor={backgroundColor[2]}>
        <OtherHeader/>
        <CategoryDiv>
            <HashTag>#</HashTag>
            <Category>썸남 썰</Category>
            <DownIcon/>
        </CategoryDiv>
        <Wrap2>
            <PaletteCircle
                width={240} height={240}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
        </Wrap2>

        <LogContent tagColor={tagColor[2]} textColor={textColor[2]}/>
    </Wrap>
}

export default OtherLog;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props=>props.backgroundColor};
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 97px;
`

const CategoryDiv = styled.div`
  margin-top : 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;

  position: absolute;
  //width: 100px;
  height: 24px;
  left: 130px;
  top: 96px;
  opacity: 0.8;
  /* Black Typo/White */

  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 12px;
`

const HashTag = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  margin : 4px;
`

const Category = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
`

const DownIcon = styled.img.attrs({
    src : downArrow
})`
  margin : 4px 2px 4px 6px;
  width : 16px;
  height : 16px;
`
