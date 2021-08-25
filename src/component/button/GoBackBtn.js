import styled from "styled-components";

import React from "react";
import goBackBtn from "../../svg/goBackBtn.svg"

import {useHistory} from "react-router-dom";

function GoBackBtn(props){
    const history = useHistory();

    console.log(props)
    return(
        <>
            <BackIcon onClick={() =>{
                history.push(props.previousPage)
            }}/>
        </>
    )
}

const BackIcon = styled.img.attrs({
    src : goBackBtn
})`
    margin-left:24px;
    margin-top : 16px
`

export default GoBackBtn
