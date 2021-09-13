import ContentHeader from "../../component/header/ContentHeader";
import PaletteCircle from "../../component/circle/PaletteCircle";
import LogMoreContent from "../../component/content/LogMoreContent";
import styled from "styled-components";
import GemstoneCircle from "../../component/circle/GemstoneCircle";
import "../../fonts/fonts.css"
import {useLocation} from "react-router-dom";

const GemstoneLog = (props) => {
    const location = useLocation();

    return <Wrap className="jejugothic">
        <ContentHeader black={true} state={"none"} previousPage={'/gemstone'}/>

        <Wrap2>
            <GemstoneCircle
                size={100}
                sympathyFeeling={location.state.sf}
                sympathyColor={location.state.sc}
                black={false}

                width={100} height={100}
                paletteColor={location.state.pc}
                paletteFeeling={location.state.pf}
            />
        </Wrap2>

        <Wrap1>
            <LogMoreContent state={"none"} tagColor={"#fff"}
                            timeStamp = {location.state.state.createdAt.split('T')[0]}
                            title={location.state.state.title}
                            tag={location.state.state.tag}
                            content={location.state.state.content}
            />
        </Wrap1>
    </Wrap>
}

export default GemstoneLog;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F3F3ED;
`
const Wrap1 = styled.div`
 margin-top : 90px;
`

const Wrap2 = styled.div`
  margin-top : 30px;
  display : flex;
  justify-content: center;
  height : 90px;
`
