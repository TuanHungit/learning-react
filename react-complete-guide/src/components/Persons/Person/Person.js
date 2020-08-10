import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
const person = (props)=>{
    return (
        <Aux> 
            <p  onClick={props.click}>I'm {props.name} and {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changedName}/>
        </Aux>
    ) 
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changedName: PropTypes.func
}
export default withClass(person, classes.Person);