import React from 'react'
import styled from "styled-components";
import * as config from'../../config'

function ErrorMessage(props){
    return(

            <Message color = {config.ERROR_MSG_COLOR}>
                {props.message}
            </Message>

    )
}

const Message = styled.div`
    position : absolute;
    margin-top : 8px;
    margin-left : 12px;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.color};

`

export default ErrorMessage
