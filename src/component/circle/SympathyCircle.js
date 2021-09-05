import styled from 'styled-components';

const SympathyCircle = (props) => {

    const ShowSympathyCircle = () => {
        if (props.feeling.length === 1) return <>
            <Black backgroundColor={props.backgroundColor}/>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2}
                l={60-Math.min((72/50)*props.feeling[0],72)/2}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)}
            />
        </>
        else if (props.feeling.length === 2) return <>
            <Black backgroundColor={props.backgroundColor}/>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2}
                l={90-Math.min((72/50)*props.feeling[0],72)/2}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)}
            />
            <Circle
                size={Math.min(160+((80/50)*props.feeling[1]),240)}
                t={Math.max(156-((30/50)*props.feeling[1]),126)-Math.min((80/50)*props.feeling[1],80)/2}
                l={30-Math.min((80/50)*props.feeling[1],80)/2}
                color={props.color[1]} blur={Math.min(70+props.feeling[1],120)}
            />
        </>

        else if (props.feeling.length === 3) return <>
            <Black backgroundColor={props.backgroundColor}/>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2}
                l={90-Math.min((72/50)*props.feeling[0],72)/2}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)/2}
            />
            <Circle
                size={Math.min(160+((80/50)*props.feeling[1]),240)}
                t={Math.max(156-((30/50)*props.feeling[1]),126)-Math.min((80/50)*props.feeling[1],80)/2}
                l={30-Math.min((80/50)*props.feeling[1],80)/2}
                color={props.color[1]} blur={Math.min(70+props.feeling[1],120)/2}
            />
            <Circle
                size={Math.min(120+((64/50)*props.feeling[2]),184)}
                t={240-Math.min((64/50)*props.feeling[2],64)/2}
                l={160-Math.min((64/50)*props.feeling[2],64)/2}
                color={props.color[2]} blur={Math.min(60+(40/50)*props.feeling[2],100)/2}
            />
        </>

        else if (props.feeling.length === 4) return <>
            <Black backgroundColor={props.backgroundColor}/>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2}
                l={90-Math.min((72/50)*props.feeling[0],72)/2}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)/2}
            />
            <Circle
                size={Math.min(160+((80/50)*props.feeling[1]),240)}
                t={Math.max(156-((30/50)*props.feeling[1]),126)-Math.min((80/50)*props.feeling[1],80)/2}
                l={30-Math.min((80/50)*props.feeling[1],80)/2}
                color={props.color[1]} blur={Math.min(70+props.feeling[1],120)/2}
            />
            <Circle
                size={Math.min(120+((64/50)*props.feeling[2]),184)}
                t={240-Math.min((64/50)*props.feeling[2],64)/2}
                l={160-Math.min((64/50)*props.feeling[2],64)/2}
                color={props.color[2]} blur={Math.min(60+(40/50)*props.feeling[2],100)/2}
            />
            <Circle
                size={Math.min(88+((32/50)*props.feeling[3]),120)}
                t={296-Math.min((32/50)*props.feeling[3],32)/2}
                l={100-Math.min((32/50)*props.feeling[3],32)/2}
                color={props.color[3]} blur={Math.min(70+(25/50)*props.feeling[3],95)/2}
            />
        </>
    }

    return <Wrap>
        <ShowSympathyCircle/>
    </Wrap>
 }

export default SympathyCircle;

const Wrap = styled.div`
  position : absolute;
  top : 0;
  left : 0;
`

const Circle = styled.div`
  position : absolute;
  top : ${props=>props.t}px;
  left : ${props=>props.l}px;
  width : ${props=>props.size}px;
  height : ${props=>props.size}px;
  border-radius: 50%;
  background: ${props=>props.color};
  filter: blur(${props=>props.blur}px);
`
const Black = styled.div`
  position : absolute;
  left: 60px;
  top: 153px;
  z-index : 10;
  position: absolute;
  width : 240px;
  height : 240px;
  border-radius: 50%;
  background: ${props=>props.backgroundColor};
  filter : blur(3px);
`
