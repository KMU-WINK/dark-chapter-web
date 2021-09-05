import styled from "styled-components";
import React from 'react';
import "../../fonts/fonts.css"

function WalkThoughText(props){
    return(
        <Container className="jejugothic">
            <p>{props.text[0]}</p>
            <p>{props.text[1]}</p>
            <p>{props.text[2]}</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    font-family: JejuGothic;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;


letter-spacing: -0.03em;

color: #FFFFFF;

padding-left: 36px;
padding-top : 72px
`

export default WalkThoughText
