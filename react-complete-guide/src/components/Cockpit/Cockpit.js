import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
    const buttonElementRef = useRef(null);
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      buttonElementRef.current.click();
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
            <button ref={buttonElementRef} className={buttonCSSClasses} onClick={props.clicked}>Toggle Person</button>
            <AuthContext.Consumer>
              {(context)=><button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    )
}
export default React.memo(cockpit);