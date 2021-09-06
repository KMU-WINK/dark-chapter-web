import styled from "styled-components";
import React, {useState} from 'react';
import * as config from '../config';
import "../fonts/fonts.css"

import {
    Link
} from "react-router-dom";


import LandingPhoto from "../component/LaningModal";
import Login_1 from "./Login_1";
import Signup_1 from "./Signup_1";

function Landing_1() {
    return (
        <Container color={config.BACKGROUND_COLOR} className="jejugothic">
            <Div>
                <Text>로고</Text>
                <A to='/login'>
                    <Text>Log In</Text>
                </A>
            </Div>
            <LandingPhoto/>
        </Container>


        // <Container color = {config.BACKGROUND_COLOR}>
        //     <Div>
        //         <Text >로고</Text>
        //
        //         <Text>Log In</Text>
        //
        //     </Div>
        //     <LandingPhoto/>
        // </Container>


    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background : ${props => props.color};
`

const Div = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    margin : 0 auto;
`

const Text = styled.a`
    font-weight: bold;
    font-size: 18px;
    color : #FFFFFF;
    margin-top : 63px;
`
const A = styled(Link)`
    font-weight: bold;
    font-size: 18px;
    color : #FFFFFF;
    margin-top : 63px;
    text-decoration : none
`


export default Landing_1
