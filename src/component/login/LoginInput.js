import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import SuccessMessage from "../message/SuccessMessage";
import ErrorMessage from "../message/ErrorMessage";

import emailIcon from "../../svg/signup_mail.svg";
import Password from "../../svg/signup_password.svg";
import reveal_active from "../../svg/reveal-icons_eye.svg";
import reveal_inactive from "../../svg/reveal_inactive.svg";
import inreveal_inactive from "../../svg/inreveal_inactive.svg";
import inreveal_active from "../../svg/inreveal_active.svg";

function LoginInput(props){
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

    // const [isEmailValidate, setIsEmailValidate] = useState(false);
    // const [emailVMsg, setEmailVMsg] = useState("");
    //
    // const [isPwdValidate, setIsPwdValidate] = useState(false);
    // const [pwdVMsg, setPwdVMsg] = useState("");


    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    // 이메일, 비밀번호 유효성 여부
    const [isAtSign, setIsAtSign] = useState(false);
    const [isPwdActive,setPwdActive] = useState(false);

    // 비밀번호 type : text or password
    const [isReveal, setIsReveal] = useState(false);

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePwd = e => {
        setPwd(e.target.value)
    }

    const changeIsReveal = () => {
        setIsReveal(!isReveal)
    }

    useEffect(()=>{
        // if (!regExp.test(email)){
        //     // setEmailVMsg("올바른 이메일 형식이 아닙니다.");
        //     setIsEmailValidate(false);
        // }
        // else{
        //     setEmailVMsg("통과!");
        //     setIsEmailValidate(true);
        // }

        if(email.indexOf('@') > -1){
            setIsAtSign(true);
        }
        else {
            setIsAtSign(false);
        }
    },[email])

    useEffect(() => {
        if (pwd.length >=4) setPwdActive(true)
        else setPwdActive(false)
    },[pwd])

    useEffect(() => {
        if(isAtSign && isPwdActive) props.setIsActive(true);
        else props.setIsActive(false);
    },[isAtSign])

    useEffect(() => {
        if(isAtSign && isPwdActive) props.setIsActive(true);
        else props.setIsActive(false);
    },[isPwdActive])

    return(
        <Wrap width={document.documentElement.clientWidth-48}>
            <InputBox>
                <img
                    src={emailIcon}
                    style={{
                        position : 'absolute',
                        left: 8,
                        top: 8
                    }}
                />
                <InputEmail
                    onChange={onChangeEmail}
                    value={email}
                    active = {isAtSign}
                    type = "text"
                />
                {/*{*/}
                {/*    isEmailValidate*/}
                {/*        ?<SuccessMessage message = {emailVMsg}/>*/}
                {/*        : <ErrorMessage message ={emailVMsg} />*/}
                {/*}*/}
            </InputBox>


            <PasswordBox>
                <PasswordIcon/>
                <InputPwd
                    type={!isReveal ? "text" : "password"}
                    value={pwd}
                    onChange = {onChangePwd}
                    active = {isPwdActive}
                />
                {
                    (function () {
                        if (isReveal && isPwdActive){
                            return (
                                <InRevealActiveIcon
                                    onClick={() => {setIsReveal(!isReveal)}}
                                />
                            )
                        }
                        else if (isReveal && !isPwdActive){
                            return (

                                <InRevealInactiveIcon
                                    onClick={() => {setIsReveal(!isReveal)}}
                                />

                            )
                        }
                        else if (!isReveal && isPwdActive){
                            return (

                                <RevealActiveIcon
                                    onClick={() => {setIsReveal(!isReveal)}}

                                />

                            )
                        }
                        else if (!isReveal && !isPwdActive){
                            return (

                                <RevealInactiveIcon
                                    onClick={() => {setIsReveal(!isReveal)}}

                                />

                            )
                        }
                    })()
                }
                {/*{*/}
                {/*    isPwdValidate*/}
                {/*        ?<SuccessMessage message = {pwdVMsg}/>*/}
                {/*        : <ErrorMessage message ={pwdVMsg} />*/}
                {/*}*/}
            </PasswordBox>

        </Wrap>
    )
}
const Wrap = styled.div`
    width: ${props=>props.width}px;
    margin : 0 auto;
    margin-top : 88px;

`

const InputBox = styled.div`
    height: 62px;
    position : relative;
    margin-top : 62px
`

const PasswordBox = styled(InputBox)`
    margin-top : 16px;
`

const InputEmail = styled.input.attrs({
    placeholder:"BlackYeoksa@gmail.com"
})`
    text-align : center;
    width: 100%;
    height: 38px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #828282;
    font-size: 14px;
    background : #2C2C38;
    color : #FFFFFF;
    border-color: ${props => props.active ? "#FFFFFF" : "#828282"}
`


const InputPwd = styled.input.attrs({
    placeholder:"4자리 이상"
})`
    text-align : center;
    width: 100%;
    height: 38px;
    outline: 0;
    border-width: 0 0 2px;
    background-color : #2C2C38;
    font-size: 14px;
    color : #FFFFFF;
    border-color : #828282;
    border-color: ${props => props.active ? "#FFFFFF" : "#828282"}
`
const RevealActiveIcon = styled.img.attrs({
    src: reveal_active,
})`
    position : absolute;
    right:0;
top: 7px;

`;

const RevealInactiveIcon = styled.img.attrs({
    src: reveal_inactive,
})`
    position : absolute;
    right:0;
top: 7px;

`;

const InRevealInactiveIcon = styled.img.attrs({
    src: inreveal_inactive,
})`
    position : absolute;
    left: 304px;
top: 7px;

`;

const InRevealActiveIcon = styled.img.attrs({
    src: inreveal_active
})`
    position : absolute;
    left: 304px;
top: 7px;

`

const PasswordIcon = styled.img.attrs({
    src : Password
})`
    position : absolute;
    left: 9px;
    top: 8px;
`


export default LoginInput
