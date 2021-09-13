import React from 'react';
import styled from "styled-components";
import whiteGoBack from "../svg/goBackBtn.svg";
import blackGoBack from "../svg/goBack_black.svg";
import {useHistory} from "react-router";

function Record_3_header(props) {

    const history = useHistory();
    // console.log(props)
    // console.log(props.history.location.state)
    const changeCategory = () => {
        props.setCategory(!props.category)
    }
    return (

        <Header>
            <GoBack icon={props.isHundred ? whiteGoBack : blackGoBack}
                    onClick={() => {
                        history.push({
                            pathname: '/postEmotion',
                            state: {...props.location_data}
                        })
                        console.log("click")
                    }}/>
            {props.flag ?
                <NextText
                    onClick={changeCategory}
                    color={props.isHundred ? "#FFFFFF" : "#2C2C38"}
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
    position: fixed;
    top:0;
    overflow:hidden;
    z-index:0
`

const GoBack = styled.img.attrs(props => ({
    src: props.icon
}))`
    margin-left: 24px;
`

const NextText = styled.button`
    font-family: PretendartVariable;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-right: 16px;
    color: ${props => props.color}
`
export default Record_3_header;
