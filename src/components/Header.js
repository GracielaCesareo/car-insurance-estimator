import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    background-color: rgb(255, 201, 60);
    padding: 1rem 1.25rem;
    font-weight: bold;
    color: #1a1c20;
    position: absolute;
    top: 0;
    width: 100%;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
`;

const Header = ({titulo}) => {
    return ( 
        <HeaderContainer>
            <HeaderText>{titulo}</HeaderText>
        </HeaderContainer>
     );
}
 
export default Header;