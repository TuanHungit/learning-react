import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    const assignClasses = [];
    let buttonCSSClasses = '';
    if(props.showName){
        buttonCSSClasses = classes.Red;
    }
    if (props.persons.length <=2){
      assignClasses.push('red');
    }
    if(props.persons.length<=1){
      assignClasses.push('bold'); 
    }
    return (
        <div className={classes.Cockpit}>
            <br/>
            <h1>I'm React App !!!</h1>
            <p className={assignClasses.join(' ')}>It really working</p>
            <button className={buttonCSSClasses} onClick={props.clicked}>Toggle Person</button>
        </div>
    )
}
export default cockpit;