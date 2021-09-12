import styled, { keyframes } from "styled-components";
import React,{ useState, useEffect } from "react";

const toastMessage = (string) => {
    return (
        <ToastMessage>
            {string}
        </ToastMessage>
    );
};

export default toastMessage;

const RevealToast = keyframes`
    0% { opacity: 0; }
    30% { opacity: 1; }
    100% { opacity: 0; }
`

const ToastMessage = styled.div`
    position: fixed;
    top: 550px;
    left: 33%;
    width: 120px;
    height: 20px;
    background: rgba(0, 0, 0, 0.4);
    color: #FFFFFF;
    font-weight: 100;
    font-size: 8px;
    line-height: 20px;
    border-radius: 20px;
    animation: ${RevealToast} 3s infinite;
    text-align: center;
`