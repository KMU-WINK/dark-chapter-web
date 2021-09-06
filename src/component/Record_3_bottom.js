import React from 'react';
import styled from "styled-components";

import fish from "../svg/fish.svg"

function Record_3_bottom(props){
    return(
        <Div background={props.background}>
            <Text color={props.color}>{props.floor}</Text>
            <Fish></Fish>
        </Div>
    )
}

const Div = styled.div`
    width : 100%;
    height : 400px;
    background : ${props => props.background};
    padding-top:26px
`

const Text = styled.div`
    margin-left : 24px;

    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.03em;
    font-weight : bold;
    color: ${props => props.color}
`

const Fish = styled.img.attrs({
    src : fish
})`
    margin-left : 176px;
    margin-top : 60px;
    opacity: 0.3;
`

export default Record_3_bottom;
