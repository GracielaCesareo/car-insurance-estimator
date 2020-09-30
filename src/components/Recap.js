import React from 'react';
import {firstCapitalLetter} from '../helpers'
import styled from '@emotion/styled';

const RecapContainer = styled.div`
    padding: .75rem;
    background-color: rgba(255, 201, 60, 0.3);
    color: #1a1c20;
    h2{
        text-align: center;
    }
`;

const Recap = ({data}) => {


    const {category, year, plan} = data;

    if(category === '' || year === '' || plan==='')return null;

    return ( 
        <RecapContainer>   
            <h2>Estimation Info</h2>
            <ul>
                <li>Category:  {firstCapitalLetter(category)} </li>
                <li>Year: {year}</li>
                <li>Plan: {firstCapitalLetter(plan)}</li>
            </ul>
        </RecapContainer>

    );
}
 
export default Recap;
