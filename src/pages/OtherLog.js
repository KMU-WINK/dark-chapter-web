import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import PaletteCircle from "../component/circle/PaletteCircle";
import OtherHeader from "../component/header/OtherHeader";
import SelectCategory from "../component/content/SelectCategory";

const OtherLog = () => {
    const backgroundColor = "#2c2d39"
    const tagColor = "#ABABAF"
    const textColor = "#fff"

    return <Wrap backgroundColor={backgroundColor}>
        <OtherHeader previousPage={'/home'} list={true}/>
        <Wrap1>
            <SelectCategory/>
        </Wrap1>
        <Wrap2>
            <PaletteCircle
                width={240} height={240}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[3,2,2,3]}
            />
        </Wrap2>
        <Wrap3>
            <LogContent date={false} seeMorePage={'/other/seeMore'} tagColor={tagColor} textColor={textColor}/>
        </Wrap3>
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
const Wrap3 = styled.div`
  margin-top : 300px;
`
