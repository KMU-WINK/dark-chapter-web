import styled from "styled-components";
import React from 'react';
import "../fonts/fonts.css";

import {
    Link
} from "react-router-dom";

import logo from "../svg/white_logo.svg";

function Landing_1() {
    return (
        <Container>
            <A to='/login' onClick={()=>console.log("login")}>
                <Text>로그인</Text>
            </A>
            <Div>
                <Logo/>
                <Span>비록 흑역사일지라도</Span>
            </Div>
            <Signup to='/signup' onClick={()=>console.log("landing")}>
                <SignupText>회원가입</SignupText>
            </Signup>

            <CircleWrap>
                <BlueCircle/>
                <RedCircle/>
                <YellowCircle/>
            </CircleWrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background : #2C2C38;
    overflow: hidden;
`

const Text = styled.a`
    margin-top: 20px;
    margin-right: 20px;
    display: block;
    font-family: PretendartVariable;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
`
const A = styled(Link)`
    width: 100%;
    text-decoration : none;
    height: 56px;
    display: block;
    text-align: right;
    position: relative;
`

const Div = styled.div`
    width: 100%;
    text-align: center;
    padding-top : 200px;
`

const Logo = styled.img.attrs({
    src: logo
})`
    display: block;
    margin: 0 auto;
    width: 80px;
    height: 16px;
    fill: white;
`

const Span = styled.span`
    font-family: PretendartVariable;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top : 12px;
    display: block;
`

const Signup = styled(Link)`
    width: 160px;
    height: 40px;
    background: rgba(234, 234, 234, 0.2);
    border-radius: 20px;
    margin: 140px auto;
    color: #FFFFFF;
    display:block;
    text-decoration : none;
    position: relative;
    z-index: 10;
`

const SignupText = styled.span`
    font-family: PretendartVariable;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    display: block;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`

const CircleWrap = styled.div`
    width: 100%;
    height: 100vh;
    z-index:5;
`

const Circle = styled.div`
    width:300px;
    height:300px;
    border-radius: 50%;
    opacity: 0.5;
    filter: blur(56px);
    position: absolute;
`

const BlueCircle = styled(Circle)`
    background: #46679D;
    left: 80px;
    filter: blur(30px);
    bottom: -100px;
`
const RedCircle = styled(Circle)`
    left: -120px;
    bottom: -80px;
    filter: blur(40px);
    background: #FE4E62;
`
const YellowCircle = styled(Circle)`
    width: 375px;
    height: 375px;
    left: -80px;
    bottom: 40px;
    background: #FFE9CF;
`

export default Landing_1
