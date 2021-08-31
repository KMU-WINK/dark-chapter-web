import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import * as config from "../config";
import GoBackBtn from "../component/button/GoBackBtn";
import SignupText from "../component/input/SignupText";
import NicknameInput from "../component/input/NicknameInput";
import ActiveBtn from "../component/button/ActiveBtn";
import InactiveBtn from "../component/button/InactiveBtn";
import {useHistory} from "react-router-dom";

function ResetNickname_2(){
    const history = useHistory();
    const [nickname,setNickname] = useState('');

    const [isActive, setIsActive] = useState(false);

    const [message, setMessage] = useState("")

    const check = () => {
        if (nickname !== 'aaa'){
            setMessage("블가능한 별명입니다.")
        }
        else {
            history.push('/home');
        }
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
    width: 360px;
    height: 760px;
    background : ${props => props.color};
    position : relative;
`
const BtnWrap = styled.div`
    margin-top : 140px;
`


export default ResetNickname_2
