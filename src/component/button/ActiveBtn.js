import React from 'react'
import styled from "styled-components";

import "../../fonts/fonts.css"

function ActiveBtn(props){
    console.log(props)
    return(
        <>
            <NextBtn onClick={()=>{

               props.check()


            }}>
                {props.text}
            </NextBtn>
        </>
    )
}

const NextBtn = styled.button`
    background: #FFFFFF;
    width: 112px;
    height: 40px;
    border-radius: 60px;
    font-size: 16px;
    margin : 0 auto;
    display : block;
    background: #FFFFFF;
    font-weight: 700;
    font-family: PretendartVariable;
    color: #000000
`

export default ActiveBtn
