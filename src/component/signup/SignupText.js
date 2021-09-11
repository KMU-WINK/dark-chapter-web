import styled from "styled-components";
import React from 'react';
import * as config from '../../config'

import "../../fonts/fonts.css"
import { readUser } from "../../axios/user-service"

function SignupText(props){
    return(
        <div className="jejugothic">
            <TitleBox >
                <Title color = {config.ACTIVE_COLOR} >
                    {props.title}
                </Title>
            </TitleBox>
            <Description color = {config.ACTIVE_COLOR} >
                {props.description}
            </Description>
        </div>
    )
}



const TitleBox = styled.div`
    width: 100%;
    margin-top : 36px;
    margin-left : 24px;
`
const Title = styled.span`
    color : ${props => props.color};
    font-size: 18px;
    line-height: 27px;
`
const Description = styled.div`
    font-size: 12px;
    color : ${props => props.color};
    color: rgba(255, 255, 255, 0.6);
    margin-left : 24px;
    margin-top : 16px;
`

export default SignupText
