// 전체동의 부분

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import check_all from '../../svg/check_all.svg';
import not_check_all from '../../svg/not_check_all.svg';
import './checkAll.css'
import "../../fonts/fonts.css"
import bi_x_active from "../../svg/bi_x.svg";


function CheckAll(props) {
    console.log(props)

    const checked = () => {
        props.setAll(!props.checked)
        props.setService(!props.checked)
        props.setInfo(!props.checked)
        props.setMarketing(!props.checked)
    }

    return (
        <Wrap
            className="ccheck"
        >

                <Input
                    id="input"
                    type="checkbox"
                    checked={props.checked}
                    onClick={checked}
                    // style={{marginLeft:16}}
                />
                <Label for="input"/>
                <Span
                    style={{marginLeft: 12, paddingTop:68}}
                >전체 동의</Span>

            <XIcon onClick={()=>props.onClose()}/>
        </Wrap>
    )
}

const Wrap = styled.div`
    position: relative;
    width: 100%;
    height: 24px;
    display:flex;
    justify-content: space-between;
    padding-top: 68px;
    padding-left: 16px;
`


const Label = styled.label`
    padding-left:16px;
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

const XIcon = styled.img.attrs({
    src: bi_x_active
})`
    position:absolute;
    right:32px;
    top: 16px;
`

export default CheckAll
