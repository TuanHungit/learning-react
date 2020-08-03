import React from 'react';
import './Person.css'
const person = (props)=>{
return (
    <div className="Person">
         <p  onClick={props.click}>I'm {props.name} </p>
         <p>{props.children}</p>
         <input type="text" value={props.name} onChange={props.changedName}/>
    </div>
) 
}

export default person;