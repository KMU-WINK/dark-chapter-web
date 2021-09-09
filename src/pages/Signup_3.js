import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import * as config from '../config'

import CheckAll from "../component/modal/CheckAll";
import CheckOne from "../component/modal/CheckOne";
import bi_x_active from "../svg/bi_x.svg";

import {useHistory} from "react-router-dom";

function Signup_3(props){

    let history = useHistory();

    const [active, setActive] = useState(false);
    const [agreeAll, setAll] = useState(false);
    const [agreeService, setService] = useState(false);
    const [agreeInfo, setInfo] = useState(false);
    const [agreeMarketing, setMarketing] = useState(false);

    useEffect(() => {
        console.log("call")
        console.log("all: ",agreeAll)
        console.log("service: ",agreeService)
        console.log("info: ",agreeInfo)
        console.log("marketing: ",agreeMarketing)
        if(agreeService && agreeInfo && agreeMarketing){
            setAll(true)
            setActive(true)
        }
        else if(agreeService && agreeInfo){
            setActive(true)
            setAll(true)
        }
        else{
            setActive(false)
            setAll(false)
        }

    },[agreeService,agreeInfo,agreeMarketing])

    const {onClose} = props;

    return(
        <Wrap>
            <ModalWrap color={config.BACKGROUND_COLOR} id="qqq">
                <Div>
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
                </Div>

                <DivideLine/>
                <CheckBoxWrap>
                    <CheckOne

                        setChecked={setService}
                        checked={agreeService}
                        id="service"
                        body = "서비스 이용약관 (필수)"
                    />
                    <CheckOne

                        setChecked={setInfo}
                        checked={agreeInfo}
                        id="info"
                        body = "개인정보 수집 및 이용 (필수)"
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
                        <NextBtn
                            onClick={() => {
                                history.push('/signup/nickname')
                            }
                            }
                        >확인</NextBtn>
                        :
                        <DisableNextBtn disabled>확인</DisableNextBtn>
                }
            </ModalWrap>
        </Wrap>
    )
}


const Wrap = styled.div`
    width : 100%;
    height : 100vh;
    position : fixed;
    left : 0;
    right:0;
    top : 0;
    bottom : 0;
    z-index : 100;
    background : rgba(0,0,0,0.6);
`

const ModalWrap = styled.div`
    width : 100%;
    height : 298px;
    position : fixed;
    left : 0;
    right:0;
    
    bottom : 0;
    z-index : 100;
    background: ${props => props.color};

`

const Div = styled.div`
    width: 100%- 32px;
    margin: 0 auto;
`

const XIcon = styled.img.attrs({
    src : bi_x_active
})`
    display : block;
    float: right;
    padding-right: 16px;
`

const DivideLine = styled.hr`
    width: 328px;
    margin-top:16px;
    border: 1px solid #FFFFFF;
`

const CheckAllWrap = styled.div`
    // width: 100%;
    // margin: 16px auto;
`

const CheckBoxWrap = styled.div`
    width: 100%;
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
