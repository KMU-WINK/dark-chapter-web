import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import * as config from '../config'

import SignupText from "../component/input/SignupText";
import NicknameInput from "../component/input/NicknameInput";
import GoBackBtn from "../component/button/GoBackBtn";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";
import PasswordInput from "../component/input/PasswordInput";
import Signup_3 from "./Signup_3";

import {useHistory} from "react-router-dom";


function ResetNickname_1(){
    const history = useHistory();

    const [isActive, setIsActive] = useState(false)

    const [isValidateMsg, setValidate] = useState(true)

    const [pwd,setPwd] = useState("")

    const [pwdMessage, setPwdMessage] = useState("fff")


    const checkValidate = () =>{
        // history.push('/resetNickname/pwd')
    }

    // 비밀번호, 비밀번호 확인 둘 다 4글자 이상인지 여부에 따라 버튼 활성화
    useEffect(() => {
        if (pwd.length >= 4) {
            setIsActive(true);

        }
        else setIsActive(false)
    },[pwd])



    return(
        <Container color={config.BACKGROUND_COLOR}>
            <GoBackBtn previousPage="/signup"/>
            <SignupText title = "회원가입" description = "사용하실 비밀번호를 입력해주세요."/>

            <Div>
                <PasswordInput
                    setIsActive = {setIsActive}
                    pwdMsg = {pwdMessage}
                    setPwd = {setPwd}
                    isValidateMsg ={true}
                />

            </Div>

            {isActive
                ? <BtnWrap>
                    <ActiveBtn
                        text = "Next"
                        check = {checkValidate}
                    />
                </BtnWrap>
                : <BtnWrap>
                    <InactiveBtn text = "Next"/>
                </BtnWrap>
            }

        </Container>
    )
}


const Container = styled.div`
    width: 360px;
    height: 760px;
    background : ${props => props.color};
`

const Div = styled.div`
    margin-top : 50px;
`

const BtnWrap = styled.div`
    margin-top : 131px;
`


export default ResetNickname_1