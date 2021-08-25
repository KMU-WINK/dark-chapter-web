import styled from "styled-components";
import React, { useState } from 'react';
import * as config from '../config'
import GoBackBtn from "../component/button/GoBackBtn";
import SignupText from "../component/input/SignupText";
import EmailInput from "../component/input/EmailInput";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";

import {useHistory} from "react-router-dom";

function ResetPassword_1(){
    const history = useHistory();

    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const checkValidate = () => {

        // 서버 통신 후 잘못된 이메일일 경우
        if(email !== "aaa@aa.com") setMessage("이메일을 다시 확인해주세요.");
        else {
            setMessage("")
            history.push('/resetPassword/pwd')
        }


    }

    return(
        <Container color={config.BACKGROUND_COLOR}>

            <GoBackBtn/>
            <SignupText title = "비밀번호 재설정" description = "가입하셨던 이메일을 입력해주세요."/>
            <EmailInput
                setIsActive={setIsActive}
                setEmail = {setEmail}
                message = {""}
            />
            <BtnWrap>
                {isActive
                    ?
                    <ActiveBtn
                        text = "Next"
                        check = {checkValidate}
                    />

                    :
                    <InactiveBtn text = "Next"/>

                }
            </BtnWrap>

            {message
                ? <Error>
                    <Message>{message}</Message>
                </Error>
                : null
            }

        </Container>
    )
}

const Container = styled.div`
    width: 360px;
    height: 760px;
    background : ${props => props.color};
    position : relative;
`

const BtnWrap = styled.div`
    margin-top : 140px;
`

const Error = styled.div`
    margin : 180px auto;
    position : relative;

    width: 122px;
    height: 24px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8.50732px;
    text-align : center;
`

const Message = styled.span`
    
    
    font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 8.50732px;
line-height: 150%;


letter-spacing: 0.0168em;
font-feature-settings: 'tnum' on, 'lnum' on;



color: #FFFFFF;

`

export default ResetPassword_1
