import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 5em;
    background: linear-gradient(70deg, #28AFB0, #F4D35E);
    position: absolute;
    bottom: 0;
    text-align: center;
`

const FooterContent = styled.p`
    font-size: 14pt;
    font-family: Hoefler Text Black, cooper-black-std, serif;
    font-weight: 10;
    transform: translate(0%, 50%);
`

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>© 2019 Bluth Inc. ❤️ "There's always money in the Banana Stand!" 🍌</FooterContent>
        </FooterContainer>
    );
}