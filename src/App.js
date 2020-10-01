import React, {useState, Fragment} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Recap from './components/Recap';
import Result from './components/Result';
import Loader from './components/Loader';
import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroImgContainer = styled.section`
  padding: 3rem;
  width: 50%;
  max-width: 50%;
`;

const FormContainer = styled.section`
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

  const [ load, saveLoad ] = useState(false);

  const {estimation, data} = recap;


  return (
      
    <Container>

    <Header 
      title="Beta Car"
    />
      
    <HeroImgContainer>

    </HeroImgContainer>
    <FormContainer>
      <Form 
        saveRecap={saveRecap}
        saveLoad={saveLoad}
      />
      {load ? <Loader /> : null }
      
      
      {!load ?
        <Fragment>
          <Recap 
            data={data}
          />
          <Result
          estimation={estimation}
          />
        </Fragment>
        
        :null
      }
      
    </FormContainer>
    </Container>
  );
}

export default App;
