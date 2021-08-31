import React from "react"
import styled from "styled-components";

function Scale(){
    return(
        <Wrap>
            <Hr/>
            <Hr/>
            <Hr/>
            <Hr/><Hr/>



        </Wrap>
    )
}

const Wrap = styled.div`
    
    position : absolute;
    left : 0
    
`
const Hr = styled.div`
    width:32px;
    border: 1px solid ${props => props.borderColor};
    margin-top : 10px
`

export default Scale
