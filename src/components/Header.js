import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
    background-color: rgb(255, 201, 60);
    padding: 1rem 1.25rem;
    font-weight: bold;
    color: #1a1c20;
    position: relative;
    top: 0;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
`;

const Header = ({title}) => {
    return ( 
        <HeaderContainer>
            <HeaderText>{title}</HeaderText>
        </HeaderContainer>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;