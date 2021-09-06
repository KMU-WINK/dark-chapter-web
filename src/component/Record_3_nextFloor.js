import React, {useEffect, useState} from 'react';
import styled from "styled-components";


import "../fonts/fonts.css"



function Record_3_nextFloor(props){

    return(
        <Wrap>
            <div>
                <Text color={props.textColor}>다음 깊이까지</Text>
                <MeterBox color={props.textColor}>
                    {props.meter}m
                </MeterBox>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 77px;
    height: 56px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24px;
    font-family: PretendartVariable;
`

const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${props => props.color};
`
const MeterBox = styled.div`
    width: 69px;
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 19.5px;
    margin: 7px auto;
    text-align: center;
    display: flex;
    // box-shadow: 2px 2px 2px 2px rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`


export default Record_3_nextFloor;
