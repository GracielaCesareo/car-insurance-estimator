import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    margin-bottom: 1rem;
    padding: .75rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: .5rem;
    font-weight: bolder;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: .75rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 .5rem;
`;

const Button = styled.button`
    background-color: yellow;
    font-size: 1rem;
    width: 100%;
    padding: .75rem;
    color: black;
    font-weight: bold;
    border: none;
    border-radius: 4px;
`;

const Form = () => {
    return ( 
        <form action="">
            <fieldset>
                <Campo>
                    <Label htmlFor="">Category</Label>
                    <Select name="" id="">
                        <option value="">Choose a category</option>
                        <option value="luxury">Luxury</option>
                        <option value="sport">Sport</option>
                        <option value="compact">Compact</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="">Year</Label>
                    <Select name="" id="">
                        <option value="">Choose a year</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2012</option>
                        <option value="2010">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="">Plan</Label>
                    <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"/>Basic
                    <InputRadio
                    type="radio"
                    name="plan"
                    value="economy"/>Economy
                    <InputRadio
                    type="radio"
                    name="plan"
                    value="premium"/>Premium
                </Campo>
                <Button type="submit">Get Estimation</Button>
            </fieldset>
        </form>
     );
}
 
export default Form;
