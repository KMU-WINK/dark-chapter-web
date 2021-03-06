import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router";
import styled from "styled-components";
import SignupText from "../component/signup/SignupText";
import PasswordInput from "../component/signup/PasswordInput";
import GoBackBtn from "../component/button/GoBackBtn";
import Signup_3 from "./Signup_3";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";
import * as config from "../config";



function Signup_2(){
    const location = useLocation();
    let email = ""
    if(location.state.email) email = location.state.email;
    else email = location.state.info.email;



    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false)

    const [isValidateMsg, setValidate] = useState(true)

    const [pwd,setPwd] = useState("")
    const [confirmPwd,setConfirmPwd] = useState("")

    const [pwdMessage, setPwdMessage] = useState("fff")


    const checkValidate = () =>{
        if (pwd !== confirmPwd) {
            setValidate(false)
            setPwdMessage("비밀번호가 일치하지 않습니다.")
            setPopup(false)
        }
        else {
            setValidate(true)
            setPwdMessage("")
            setPopup(true)
        }

    }

    // 비밀번호, 비밀번호 확인 둘 다 4글자 이상인지 여부에 따라 버튼 활성화
    useEffect(() => {
        if (pwd.length >= 4 && confirmPwd.length >= 4) setIsActive(true);
        else setIsActive(false)
    },[pwd])

    useEffect(() => {
        if (pwd.length >= 4 && confirmPwd.length >= 4) setIsActive(true);
        else setIsActive(false)
    },[confirmPwd])


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
                <PasswordInput
                    setIsActive = {setIsActive}
                    pwdMsg = {pwdMessage}
                    setPwd = {setConfirmPwd}
                    isValidateMsg = {isValidateMsg}
                >

                </PasswordInput>

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

            {popup ? <Signup_3
                onClose = {setPopup}
                width={document.documentElement.clientWidth}
                email={email}
                password ={pwd}
            />:null}
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background : ${props => props.color};
`

const Div = styled.div`
    margin-top : 88px;
`

const BtnWrap = styled.div`
    margin-top : 32px;
`


export default Signup_2
