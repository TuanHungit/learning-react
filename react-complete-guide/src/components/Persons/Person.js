import React, {Component, useDebugValue} from 'react'
import PersonEl from '../Persons/Person/Person'
class Person extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.persons !== this.props.persons){
      console.log('[Person.js] shouldComponentUpdate');
      return true;
    }
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message:"Snapshot"};
  }
  componentDidUpdate(prevProps, prevState, message){
    console.log('[Person.js] componentDidUpdate');
    console.log(message);
  }
  componentWillUnmount(){
    console.log('[Person.js] componentWillUnmount');
  }
  render(){
    console.log('[Person.js] renderring...');
    return this.props.persons.map((person,index)=>{
        return <PersonEl 
        name = {person.name} 
        age = {person.age}
        key = {person.id}
        click={()=>this.props.deletePerson(index)}
        changedName= {(event)=>this.props.changedName(event,index)}/>
    })
  }
};


export default Person;