import styled from "styled-components";

import React from "react";
import goBackBtn from "../../svg/goBackBtn.svg"

import {useHistory} from "react-router-dom";

function GoBackBtn(props){
    const history = useHistory();

    console.log(props)
    return(
        <Div>
            <BackIcon onClick={() =>{
                history.push(props.previousPage)
            }}/>
        </Div>
    )
}

const Div = styled.div`
    width : 100%;
    height : 56px;
    position : relative;
`

const BackIcon = styled.img.attrs({
    src : goBackBtn
})`
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left : 24px
`

export default GoBackBtn
