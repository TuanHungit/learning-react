import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = (props)=>{
  const [personState, setPersonState] = useState({
    person:[
      {name:"Tuan Hung"},
      {name:"Tuan Kiet"}
    ]
  });
  const swichesName= ()=> {
    setPersonState({
        person:[
        {name:"Tuan Hung Nguyen"},
        {name:"Tuan Kiet"}
      ]
    })
  }
  return (
    <div className="App">
      <h1>I'm React App !!!</h1>
      <button onClick={swichesName}>Swiches name</button>
      <Person name={personState.person[0].name}>My hobbies: music</Person>
      <Person name={personState.person[1].name}/>
    </div>
  );
}
 
    
  

export default app;
