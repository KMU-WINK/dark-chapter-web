import styled from "styled-components";
import React, { useState, useEffect } from 'react';

import "../../fonts/fonts.css"
import SuccessMessage from "../message/SuccessMessage";
import ErrorMessage from "../message/ErrorMessage";

import emailIcon from '../../svg/signup_mail.svg'
import bi_x_active from '../../svg/bi_x.svg'
import bi_x_inactive from '../../svg/bi_x_inactive.svg'


function EmailInput(props){
    const [email, setEmail] = useState("");

    // @여부에 따라 signup border 색깔 변경
    const [isAtSign, setIsAtSign] = useState()


    const onChangeEmail = e => {
        setEmail(e.target.value);
    };

    console.log("a: ",document.documentElement.clientWidth)


    useEffect(()=>{
        if(email.indexOf('@') > -1){
            setIsAtSign(true);
            props.setIsActive(true);
        }
        else {
            setIsAtSign(false);
            props.setIsActive(false)
        }
        props.setEmail(email)

    },[email])

    return (
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

                {isAtSign
                    ?<XIcon onClick={() => setEmail("")} />
                    :<InactiveXIcon onClick={() => setEmail("")}/>
                }
            </InputBox>
            <ErrorMessage message ={props.message} />

        </Wrap>
    )
}
const Wrap = styled.div`
    width: ${props=>props.width}px;
    margin-top : 88px;
    position : relative;
    padding: 0 24px
    
`
const InputBox = styled.div`
    height: 38px;
    position : relative;
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
    font-weight: 400;
    font-family: PretendartVariable;
    border-color: ${props => props.active ? "#FFFFFF" : "#828282"};
`
const XIcon = styled.img.attrs({
    src : bi_x_active
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

export default EmailInput
