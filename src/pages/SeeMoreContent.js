import styled from 'styled-components';
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import LogMoreContent from "../component/content/LogMoreContent";

const SeeMoreContent = () => {
    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#EAEAEA","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

    return <Wrap background={backgroundColor[0]}>
        <ContentHeader state={"share"}/>
        <Wrap2>
            <PaletteCircle
                width={120} height={120}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
        </Wrap2>
        <LogMoreContent tagColor={tagColor[0]} textColor={textColor[0]}/>
    </Wrap>
}

export default SeeMoreContent;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props=>props.background};
`

const Wrap2 = styled.div`
  margin-top : 52px;
`
