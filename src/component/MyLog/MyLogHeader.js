import React, {useEffect} from 'react';
import styled from "styled-components";
import arrow from "../../svg/arrow.svg";
import white_arrow from "../../svg/white_arrow.svg";
import jewelry from "../../svg/jewelry-box.svg";
import white_jewelry from "../../svg/white_jewerly.svg"

import "../../fonts/fonts.css";
import {useHistory} from "react-router-dom";


function MyLogHeader(props) {
    useEffect(()=>{
        console.log(props.color)
    },[props.color])

    const history = useHistory();
    return (
        <Header className={"jejugothic"} width={document.documentElement.clientWidth}>
            <Div>
                <Icon onClick={() => history.push('/home')} bg={props.color === "#FFFFFF"?white_arrow:arrow}/>
                <MyLogText color={props.color}>My_log</MyLogText>
            </Div>
            <Jewelry onClick={() => {
                history.push('/gemstone')
            }}
                     bg={props.color === "#FFFFFF"?white_jewelry:jewelry}
            />
        </Header>
    )
}

const Header = styled.div`
    width : ${props=>props.width}px;
    height : 56px;
    position:fixed;
    top:0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:1;
    backdrop-filter: blur(1006px);

`

const Div = styled.div`
    
    display: flex;
    align-items: center;
    padding-left: 24px;
`

const Icon = styled.img.attrs(props => ({
    src: props.bg
}))`
    padding-right: 8px;
`;


const MyLogText = styled.span`
    width: 67px;
    height: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.03em;
    color:${props=>props.color}
`

const Jewelry = styled.img.attrs(props => ({
    src: props.bg
}))`
    width: 24px;
    height: 24px;
    padding-right: 16px;
`;


export default MyLogHeader
