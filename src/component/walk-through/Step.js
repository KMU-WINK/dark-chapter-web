import styled from "styled-components";
import React from 'react';

function Step(props){
    console.log(props.step)
    return(
        <Container>
            <Div>
                <Circle opacity={props.step[0]}></Circle>
                <Circle opacity={props.step[1]}></Circle>
                <Circle opacity={props.step[2]}></Circle>
                <Circle opacity={props.step[3]}></Circle>

            </Div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin:0 auto;
    position: relative;
`

const Div = styled.div`
    width: 100%;
    padding-top: 82px;
    display: flex;
    justify-content: center;
    margin-left: -8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
`

const Circle = styled.div`
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    margin-left: 8px;
    opacity: ${props=>props.opacity}
`
export default Step
