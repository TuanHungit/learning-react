import React, {useEffect} from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert("Saved data to cloud!");
      }, 1000);
      return ()=>{
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);
    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return ()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    })
    const assignClasses = [];
    let buttonCSSClasses = '';
    if(props.showName){
        buttonCSSClasses = classes.Red;
    }
    if (props.personslength <=2){
      assignClasses.push('red');
    }
    if(props.personslength<=1){
      assignClasses.push('bold'); 
    }
    return (
        <div className={classes.Cockpit}>
            <br/>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>It really working</p>
            <button className={buttonCSSClasses} onClick={props.clicked}>Toggle Person</button>
        </div>
    )
}
export default React.memo(cockpit);