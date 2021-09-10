import styled from 'styled-components';
import React from "react";

const PaletteCircle = (props) => {
    console.log(props)
    const ShowCircle = () => {
        if (props.feeling.length === 1) return <Circle w={props.width} h={props.height}  deg={"50% 50%"} feeling={props.feeling[0]*8} color={props.color[0]} per={80}/>
        else if (props.feeling.length === 2) {
            return <>
                <Circle w={props.width} h={props.height} deg={"14.6% 14.6%"} feeling={(props.feeling[0]/(props.feeling[0]+props.feeling[1]))*70} color={props.color[0]} per={70}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 85.4%"} feeling={(props.feeling[1]/(props.feeling[0]+props.feeling[1]))*70} color={props.color[1]} per={70}/>
            </>
        } else if (props.feeling.length === 3) {
            return <>
                <Circle w={props.width} h={props.height}  deg={"50% 0"} feeling={(props.feeling[0]/(props.feeling[0]+props.feeling[1]+props.feeling[2]))*60} color={props.color[0]} per={65}/>
                <Circle w={props.width} h={props.height}  deg={"6.7% 75%"} feeling={(props.feeling[1]/(props.feeling[0]+props.feeling[1]+props.feeling[2]))*60} color={props.color[1]} per={65}/>
                <Circle w={props.width} h={props.height}  deg={"93.3% 75%"} feeling={(props.feeling[2]/(props.feeling[0]+props.feeling[1]+props.feeling[2]))*60} color={props.color[2]} per={65}/>
            </>
        } else if (props.feeling.length === 4) {
            return <>
                <Circle w={props.width} h={props.height}  deg={"14.6% 14.6%"} feeling={(props.feeling[0]/(props.feeling[0]+props.feeling[1]+props.feeling[2]+props.feeling[3]))*70} color={props.color[0]} per={45}/>
                <Circle w={props.width} h={props.height}  deg={"14.6% 85.4%"} feeling={(props.feeling[1]/(props.feeling[0]+props.feeling[1]+props.feeling[2]+props.feeling[3]))*70} color={props.color[1]} per={45}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 14.6%"} feeling={(props.feeling[2]/(props.feeling[0]+props.feeling[1]+props.feeling[2]+props.feeling[3]))*70} color={props.color[2]} per={45}/>
                <Circle w={props.width} h={props.height}  deg={"85.4% 85.4%"} feeling={(props.feeling[3]/(props.feeling[0]+props.feeling[1]+props.feeling[2]+props.feeling[3]))*70} color={props.color[3]} per={45}/>
            </>
        }
    }
    console.log(props)
    return <Wrap>
        <Wrap2>
            <White w={props.width} h={props.height}/>
            <ShowCircle/>
        </Wrap2>
    </Wrap>
}

export default PaletteCircle;

const Wrap = styled.div`
  display : flex;
  justify-content: center;
  position : relative;
`
const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
`

const Circle = styled.div`
  width : ${props=>props.w}px;
  height : ${props=>props.h}px;
  position : absolute;
  border-radius: 50%;
  background: radial-gradient(circle at ${props=>props.deg}, ${props=>props.color} ${props => props.feeling}%, transparent ${props=>props.per}%);
  filter: blur(4px);
  backdrop-filter: blur(20px);
  mix-blend-mode: unset;
  
  // unset, hard-light, lighten, inherit, initial
`

const White = styled.div`
  width: ${props => props.w}px;
  height: ${props => props.h}px;
  border-radius: 50%;
  position: absolute;
  background: white;
  mix-blend-mode: hard-light;
`


