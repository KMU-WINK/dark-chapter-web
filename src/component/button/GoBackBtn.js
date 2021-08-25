import styled from "styled-components";

import React from "react";
import goBackBtn from "../../svg/goBackBtn.svg"

function GoBackBtn(){
    return(
        <>
            <BackIcon onClick={()=>console.log('click')}/>
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
