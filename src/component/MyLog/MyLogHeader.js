import React from 'react';
import styled from "styled-components";
import arrow from "../../svg/arrow.svg";
import jewelry from "../../svg/jewelry-box.svg";

import "../../fonts/fonts.css";
import {useHistory} from "react-router-dom";


function MyLogHeader() {
    const history = useHistory();
    return (
        <Header className={"jejugothic"}>
            <Div>
                <Icon onClick={() => history.push('/home')}/>
                <MyLogText>My_log</MyLogText>
            </Div>
            <Jewelry onClick={() => {
                history.push('/gemstone')
            }}/>
        </Header>
    )
}

const Header = styled.div`
    width : 100%;
    height : 56px;
    position:fixed;
    top:0;
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
    src: arrow
})`
    padding-right: 8px;
`

const MyLogText = styled.span`
    width: 67px;
    height: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.03em;
`

const Jewelry = styled.img.attrs({
    src: jewelry
})`
    
    width: 24px;
    height: 24px;
    padding-right: 16px;
`


export default MyLogHeader
