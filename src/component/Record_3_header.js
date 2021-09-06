import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import arrow from "../svg/arrow.svg";
import goBack from "../svg/record_3_goback.svg";

function Record_3_header(props){
    const changeCategory = () =>{
        props.setCategory(!props.category)
    }
    return(

        <Header>
            <GoBack/>
            {props.flag ?
                <NextText
                    onClick={changeCategory}
                    color="2C2C38"
                >다음</NextText> :
                <NextText
                    disabled
                    color="rgba(44, 44, 56, 0.3);"
                >다음</NextText>

            }
        </Header>

    )
}

const Header = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:0;
`

const GoBack = styled.img.attrs({
    src: goBack
})`
    margin-left: 24px;
`
const NextText = styled.button`
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-right: 16px;
    color: ${props=>props.color}
`
export default Record_3_header;
