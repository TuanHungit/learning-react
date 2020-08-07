import React, { useState } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Char from '../components/Char/Char';
import Persons from '../components/Persons/Person'
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit'
const app = (props)=>{
  const [personState, setPersonState] = useState({
    person:[
      {id:'1',name:"Tuan Hung", age:18},
      {id:'2',name:"Tuan Kiet",age:20},
      {id:'3',name:"Anh Dung",age:28},
      {id:'4',name:"Tuan Anh",age:25}
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
      <Persons persons = {personState.person}
      deletePerson = {deletePerson}
      changedName = {changedName}/>
    )

  }
  //---------------------Assignment  
  const [InputState, setInputState] = useState({
    value:''
  });
  const changeInput = (event)=>{
    setInputState({
      value: event.target.value
    })
  }
  const changeName = (event)=>{
    setInputState({
      value: event.target.value
    })
  }
  const charList = InputState.value.split('').map((el,index)=>{
    return <Char 
    char={el} 
    key={index}
    click ={()=>deleteChar(index)}/>
  })
  const deleteChar = (index)=>{
    const charList = [...InputState.value.split('')];
    charList.splice(index,1);
    
    const updated = charList.join('');
    console.log(updated);
    setInputState({
      value: updated
    })
    
  }
 
  
  return (
      <div className={classes.App}>
       <Cockpit persons = {personState}
       showName = {ShowNameState.showName}
       clicked = {showName}/>
       {persons}

        {/* <input type="text" onChange={changeInput} value={InputState.value}/>
        <p>{charList}</p>
        <Validation text = {charList} /> */}
      </div>
  );
}
export default app;
