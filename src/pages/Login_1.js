import styled from "styled-components";
import React, {useState} from 'react';
import * as config from '../config'
import * as user_service from '../axios/user-service';
import {useHistory} from 'react-router-dom';
import { inject, observer } from 'mobx-react'

import SignupText from "../component/signup/SignupText";
import LoginInput from "../component/login/LoginInput";
import GoBackBtn from "../component/button/GoBackBtn";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";

import "../fonts/fonts.css"
import {set} from "mobx";


function Login_1() {
    const history = useHistory();
    const [isActive, setIsActive] = useState(false);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")

    const login = async () => {
        const result = await user_service.login({
            email:email,
            password:password
        })
        // result 402 : invalid email, 403: invalid password, 200 success
        console.log(result)
        if(result === 402) {
            setEmailMessage("등록된 이메일이 아닙니다.");
            setPasswordMessage("")
        }
        else if(result===403) {
            setPasswordMessage("틀린 비밀번호 입니다.");
            setEmailMessage("")
        }
        else if(result === 200){
            sessionStorage.setItem("email",email)
            history.push('/home')
        }

    }

    return (
        <Container color={config.BACKGROUND_COLOR}>
            <GoBackBtn previousPage="/landing"/>
            <SignupText title="로그인" description="가입하신 이메일과 비밀번호를 입력해 주세요."/>
            <LoginInput
                setIsActive={setIsActive}
                setEmail={setEmail}
                setPassword={setPassword}
                emailMessage = {emailMessage}
                passwordMessage = {passwordMessage}
            />
            {isActive
                ? <BtnWrap>
                    <ActiveBtn
                        text="Login"
                        check={login}
                    />
                </BtnWrap>
                : <BtnWrap>
                    <InactiveBtn text="Login"/>
                </BtnWrap>
            }
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background : ${props => props.color}
`
const BtnWrap = styled.div`
    margin-top : 32px;
`

export default Login_1
