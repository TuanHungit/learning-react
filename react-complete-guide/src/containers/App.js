import React, { useState, Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Char from '../components/Char/Char';
import Persons from '../components/Persons/Person'
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit'
class app extends Component {
  state = {
      person:[
        {id:'1',name:"Tuan Hung", age:18},
        {id:'2',name:"Tuan Kiet",age:20},
        {id:'3',name:"Anh Dung",age:28},
        {id:'4',name:"Tuan Anh",age:25}
      ],
      showName: false,
      value:''
    };

   swichesName= () => {
    this.setState({
        person:[
        {name:"Tuan Hung Nguyen"},
        {name:"Tuan Kiet"}
      ]
    })
  }
  deletePerson = (personIndex)=>{
    //bad code
    //let persons = personState.person;
    //Good practice
    let persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({
      person: persons
    })
  }
  showName = ()=>{
    const toggleShowName = this.state.showName;
    this.setState({
      showName: !toggleShowName
    })
  }
  changedName= (event,index)=>{
    const person = {...this.state.person[index]};
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[index] = person;
    this.setState({person:persons}); 
  }

 
  //---------------------Assignment  
  changeInput = (event)=>{
    this.setState({
      value: event.target.value
    })
  }
  changeName = (event)=>{
    this.setState({
      value: event.target.value
    })
  }
  charList = this.state.value.split('').map((el,index)=>{
    return <Char 
    char={el} 
    key={index}
    click ={()=>this.deleteChar(index)}/>
  })
  deleteChar = (index)=>{
    const charList = [...this.state.value.split('')];
    charList.splice(index,1);
    
    const updated = charList.join('');
    console.log(updated);
    this.setState({
      value: updated
    })
    
  }
 
  render(){
    let persons = null;

    if(this.state.showName){
      persons = (
        <Persons persons = {this.state.person}
        deletePerson = {this.deletePerson}
        changedName = {this.changedName}/>
      )

    }
    return (
      <div className={classes.App}>
       <Cockpit persons = {this.state.person}
       showName = {this.state.showName}
       clicked = {this.showName}/>
       {persons}

        {/* <input type="text" onChange={changeInput} value={InputState.value}/>
        <p>{charList}</p>
        <Validation text = {charList} /> */}
      </div>
    );
  }
}
export default app;
