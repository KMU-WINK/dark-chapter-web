import React, {useState, useEffect} from "react";
import styled from "styled-components";

import './checkOne.css'

function CheckOne(props){

    const [isChecked, setIsChecked] = useState(true);


    useEffect(() => {
        props.setChecked(isChecked)
    },[isChecked])


    return(

        <Div>
            <input
                type="checkbox"
                id={props.id}
                checked={props.checked}
                onClick={() =>{
                    setIsChecked(!isChecked);

                }}
            />
                <label
                    for={props.id
                    }></label>
            <Span>
                {props.body}
            </Span>
            <A>내용 보기</A>
        </Div>

    )
}

const Div = styled.div`
    position : relative;
    width: 321px;
    height: 24px;
    margin-top : 8px
`

const Span = styled.span`
    position: absolute;
    height: 21px;
    left: 36px;
    top: 2px;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
`


// const CheckOne = styled.img.attrs({
//     src: check_one
// })`
//     display : block;
//     margin-left : 16px;
//     margin-top : 8px;
//     position: absolute;
//     left: 0px;
//     top: 0px;
// `

// const NotCheckOne = styled.img.attrs({
//     src: not_check_one
// })`
//     display : block;
//     margin-left : 16px;
//     margin-top : 8px;
//     position: absolute;
//     left: 0px;
//     top: 0px;
// `

const A = styled.a`
    text-decoration:none;
    font-size: 10px;
    color: #DCDCDC;
    position: absolute;
    left: 283px;
    top: 5px;
`
export default CheckOne
