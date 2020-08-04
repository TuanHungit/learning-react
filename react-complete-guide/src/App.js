import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
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
  let StyledButton = styled.button`
    background-color:${props=>props.alt ? 'red':'green'};
    color: white;
    font: inherit;
    border: 1px solid gray;
    padding: 8px;
    cursor: pointer;
    &:hover{
      background-color: ${props=>props.alt?'salmon':'lightgreen'};
      color: black;
  `
  let persons = null;
  if(ShowNameState.showName){
    persons = (
      <div>
        {personState.person.map((person,index)=>{
          return <Person 
          name = {person.name} 
          age = {person.age}
          key = {person.id}
          click={()=>deletePerson(index)}
          changedName= {(event)=>changedName(event,index)}/>
        })}
      </div>
    )
    // style.backgroundColor = "red";
    // style[':hover'] = {
    //   backgroundColor: "salmon",
    //   color: "white"
    // }
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
  const classes = [];

  if (personState.person.length <=2){
    classes.push('red');
  }
  if(personState.person.length<=1){
   classes.push('bold'); 
  }
 
  return (
      <div className="App">
        <br/>
        <h1>I'm React App !!!</h1>
        <p className={classes.join(' ')}>It really working</p>
        <StyledButton alt={ShowNameState.showName} onClick={showName}>Toggle Person</StyledButton>
        {persons}

        {/* <input type="text" onChange={changeInput} value={InputState.value}/>
        <p>{charList}</p>
        <Validation text = {charList} /> */}
      </div>
  );
}
export default app;
