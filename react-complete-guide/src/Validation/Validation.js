import React from 'react';
const validation = (props)=>{
    let validated = null;
    if(props.text.length<5){
        validated = "Text too sort!";
    }else if(props.text.length>10){
        validated = "Text too long!";
    }
    return (
        <div>
            <p>{validated}</p>
        </div>
    )
}
export default validation;