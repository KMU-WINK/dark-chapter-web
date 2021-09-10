import styled from "styled-components";
import React, {useState} from 'react';
import * as config from '../config'

import EmailInput from "../component/signup/EmailInput";
import SignupText from "../component/signup/SignupText";
import GoBackBtn from "../component/button/GoBackBtn";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";

import {useHistory} from "react-router-dom"

function Signup_1() {
    console.log(window.innerWidth)
    let history = useHistory()

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")


    const checkValidate = () => {
        if (!regExp.test(email)) {
            setMessage("올바른 이메일 형식이 아닙니다.");

        } else if (email === "aaa@aa.com") {
            history.push('/signup/password')

        } else setMessage("이미 등록된 이메일 입니다.")
    }


    return (
        <Container color={config.BACKGROUND_COLOR}>

            <GoBackBtn previousPage="/"/>
            <SignupText title="회원가입" description="사용하실 이메일을 입력해주세요."/>
            <EmailInput
                setIsActive={setIsActive}
                setEmail={setEmail}
                message={message}
            />
            <BtnWrap>
                {isActive
                    ?
                    <ActiveBtn
                        text="Next"
                        check={checkValidate}
                    />
                    :
                    <InactiveBtn text="Next"/>
                }
            </BtnWrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background : ${props => props.color};
    position : relative;
`

const BtnWrap = styled.div`
    margin-top : 140px;
`

export default Signup_1
