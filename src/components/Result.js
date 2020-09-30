import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Message = styled.p`
    background-color: rgba(255, 201, 60, 0.3);
    margin-top: 1rem;
    padding: .75rem;
    text-align: center;
`;

const EstimationContainer = styled.div`
    background-color: rgb(255, 201, 60);
    font-size: 1rem;
    padding: .5rem;
    text-align: center;
    margin-top: 1rem;
    position: relative;
`;

const EstimationText = styled.p`
    font-weight: bolder;
`;




const Result = ({estimation}) => {

    return (
        (estimation === 0) 
        ?<Message>Please choose a category, year and plan</Message>
        :
            (
                <EstimationContainer>
                    <TransitionGroup
                        component="p"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={estimation}
                            timeout={{enter: 500, exit: 500}}
                        >
                            <EstimationText> Total: ${estimation}</EstimationText>
                        </CSSTransition>
                    </TransitionGroup>
                </EstimationContainer>
            )
            

     );
}
 
export default Result;