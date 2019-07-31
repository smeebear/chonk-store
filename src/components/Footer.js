import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 5em;
    background: rgb(255, 187, 197);
    bottom: 0;
    position: relative;
    text-align: center;
`

const FooterContent = styled.p`
    font-size: 14pt;
    font-family: Hoefler Text Black, cooper-black-std, sans-serif;
    font-weight: 10;
    transform: translate(0%, 50%);
`

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>© 2019 SmebCorp Incorporated Unincorporated, LLC. </FooterContent>
        </FooterContainer>
    );
}