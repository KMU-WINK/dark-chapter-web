import React, {useState} from 'react'
import styled from "styled-components";
import * as config from "../config";
import GoBackBtn from "../component/button/GoBackBtn";
import SignupText from "../component/signup/SignupText";
import NicknameInput from "../component/signup/NicknameInput";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router";

import * as user_service from "../axios/user-service";

function ResetNickname_2(){
    const location = useLocation();
    const password = location.state.password
    const history = useHistory();
    const [nickname,setNickname] = useState('');

    const [isActive, setIsActive] = useState(false);

    const [message, setMessage] = useState("")

    const check = async () => {
        const result = await user_service.updateUser(
            sessionStorage.getItem("token"),
            sessionStorage.getItem("email"),
            password,
            nickname
        )
        if(result.status === 200) history.push('/home')

    }

    return(
        <Container color={config.BACKGROUND_COLOR}>
            <GoBackBtn/>
            <SignupText title = "닉네임 재설정" description = "바꾸실 닉네임을 입력해주세요."/>
            <NicknameInput
                setIsActive={setIsActive}
                setNickname={setNickname}
                message = {message}
            />
            <BtnWrap>
                {isActive
                    ?
                    <ActiveBtn
                        text = "끝내기"
                        check = {check}
                    />

                    :
                    <InactiveBtn text = "끝내기"/>

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


export default ResetNickname_2
