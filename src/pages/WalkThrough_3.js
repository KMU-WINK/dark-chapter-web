import React, {useState} from 'react'
import styled from "styled-components";

import background from "../svg/walk_through_3.svg"
import Step from "../component/walk-through/Step";
import WalkThoughText from "../component/walk-through/WalkThoughText";

function WalkThrough_3(){
    return(
        <Container bg={background}>
            <Step/>
            <WalkThoughText/>
            <Img/>

        </Container>
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


export default WalkThrough_3
