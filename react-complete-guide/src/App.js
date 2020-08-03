import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = (props)=>{
  const [personState, setPersonState] = useState({
    person:[
      {id:'1',name:"Tuan Hung"},
      {id:'2',name:"Tuan Kiet"},
      {id:'3',name:"Anh Dung"},
      {id:'4',name:"Tuan Anh"}
    ]
  });
  const [ShowNameState, setShowNameState] = useState({
    showName: false
  });
  const swichesName= ()=> {
    setPersonState({
        person:[
        {name:"Tuan Hung Nguyen"},
        {name:"Tuan Kiet"}
      ]
    })
  }
  const deletePerson = (personIndex)=>{
    //bad code
    //let persons = personState.person;
    //Good practice
    let persons = [...personState.person];
    persons.splice(personIndex,1);
    console.log(personState.person);
    setPersonState({
      person: persons
    })
  }
  const showName = ()=>{
    const toggleShowName = ShowNameState.showName;
    setShowNameState({
      showName: !toggleShowName
    })
  }
  const changedName= (event,index)=>{
    const person = {...personState.person[index]};
    person.name = event.target.value;
    const persons = [...personState.person];
    persons[index] = person;
    setPersonState({person:persons}); 
  }
  let persons = null;
  if(ShowNameState.showName){
    persons = (
      <div>
        {personState.person.map((person,index)=>{
          return <Person 
          name = {person.name} 
          key = {person.id}
          click={()=>deletePerson(index)}
          changedName= {(event)=>changedName(event,index)}/>
        })}
      </div>
    )
  }
  return (
    <div className="App">
      <h1>I'm React App !!!</h1>
      <button onClick={showName}>Swiches name</button>
      {persons}
    </div>
  );
}
export default app;
