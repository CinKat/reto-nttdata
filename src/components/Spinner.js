import { keyframes } from '@emotion/react';
import styled from "@emotion/styled";
import React from 'react';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`
const StyleSpinner = styled.div`
    border: 4px solid red;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: transparent;

    animation: ${spin} 1s linear infinite;
`

export function Spinner() {
    return (
        <Wrapper>
            <StyleSpinner
            ></StyleSpinner>
        </Wrapper>
    )
}