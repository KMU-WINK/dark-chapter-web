import styled from "styled-components";

import React from "react";
import goBackBtn from "../../svg/goBackBtn.svg"
import blackGoBack from '../../svg/goBack_black.svg'
import {useHistory} from "react-router-dom";

function GoBackBtn(props){
    const history = useHistory();
    console.log(props)
    return <>
        {props.black?
            <Div>
                <BBackIcon onClick={() =>{
                    history.push({
                        pathname: props.previousPage,
                        state : {
                            state : props.data,
                            email : props.email,
                        },
                    })
                }}/>
            </Div>
            :
            <Div>
                <BackIcon onClick={() =>{
                    history.push({
                        pathname: props.previousPage,
                        state : props.data,
                        email : props.email,
                    })
                }}/>
            </Div>
        }
    </>
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
const BBackIcon = styled.img.attrs({
    src : blackGoBack
})`
  width : 24px;
  height: 24px;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left : 24px
`
export default GoBackBtn
