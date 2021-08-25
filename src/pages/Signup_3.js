import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import * as config from '../config'

import CheckAll from "../component/modal/CheckAll";
import CheckOne from "../component/modal/CheckOne";
import bi_x_active from "../svg/bi_x.svg";

function Signup_3(props){
    const [active, setActive] = useState(true);
    const [agreeAll, setAll] = useState(true);
    const [agreeService, setService] = useState(true);
    const [agreeInfo, setInfo] = useState(true);
    const [agreeMarketing, setMarketing] = useState(true);

    useEffect(() => {
        if(agreeService && agreeInfo && agreeMarketing){
            setAll(true)
            setActive(true)
        }
        else if(agreeService && agreeInfo){
            setActive(true)
            setAll(false)
        }
        else{
            setActive(false)
            setAll(false)
        }

    },[agreeService,agreeInfo,agreeMarketing])

    const {onClose} = props;

    return(
        <Wrap>
            <ModalWrap color={config.BACKGROUND_COLOR}>
                <XIcon
                    onClick={() => {
                        onClose(false);
                    }}
                />
                <CheckAllWrap>
                    <CheckAll
                        setAll = {setAll}
                        checked = {agreeAll}
                        setService={setService}
                        setInfo={setInfo}
                        setMarketing={setMarketing}
                    />
                </CheckAllWrap>

                <DivideLine/>
                <CheckBoxWrap>
                    <CheckOne
                        setChecked={setService}
                        checked={agreeService}
                        id="service"
                        body = "서비스 이용약관"
                    />
                    <CheckOne
                        setChecked={setInfo}
                        checked={agreeInfo}
                        id="info"
                        body = "개인정보 수집 및 이용"
                    />
                    <CheckOne
                        setChecked={setMarketing}
                        checked = {agreeMarketing}
                        id="marketing"
                        body = "혜택 및 마케팅 정보 수신 동의 (선택)"
                    />
                </CheckBoxWrap>

                {
                    active
                        ?
                        <NextBtn>확인</NextBtn>
                        :
                        <DisableNextBtn disabled>확인</DisableNextBtn>
                }
            </ModalWrap>
        </Wrap>
    )
}


const Wrap = styled.div`
    width : 360px;
    height : 760px;
    position : fixed;
    left : 0;
    right:0;
    top : 0;
    bottom : 0;
    z-index : 100;
    background : rgba(0,0,0,0.6);
`

const ModalWrap = styled.div`
    width : 360px;
    height : 298px;
    position : fixed;
    top : 462px;
    background: ${props => props.color};

`
const XIcon = styled.img.attrs({
    src : bi_x_active
})`
    display : block;
    float: right;
    padding: 16px;
`

const DivideLine = styled.hr`
    width: 328px;
    margin-top:16px;
    border: 1px solid #FFFFFF;
`

const CheckAllWrap = styled.div`
    width: 321px;
    margin: 16px auto;
`

const CheckBoxWrap = styled.div`
    width: 321px;
    height: 88px;
    margin: 16px auto;
`

const BaseBtn = styled.button`
    display:block;
    width: 112px;
    height: 40px;
    border-radius: 60px;
    font-size: 16px;
    margin : 30px auto;
    display : block;
    align-items : center;
    font-weight: bold;

`

const NextBtn = styled(BaseBtn)`
    background: #FFFFFF;
`

const DisableNextBtn = styled(BaseBtn)`
    background: #66666D;
`

export default Signup_3
