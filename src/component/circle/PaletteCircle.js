import styled from 'styled-components';
import React from "react";

const PaletteCircle = (props) => {
    console.log(props)
    const ShowCircle = () => {
        if (props.feeling.length === 1) return <Circle w={props.width} h={props.height}  deg={"50% 0"} feeling={props.feeling[0]} color={props.color[0]}/>
        else if (props.feeling.length === 2) {
            return <>
                <Circle w={props.width} h={props.height} deg={"14.6% 14.6%"} feeling={props.feeling[0]} color={props.color[0]}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 85.4%"} feeling={props.feeling[1]} color={props.color[1]}/>
            </>
        } else if (props.feeling.length === 3) {
            return <>
                <Circle w={props.width} h={props.height}  deg={"50% 0"} feeling={props.feeling[0]} color={props.color[0]}/>
                <Circle w={props.width} h={props.height}  deg={"6.7% 75%"} feeling={props.feeling[1]} color={props.color[1]}/>
                <Circle w={props.width} h={props.height}  deg={"93.3% 75%"} feeling={props.feeling[2]} color={props.color[2]}/>
                <Circle w={props.width} h={props.height}  deg={"93.3% 75%"} feeling={props.feeling[2]} color={props.color[2]}/>
            </>
        } else if (props.feeling.length === 4) {
            return <>
                <Circle w={props.width} h={props.height}  deg={"14.6% 14.6%"} feeling={props.feeling[0]} color={props.color[0]}/>
                <Circle w={props.width} h={props.height}  deg={"14.6% 85.4%"} feeling={props.feeling[1]} color={props.color[1]}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 14.6%"} feeling={props.feeling[2]} color={props.color[2]}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 14.6%"} feeling={props.feeling[2]} color={props.color[2]}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 85.4%"} feeling={props.feeling[3]} color={props.color[3]}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 85.4%"} feeling={props.feeling[3]} color={props.color[3]}/>
            </>
        }
    }
    return <Wrap>
        {/*<Circle*/}
        {/*    w={props.width} h={props.height}*/}
        {/*    colorGradient={colorGradient}*/}
        {/*/>*/}
        <ShowCircle/>
    </Wrap>
}

export default PaletteCircle;

const Wrap = styled.div`
  display : flex;
  justify-content: center;
  position : relative;
  background : black;
  width : ${props=>props.w}px;
  height : ${props=>props.h}px;
`
const Circle = styled.div`
  width : ${props=>props.w}px;
  height : ${props=>props.h}px;
  position : absolute;
  border-radius: 50%;
  background: radial-gradient(circle at ${props=>props.deg}, ${props=>props.color} ${props => props.feeling}%, transparent 70.71%);
  filter: blur(4px);
  backdrop-filter: blur(20px);
  //mix-blend-mode: soft-light;
`

const White = styled.div`
  background : white;
  width : ${props=>props.w}px;
  position : absolute;
  height : ${props=>props.h}px;
  z-index : -1;
  mix-blend-mode : normal;
`


