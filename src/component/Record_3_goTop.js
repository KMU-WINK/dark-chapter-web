import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import goTop from "../svg/goTop.svg"

import "../fonts/fonts.css"

function Record_3_goTop(props){

    return(

        <Wrap>
            <Div onClick={() => props.click()}>
                <Icon/>
                <Text>맨 위로 올라가기</Text>
            </Div>
        </Wrap>
    )
}

const Wrap = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24px;
    // top: 670px;
`

const Div = styled.div`
    width: 131px;
    height: 24px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: PretendartVariable;
`

const Icon = styled.img.attrs({
    src: goTop
})`
`

const Text = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    margin-left: -8px;
`


export default Record_3_goTop;
