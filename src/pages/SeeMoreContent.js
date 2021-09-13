import styled from 'styled-components';
import ContentHeader from "../component/header/ContentHeader";
import PaletteCircle from "../component/circle/PaletteCircle";
import LogMoreContent from "../component/content/LogMoreContent";
import {useLocation} from "react-router-dom";

const SeeMoreContent = () => {
    const location = useLocation();
    console.log(location.state)
    const backgroundColor = ["#d1d9de","#96a1b1","#2c2d39"]
    const tagColor = ["#EAEAEA","#EAEAEA","#ABABAF"]
    const textColor = ["#000","#fff","#fff"]

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
            width={120} height={120}
            color={color}
            feeling={feeling}
        />
    }

    return <Wrap background={backgroundColor[location.state.depth]}>
        <ContentHeader state={"share"} previousPage={'/myLog'} data={location.state}/>
        <Wrap2>
            <SetCircle data={location.state.state}/>
        </Wrap2>
        <Wrap3>
            <LogMoreContent status={"MyLog"} tagColor={tagColor[location.state.depth]} textColor={textColor[location.state.depth]}
                            data={location.state.state}
                            title={location.state.state.title}
                            tag={location.state.state.tag}
                            content={location.state.state.content}
                            timeStamp={location.state.state.createdAt.split('T')[0]}
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
