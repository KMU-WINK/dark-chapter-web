import styled from 'styled-components';
import LogContent from "../component/content/LogContent";
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";

const Progress = () => {
    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#e9e9e9","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

    return <Wrap backgroundColor={backgroundColor[1]}>
            <ContentHeader textColor={textColor[0]}/>

            <Wrap2>
                <PaletteCircle
                    width={240} height={240}
                    deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                    feeling={[20,10,20,50]}
                />
            </Wrap2>

            <LogContent tagColor={tagColor[1]} textColor={textColor[1]}/>
    </Wrap>
}

export default Progress

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


