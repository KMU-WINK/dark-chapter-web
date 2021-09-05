import React from 'react'
import styled from "styled-components";

import "../../fonts/fonts.css"

function InactiveBtn(props){
    return(
        <>
            <DisableNextBtn disabled onClick={()=>{
                console.log("click")}
            }>
                {props.text}
            </DisableNextBtn>
        </>
    )
}


const DisableNextBtn = styled.button`
    width: 112px;
    height: 40px;
    border-radius: 60px;
    font-size: 16px;
    margin : 0 auto;
    display : block;
    background: #747474;
    font-weight: 700;
    font-family: PretendartVariable;
    color: #95959A
`
export default InactiveBtn
