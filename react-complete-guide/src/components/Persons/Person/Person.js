import React from 'react';
import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px){
        width:'450px'
    }
`;
const person = (props)=>{
    return (
        <StyleDiv>
            <p  onClick={props.click}>I'm {props.name} and {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changedName}/>
        </StyleDiv>
    ) 
}

export default person;