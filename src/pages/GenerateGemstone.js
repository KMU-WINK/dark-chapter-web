import PaletteCircle from "../component/circle/PaletteCircle";
import styled, { keyframes } from "styled-components";
import {useHistory, useLocation} from "react-router-dom";

const GenerateGemstone = () => {
    const history = useHistory();
    const location = useLocation();

    const SetCircle = (props) => {
        let feeling = [];
        let color = [];

        if (props.data.angry>0) {
            feeling.push(props.data.angry);
            color.push("#FE4E62");
        }
        if (props.data.shameful>0) {
            feeling.push(props.data.shameful);
            color.push("#FFF9D9");
        }
        if (props.data.gloomy>0) {
            feeling.push(props.data.gloomy);
            color.push("#466598");
        }
        if (props.data.funny>0) {
            feeling.push(props.data.funny);
            color.push("#FDADA6");
        }
        return <PaletteCircle
            width={240} height={240}
            color={color}
            feeling={feeling}
        />
    }

    setTimeout(function() {
        history.push('/gotoGemstone');
    }, 5000);

    return <Wrap>
        <Wrap1>
            <Wrap2>
                <PaletteCircle
                    width={240} height={240}
                    deg={["14% 14%", "14% 86%", "86% 14%", "86% 86%"]}
                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                    feeling={[28,14,21,7]}
                />
            </Wrap2>
        </Wrap1>
    </Wrap>
}

export default GenerateGemstone;

const FadeOut = keyframes`
    0% { opacity: 0; }
    30% { opacity: 1; }
    100% { opacity: 0; }
`
const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: absolute;
  background: #F3F3ED;
`

const Wrap1 = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: #2C2C38;
  animation: ${FadeOut} 5s;
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  padding-top: 240px;
`
