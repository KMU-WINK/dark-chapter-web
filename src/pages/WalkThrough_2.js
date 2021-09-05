import React, {useState} from 'react'
import styled from "styled-components";
import background from "../svg/walk_through_2.svg";
import Step from "../component/walk-through/Step";
import WalkThoughText from "../component/walk-through/WalkThoughText";

function WalkThrough_2(){
    const text = ["흑역사에 담긴 감정을 모아", "깊이", "빠뜨려요."]
    const step = [0.5, 1, 0.5]
    return(
        <>
            <Container>

                <WalkThoughText text={text}/>
                <Img/>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    background: #2C2C38;
    position: relative;
`

const Img = styled.img.attrs({
    src:  background
})`
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 0
`

export default WalkThrough_2
