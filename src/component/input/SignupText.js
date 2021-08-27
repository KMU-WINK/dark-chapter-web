import styled from "styled-components";
import React from 'react';
import * as config from '../../config'

function SignupText(props){
    return(
        <>
            <TitleBox>
                <Title color = {config.ACTIVE_COLOR}>
                    {props.title}
                </Title>
            </TitleBox>
            <Description color = {config.ACTIVE_COLOR}>
                {props.description}
            </Description>
        </>
    )
}


const TitleBox = styled.div`
    width: 123px;
    margin-top : 36px;
    margin-left : 30px;
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
    margin-left : 30px;
    margin-top : 16px;
`

export default SignupText
