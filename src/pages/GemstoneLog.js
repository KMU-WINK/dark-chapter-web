import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import LogMoreContent from "../component/content/LogMoreContent";
import styled from "styled-components";
import GemstoneCircle from "../component/circle/GemstoneCircle";
import "../fonts/fonts.css"

const GemstoneLog = (props) => {
    return <Wrap className="jejugothic">
        <ContentHeader black={true} state={"none"} previousPage={'/gemstone'}/>

        <Wrap2>
            <GemstoneCircle
                size={100}
                sympathyFeeling={[50,30,27,20]}
                sympathyColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                black={false}

                width={100} height={100}
                paletteColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                paletteFeeling={[4,1,3,2]}
            />
        </Wrap2>

        <Wrap1>
            <LogMoreContent state={"none"} tagColor={"#fff"}
                            timeStamp = {"21.05.23 ~ 21.06.23"}
                            title={"gemstoneLog의 title"}
                            tag={["해시", "내용"]}
                            content={"gemstoneLog의 content"}
            />
        </Wrap1>
    </Wrap>
}

export default GemstoneLog;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F3F3ED;
  isolation: isolate;
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
