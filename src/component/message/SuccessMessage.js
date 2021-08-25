import React from 'react'
import styled from "styled-components";

function SuccessMessage(props){
    return(
        <>
            <Message>
                {props.message}
            </Message>
        </>
    )
}

const Message = styled.div`
    margin-top : 8px;
    margin-left : 12px;

    font-size: 12px;
    line-height: 16px;
    color: #43BC48;

`

export default SuccessMessage
