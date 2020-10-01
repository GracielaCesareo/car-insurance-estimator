import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
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
                        component="span"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={estimation}
                            timeout={{enter: 500, exit: 500}}
                        >
                            <EstimationText> Total: $ <span>{estimation}</span> </EstimationText>
                        </CSSTransition>
                    </TransitionGroup>
                </EstimationContainer>
            )
            

     );
}
 
Result.propTypes = {
    estimation: PropTypes.number.isRequired
}

export default Result;