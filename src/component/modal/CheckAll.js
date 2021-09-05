// 전체동의 부분

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import check_all from '../../svg/check_all.svg';
import not_check_all from '../../svg/not_check_all.svg';
import './checkAll.css'
import "../../fonts/fonts.css"



function CheckAll(props){

    const checked = () => {
        props.setAll(!props.checked)
        props.setService(!props.checked)
        props.setInfo(!props.checked)
        props.setMarketing(!props.checked)
    }

    return(
        <div
            className="ccheck"
            style={{
                position : "relative",
                width: "100%",
                height: 24,
                marginLeft: 16
            }}
        >

            <Input
                id="input"
                type="checkbox"
                checked={props.checked}
                onClick={checked}
                // style={{marginLeft:16}}
            />
            <Label for="input" />
            <Span
                style={{marginLeft:-4}}
            >전체 동의</Span>
        </div>
    )
}

const Label = styled.label`
    margin-top : 64px;
`;

const Input = styled.input`
    +${Label}{
        background-image : url(${not_check_all});
    };
  &:checked + ${Label} {
    background-image : url(${check_all});
  };
`;

const Span = styled.span`
    position: absolute;
    height: 21px;
    left: 36px;
    top: 2px;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 700;
    font-family: PretendartVariable;
`



export default CheckAll
