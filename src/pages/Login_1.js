import styled from "styled-components";
import React, {useState} from 'react';
import * as config from '../config'

import SignupText from "../component/input/SignupText";
import LoginInput from "../component/login/LoginInput";
import GoBackBtn from "../component/button/GoBackBtn";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";

function Login_1() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Container color={config.BACKGROUND_COLOR}>
            <GoBackBtn previousPage="/"/>
            <SignupText title="로그인" description="가입하신 이메일과 비밀번호를 입력해 주세요."/>
            <LoginInput
                setIsActive={setIsActive}
            />
            {isActive
                ? <BtnWrap>
                    <ActiveBtn
                        text="Login"

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
    width: 360px;
    height: 760px;
    background : ${props => props.color}
`
const BtnWrap = styled.div`
    margin-top : 57px;
`

export default Login_1