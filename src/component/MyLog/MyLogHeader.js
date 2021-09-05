import React from 'react';
import styled from "styled-components";

import arrow from "../../svg/arrow.svg"
import jewelry from "../../svg/jewelry-box.svg"

import "../../fonts/fonts.css"


function MyLogHeader(){
    return(
        <Wrap>
            <Header className="jejugothic">
                <Icon/>
                <MyLogText>My_log</MyLogText>
                <Jewelry/>
            </Header>
        </Wrap>
    )
}
const Wrap = styled.div`
    width : 100%;
    height : 56px;

`

const Header = styled.div`
    width : 100%;
    height : 56px;
    position:relative;
`

const Icon = styled.img.attrs({
    src : arrow
})`
    position : absolute;
    left: 24px;
    top: 16px;
`

const MyLogText = styled.span`
    position: absolute;
    width: 67px;
    height: 32px;
    left: 56px;
    top: 12px;
    font-family: JejuGothic;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.03em;
`

const Jewelry = styled.img.attrs({
    src : jewelry
})`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 312px;
    top: 15.49px;
`



export default MyLogHeader
