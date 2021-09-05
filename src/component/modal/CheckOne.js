import React, {useState, useEffect} from "react";
import styled from "styled-components";

import './checkOne.css'
import "../../fonts/fonts.css"

function CheckOne(props){

    const checked = () => {
        props.setChecked(!props.checked)
    }

    return(

        <Wrap>
            <Div>
                <input
                    type="checkbox"
                    id={props.id}
                    checked={props.checked}
                    onClick={() => {
                        checked()
                    }}

                />
                <label
                    htmlFor={props.id
                    }
                ></label>
                <Span style={{marginLeft:12}}>
                    {props.body}
                </Span>
            </Div>
            <A>내용 보기</A>
        </Wrap>

    )
}

const Wrap = styled.div`
    position : relative;
    width: 100%;
    height: 24px;
    margin-top : 8px;
    display:flex;
    justify-content: space-between; 
`

const Div =styled.div`
    margin-left: 16px;
`

const Span = styled.span`
    position: absolute;
    height: 21px;
    left: 36px;
    top: 2px;
    font-weight: 700;
    font-family: PretendartVariable;
    font-size: 14px;
    color: #FFFFFF;
`

const A = styled.a`
    text-decoration:none;
    font-size: 10px;
    color: #DCDCDC;
    top: 5px;
    font-weight: 400;
    font-family: PretendartVariable;
    margin-right:23px;
`
export default CheckOne
