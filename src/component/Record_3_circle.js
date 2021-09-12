import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import PaletteCircle from "./circle/PaletteCircle";

function Record_3_circle(props){
    const SetCircle = () => {
        let feeling = [];
        let color = [];

        if (props.emotion[0]>0) {
            feeling.push(props.emotion[0]);
            color.push("#FE4E62");
        }
        if (props.emotion[1]>0) {
            feeling.push(props.emotion[1]);
            color.push("#FFF9D9");
        }
        if (props.emotion[2]>0) {
            feeling.push(props.emotion[2]);
            color.push("#466598");
        }
        if (props.emotion[3]>0) {
            feeling.push(props.emotion[3]);
            color.push("#FDADA6");
        }
        return <PaletteCircle
            width={160} height={160}
            color={color}
            feeling={feeling}
        />
    }
    return(
        <Div>
            <SetCircle data={props.emotion}/>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 160px;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    top:50%;
    transform: translateY(-50%);
`

// const Circle = styled.div`
//     width: 160px;
//     height: 160px;
//     border: 1px solid red;
//     border-radius: 50%;
//     display: inline-block
// `


export default Record_3_circle;
