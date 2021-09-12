import styled from 'styled-components';
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import LogMoreContent from "../component/content/LogMoreContent";
import {useLocation} from "react-router";

const SeeMoreContent = () => {
    const location = useLocation();
    console.log(location.state)

    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#EAEAEA","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

    return <Wrap background={backgroundColor[2]}>
        <ContentHeader
            state={"share"}
            previousPage={'/myLog'}
            data={{
                title: location.state.title,
                content: location.state.content,
                tag: location.state.tag,
                date: location.state.timestamp
            }}
        />
        <Wrap2>
            <PaletteCircle
                width={120} height={120}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
        </Wrap2>
        <Wrap3>
            <LogMoreContent status={"MyLog"} tagColor={tagColor[2]} textColor={textColor[2]}
                            title={location.state.title}
                            tag={location.state.tag}
                            content={location.state.content}
            />
        </Wrap3>
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
const Wrap3 = styled.div`
  margin-top : 180px;
`
