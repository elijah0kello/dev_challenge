import React, {useState} from "react";
import {NavLink} from "react-router-dom"



async function sendOps(operand1,operand2){
    var formdata = new FormData();
    formdata.append("operand1", operand1);
    formdata.append("operand2", operand2);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:8000/common/", requestOptions)
    .then(response => response.text())
    .then(result => {
        alert("Calculation Executed "+result);
        window.location.href = "/";
        console.log(result)
    })
    .catch(error => console.log('error', error));
}

export default function SquareRoot(){
    const [value, setValue] = useState(0);

    const handleSubmit = (e)=>{
        e.preventDefault()
        sendOps(value);
    }
    return(
        <div className="login-wrapper-1">
          <div className="login-cont">
          <h1 className='headTitle'>Calculate Sqaure Root</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-cont'>
            <input placeholder="Number" type="text" onChange={ e => setValue(e.target.value)} />
          </div>
          <div className='input-cont'>
            <button type="submit">Submit</button>
          </div>
        </form>
        <NavLink to="/">Home</NavLink>
          </div>
      </div>
    )
}