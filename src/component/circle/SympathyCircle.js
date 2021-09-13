import styled, { keyframes } from 'styled-components';

const SympathyCircle = (props) => {

    const ShowSympathyCircle = () => {
        let value = {
            one : {
                size : 1,
                top : 0,
                left : 0,
                blur : 2,
            },
            else : {
                size : 1,
                top : [0,0,0,0],
                left : [0,0,0,0],
                blur : 2,
            },
        };
        if (props.size === 85 || props.size === 100) value = {
                                                        one : {
                                                            size : 4,
                                                            top : 80,
                                                            left : 15,
                                                            blur : 5,
                                                        },
                                                        else : {
                                                            size : 4,
                                                            top : [70,80,160,210],
                                                            left : [25,5,90,70],
                                                            blur : 5,
                                                        },
                                                    };
        if (props.size === 100) {
            value.one.size = 3;
            value.else.size = 3;
        }

        if (props.feeling.length === 1) return <>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)/value.one.size}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2-value.one.top}
                l={75-Math.min((72/50)*props.feeling[0],72)/2-value.one.left}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)/value.one.blur}
            />
        </>
        else if (props.feeling.length === 2) return <>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)/value.else.size}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2-value.else.top[0]}
                l={90-Math.min((72/50)*props.feeling[0],72)/2-value.else.left[0]}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)/value.else.blur}
            />
            <Circle
                size={Math.min(160+((80/50)*props.feeling[1]),240)/value.else.size}
                t={Math.max(156-((30/50)*props.feeling[1]),126)-Math.min((80/50)*props.feeling[1],80)/2-value.else.top[1]}
                l={30-Math.min((80/50)*props.feeling[1],80)/2-value.else.left[1]}
                color={props.color[1]} blur={Math.min(70+props.feeling[1],120)/value.else.blur}
            />
        </>

        else if (props.feeling.length === 3) return <>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)/value.else.size}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2-value.else.top[0]}
                l={90-Math.min((72/50)*props.feeling[0],72)/2-value.else.left[0]}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)/value.else.blur}
            />
            <Circle
                size={Math.min(160+((80/50)*props.feeling[1]),240)/value.else.size}
                t={Math.max(156-((30/50)*props.feeling[1]),126)-Math.min((80/50)*props.feeling[1],80)/2-value.else.top[1]}
                l={30-Math.min((80/50)*props.feeling[1],80)/2-value.else.left[1]}
                color={props.color[1]} blur={Math.min(70+props.feeling[1],120)/value.else.blur}
            />
            <Circle
                size={Math.min(120+((64/50)*props.feeling[2]),184)/value.else.size}
                t={240-Math.min((64/50)*props.feeling[2],64)/2-value.else.top[2]}
                l={160-Math.min((64/50)*props.feeling[2],64)/2-value.else.left[2]}
                color={props.color[2]} blur={Math.min(60+(40/50)*props.feeling[2],100)/value.else.blur}
            />
        </>

        else if (props.feeling.length === 4) return <>
            <Circle
                size={Math.min(200+((72/50)*props.feeling[0]),272)/value.else.size}
                t={Math.max(136-((40/50)*props.feeling[0]),96)-Math.min((72/50)*props.feeling[0],72)/2-value.else.top[0]}
                l={90-Math.min((72/50)*props.feeling[0],72)/2-value.else.left[0]}
                color={props.color[0]} blur={Math.min(70+props.feeling[0],120)/value.else.blur}
            />
            <Circle
                size={Math.min(160+((80/50)*props.feeling[1]),240)/value.else.size}
                t={Math.max(156-((30/50)*props.feeling[1]),126)-Math.min((80/50)*props.feeling[1],80)/2-value.else.top[1]}
                l={30-Math.min((80/50)*props.feeling[1],80)/2-value.else.left[1]}
                color={props.color[1]} blur={Math.min(70+props.feeling[1],120)/value.else.blur}
            />
            <Circle
                size={Math.min(120+((64/50)*props.feeling[2]),184)/value.else.size}
                t={240-Math.min((64/50)*props.feeling[2],64)/2-value.else.top[2]}
                l={160-Math.min((64/50)*props.feeling[2],64)/2-value.else.left[2]}
                color={props.color[2]} blur={Math.min(60+(40/50)*props.feeling[2],100)/value.else.blur}
            />
            <Circle
                size={Math.min(88+((32/50)*props.feeling[3]),120)/value.else.size}
                t={296-Math.min((32/50)*props.feeling[3],32)/2-value.else.top[3]}
                l={100-Math.min((32/50)*props.feeling[3],32)/2-value.else.left[3]}
                color={props.color[3]} blur={Math.min(70+(25/50)*props.feeling[3],95)/value.else.blur}
            />
        </>
    }

    return <All>
        <Wrap>
            {props.black?
                <Black backgroundColor={props.backgroundColor}/>
                : null
            }
            <ShowSympathyCircle/>
        </Wrap>
    </All>
 }

export default SympathyCircle;

const FadeOut = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`
const All = styled.div`
  position: relative;
`
const Wrap = styled.div`
  position : absolute;
  top : 3px;
  left : -120px;
`

const Circle = styled.div`
  animation: ${FadeOut} 1s ;
  position : absolute;
  top : ${props=>props.t-135}px;
  left : ${props=>props.l-60}px;
  width : ${props=>props.size}px;
  height : ${props=>props.size}px;
  border-radius: 50%;
  background: ${props=>props.color};
  filter: blur(${props=>props.blur}px);
  
`
const Black = styled.div`

  position : absolute;
  //left: 60px;
  //top: 153px;
  z-index : 10;
  width : 240px;
  height : 240px;
  border-radius: 50%;
  background: ${props=>props.backgroundColor};
  filter : blur(3px);
`
