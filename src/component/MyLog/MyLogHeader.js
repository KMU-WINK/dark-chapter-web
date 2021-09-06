import React from 'react';
import styled from "styled-components";

import arrow from "../../svg/arrow.svg"
import jewelry from "../../svg/jewelry-box.svg"

import "../../fonts/fonts.css"


function MyLogHeader(){
    return(
        <Wrap>
            <Header className="jejugothic">
                <Div>
                    <Icon/>
                    <MyLogText>My_log</MyLogText>
                </Div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    padding-left: 24px;
`

const Icon = styled.img.attrs({
    src : arrow
})`
    padding-right: 8px;
`

const MyLogText = styled.span`
    
    width: 67px;
    height: 32px;
    
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
    
    width: 24px;
    height: 24px;
    padding-right: 16px;
`



export default MyLogHeader
