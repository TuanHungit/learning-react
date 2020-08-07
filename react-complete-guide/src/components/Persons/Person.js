import React from 'react'
import Person from '../Persons/Person/Person'
const persons = (props) => props.persons.map((person,index)=>{
    return <Person 
    name = {person.name} 
    age = {person.age}
    key = {person.id}
    click={()=>props.deletePerson(index)}
    changedName= {(event)=>props.changedName(event,index)}/>
  })

export default persons;