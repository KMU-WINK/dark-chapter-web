import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import PaletteCircle from "../component/circle/PaletteCircle";
import OtherHeader from "../component/header/OtherHeader";
import SelectCategory from "../component/content/SelectCategory";

const OtherLog = () => {
    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

    return <Wrap backgroundColor={backgroundColor[2]}>
        <OtherHeader previousPage={'/home'}/>
        <Wrap1>
            <SelectCategory/>
        </Wrap1>
        <Wrap2>
            <PaletteCircle
                width={240} height={240}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
        </Wrap2>
        <LogContent seeMorePage={'/other/seeMore'} tagColor={tagColor[2]} textColor={textColor[2]}/>
    </Wrap>
}

export default OtherLog;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props=>props.backgroundColor};
`
const Wrap1 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 16px;
`
const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 56px;
`
