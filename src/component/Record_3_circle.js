import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import PaletteCircle from "./circle/PaletteCircle";

function Record_3_circle(){
    return(

        <Div>
            <PaletteCircle
                width={160} height={160}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
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
