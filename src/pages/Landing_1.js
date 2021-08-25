import styled from "styled-components";
import React, { useState } from 'react';
import * as config from '../config'

import LandingPhoto from "../component/LaningPhoto";

function Landing_1(){
    return(
        <Container color = {config.BACKGROUND_COLOR}>
            <Div>
                <Text>로고</Text>
                <Text>Log In</Text>
            </Div>
            <LandingPhoto></LandingPhoto>
        </Container>
    )
}

const Container = styled.div`
    width: 360px;
    height: 760px;
    background : ${props => props.color};
`

const Div = styled.div`
    display : flex;
    justify-content : space-between;
    width : 320px;
    margin : 0 auto;
`

const Text = styled.span`
    font-weight: bold;
    font-size: 18px;
    color : #FFFFFF;
    margin-top : 63px
`

export default Landing_1
