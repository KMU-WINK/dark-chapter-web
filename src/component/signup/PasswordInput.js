import styled from "styled-components";
import React, {useState, useEffect} from "react"
import * as config from '../../config'

import Password from '../../svg/signup_password.svg';
import bi_x from '../../svg/bi_x.svg';
import bi_x_inactive from '../../svg/bi_x_inactive.svg'

import SuccessMessage from "../message/SuccessMessage";
import ErrorMessage from "../message/ErrorMessage";

import reveal_active from '../../svg/reveal-icons_eye.svg'
import reveal_inactive from '../../svg/reveal_inactive.svg';
import inreveal_active from '../../svg/inreveal_active.svg'
import inreveal_inactive from '../../svg/inreveal_inactive.svg'


function PasswordInput(props){

    console.log(document.documentElement.clientWidth)
    // 활성화, 비활성화
    const [isPwdActive,setPwdActive] = useState(false);

    const [pwd, setPwd] = useState('');

    // password 가릴지 여부 state
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const onChangePwd = e => {
        setPwd(e.target.value);
    };


    // 비밀번호 보여주기 여부 관리
    const changePwdReveal = () => {
        setIsRevealPwd(!isRevealPwd)
    }

    // 비밀번호 4글자 이상인지 확인해서 아이콘들 색깔 변경
    useEffect(() => {
        if (pwd.length >=4) setPwdActive(true);
        else setPwdActive(false);

        props.setPwd(pwd)
        // checkValidate()
    },[pwd])

    return (


        <PwdInputWrap width={document.documentElement.clientWidth-48}>
            <PasswordIcon/>

            {
                (function () {
                    if (isRevealPwd && isPwdActive){
                        return (
                            <RevealActiveIcon
                                onClick={changePwdReveal}
                                active = {isPwdActive}
                            />
                        )
                    }
                    else if (isRevealPwd && !isPwdActive){
                        return (

                            <RevealInactiveIcon
                                onClick={changePwdReveal}
                                active = {isPwdActive}
                            />

                        )
                    }
                    else if (!isRevealPwd && isPwdActive){
                        return (
                            <InRevealActiveIcon
                                onClick={changePwdReveal}
                                active = {isPwdActive}
                            />


                        )
                    }
                    else if (!isRevealPwd && !isPwdActive){
                        return (
                            <InRevealInactiveIcon
                                onClick={changePwdReveal}
                                active = {isPwdActive}
                            />


                        )
                    }
                })()
            }

            {isPwdActive
                ?<XIcon onClick={() => setPwd("")} />
                :<InactiveXIcon onClick={() => setPwd("")}/>
            }

            <InputPwd
                type={!isRevealPwd ? "password" : "text"}
                value={pwd}
                onChange = {onChangePwd}
                active = {isPwdActive}
                color = {config.BACKGROUND_COLOR}
                active_color = {config.ACTIVE_COLOR}
                inactive_color = {config.INACTIVE_COLOR}
            />

            {
                props.isValidateMsg
                    ?null
                    : <ErrorMessage message ={props.pwdMsg} />
            }

        </PwdInputWrap>

    )
}

const PwdInputWrap = styled.div`
    width : ${props=>props.width}px;
    height: 62px;
    position : relative;
    
    margin: 16px 24px auto;
`


const InputPwd = styled.input.attrs({
    placeholder:"4자리 이상",

})`
    text-align : center;
    width: 100%;
    height: 38px;
    outline: 0;
    border-width: 0 0 2px;
    background-color : ${props => props.color};
    font-size: 14px;
    font-weight: 400;
    font-family: PretendartVariable;
    color : ${props => props.active_color};
    border-color: ${props => props.active ? props.active_color : props.inactive_color};
`

const PasswordIcon = styled.img.attrs({
    src : Password
})`
    position : absolute;
    left: 9px;
    top: 8px;
`

const RevealActiveIcon = styled.img.attrs({
    src: reveal_active,
})`
    position : absolute;
    right: 32px;
    top: 7px;
`;

const RevealInactiveIcon = styled.img.attrs({
    src: reveal_inactive,
})`
    position : absolute;
    right: 32px;
    top: 7px;
`;

const InRevealInactiveIcon = styled.img.attrs({
    src: inreveal_inactive,
})`
    position : absolute;
    right: 32px;
    top: 7px;
`;

const InRevealActiveIcon = styled.img.attrs({
    src: inreveal_active
})`
    position : absolute;
    right: 32px;
    top: 7px;
`

const XIcon = styled.img.attrs({
    src : bi_x
})`
    position : absolute;
    right: 0;
    top: 7px;
`
const InactiveXIcon = styled.img.attrs({
    src : bi_x_inactive
})`
    position : absolute;
    right: 0;
    top: 7px;
`




export default PasswordInput
