import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import * as config from '../config'

import SignupText from "../component/signup/SignupText";
import GoBackBtn from "../component/button/GoBackBtn";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";
import PasswordInput from "../component/signup/PasswordInput";

import {useHistory} from "react-router-dom";


function ResetNickname_1(){
    const history = useHistory();

    const [isActive, setIsActive] = useState(false)

    const [pwd,setPwd] = useState("")

    const [pwdMessage, setPwdMessage] = useState("fff")


    const checkValidate = () =>{
        history.push('/resetNickname/pwd')
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
            <GoBackBtn previousPage="/home"/>
            <SignupText title = "닉네임 재설정" description = "비밀번호를 입력해주세요."/>

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
    width: 100%;
    height: 100vh;
    background : ${props => props.color};
`

const Div = styled.div`
    margin-top : 50px;
`

const BtnWrap = styled.div`
    margin-top : 131px;
`


export default ResetNickname_1
