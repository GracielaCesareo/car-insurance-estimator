import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Recap from './components/Recap';


import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
`;

const HeroImgContainer = styled.section`
  padding: 3rem;
  width: 50%;
  max-width: 50%;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
  width: 50%;
  max-width: 50%;
`;




function App() {

  const [ recap, saveRecap ] = useState({
    estimation: 0,
    data:{
      category: '',
      year: '',
      plan: ''
    }
  });

  const {data} = recap;


  return (
    <Container>
      <Header 
      titulo="Beta Car"
    />
    <HeroImgContainer>

    </HeroImgContainer>
    <FormContainer>
      <Form 
        saveRecap={saveRecap}
      />
      <Recap 
        data={data}
      />
    </FormContainer>
    </Container>
    
  );
}

export default App;
