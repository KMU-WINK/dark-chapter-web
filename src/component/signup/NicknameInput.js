import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import * as config from '../../config'

import ErrorMessage from "../message/ErrorMessage";
import SuccessMessage from "../message/SuccessMessage";
import bi_x_active from "../../svg/bi_x.svg";
import bi_x_inactive from "../../svg/bi_x_inactive.svg";

function NicknameInput(props){
    const [nickname, setNickname] = useState("");
    const [isActive, setActive] = useState(false);

    const [isValidate, setIsValidate] = useState(false);
    const [validateMsg, setValidateMsg] = useState('');

    const onChangeNickname = e => {
        setNickname(e.target.value)
    }
    const onDeleteNickname = e => {
        setNickname("")
    }

    useEffect(()=>{
        props.setNickname(nickname);

        if (nickname) {
            setActive(true)
            props.setIsActive(true)

            setIsValidate(true)
            setValidateMsg('통과!')
        }
        else {
            setActive(false)
            props.setIsActive(false)

            setIsValidate(false)
            setValidateMsg('한 글자 이상 입력 해주세요.')
        }
    },[nickname])

    return(
        <Container>
            <InputBox>
                <Nickname font_color = {config.ACTIVE_COLOR}>별명</Nickname>
                <InputNickname
                    value = {nickname}
                    onChange={onChangeNickname}
                    active = {isActive}
                    color = {config.BACKGROUND_COLOR}
                    active_color = {config.ACTIVE_COLOR}
                    inactive_color = {config.INACTIVE_COLOR}
                />
                {nickname
                    ?<XIcon onClick={() => setNickname("")} />
                    :<InactiveXIcon onClick={() => setNickname("")}/>
                }


            </InputBox>
            <ErrorMessage message ={props.message} />
        </Container>
    )
}

const Container = styled.div`
    width: 328px;
    margin : 0 auto;
    margin-top : 88px;
    position : relative;
`

const InputBox = styled.div`
    height: 38px;
    position : relative;
`

const Nickname = styled.span`
    
    font-size: 14px;
    font-weight: 700;
    font-family: PretendartVariable;
    line-height: 26px;
    color: ${props => props.font_color};
    position: absolute;
    left: 8px;
    top: 8px;
`

const InputNickname = styled.input.attrs({
    placeholder:"별명은 개인 식별 용도로만 사용됩니다."
})`
    text-align : center;
    width: 328px;
    height: 38px;
    outline: 0;
    border-width: 0 0 2px;
    font-size: 14px;
    font-weight: 400;
    font-family: PretendartVariable;
    background : ${props => props.color};
    color : ${props => props.active_color};
    border-color: ${props => props.active ? props.active_color : props.inactive_color}
`

const XIcon = styled.img.attrs({
    src : bi_x_active
})`
    position : absolute;
    left: 304px;
    top: 7px;
`
const InactiveXIcon = styled.img.attrs({
    src : bi_x_inactive
})`
    position : absolute;
    left: 304px;
    top: 7px;
`


export default NicknameInput
