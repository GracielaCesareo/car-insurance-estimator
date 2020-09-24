import React, {useState} from 'react';
import styled from '@emotion/styled';
import {getYearDifference, calculateCategory, getPlan} from '../helpers';


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
    background-color: rgb(255, 201, 60);
    font-size: 1rem;
    width: 100%;
    padding: .75rem;
    color: #1a1c20;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    transition: background-color .3 ease;

    &:hover{
        background-color: rgb(255, 184, 0);
        cursor: pointer;
    }
`;

const Error = styled.div`
    border-bottom: solid 2px #ec0101;
    font-weight: bolder;
    color: #ec0101;
    padding: .75rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const Form = ({saveRecap}) => {

    const[data, saveData] = useState({
        category: '',
        year: '',
        plan: ''
    });

    const[error, saveError] = useState(false);

    // Get values from state
    const {category, year, plan} = data;

    // Read data from form
    const getInfo = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }


    // Estimate car insurance
    const estimateInsurance = e =>{
        e.preventDefault();

        // Error manage
        if(category.trim() === '' || year.trim() === '' || plan.trim() === ''){
            saveError(true)
            return;
        }
        saveError(false)

        // Price base
        let priceBase = 3000;

        // Get the difference between the current year and year have chosen
        const differenceYears = getYearDifference(year)

        // Rest 3% each year

        priceBase -= ((differenceYears * 3) * priceBase ) / 100;

        /* Increment depends on category
            Luxury = 30%
            Sport = 15%
            Compact = 5%
        */
        priceBase = calculateCategory(category) * priceBase


        /* Increment depends on plan
            Basic = 10%
            Economy = 20%
            Premium = 50%
        */
    //    priceBase = getPlan(plan)
        const planIncrement = getPlan(plan);
        priceBase = parseFloat( planIncrement * priceBase).toFixed(2);

        // Total
        saveRecap({
            estimation: priceBase,
            data
        });

    }

    return (
        <form 
            action=""
            onSubmit={estimateInsurance}
        >
            <fieldset>
            {error ? <Error>All fields are required</Error> : null}
                <Campo>
                    <Label htmlFor="">Category</Label>
                    <Select 
                        name="category" 
                        id="category"
                        value="category"
                        onChange={getInfo}
                        >
                        <option value="">Choose a category</option>
                        <option value="luxury">Luxury</option>
                        <option value="sport">Sport</option>
                        <option value="compact">Compact</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="">Year</Label>
                    <Select 
                        name="year"
                        id="year"
                        value="year"
                        onChange={getInfo}>
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
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="">Plan</Label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="basic"
                        checked = {plan === "basic"}
                        onChange={getInfo}
                    />Basic
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="economy"
                        checked= {plan === "economy"}
                        onChange={getInfo}
                    />Economy
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="premium"
                        checked= {plan === "premium"}
                        onChange={getInfo}
                    />Premium
                </Campo>
                <Button type="submit">Get Estimation</Button>
            </fieldset>
        </form>
     );
}
 
export default Form;
