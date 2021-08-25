import React from 'react'
import styled from "styled-components";

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
`

export default ActiveBtn
