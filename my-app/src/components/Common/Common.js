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

export default function Common(){
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        sendOps(value1,value2)
    }
    return(
        <div className="login-wrapper-1">
          <div className="login-cont">
          <h3 className='headTitle'>Calculate Common</h3>
        <form onSubmit={handleSubmit}>
          <div className='input-cont'>
            <input className="common-input" placeholder="Number 1" type="text" onChange={ e => setValue1(e.target.value)} />
          </div>
          <div className='input-cont'>
            <input className="common-input" placeholder="Number 2" type="text" onChange={ e => setValue2(e.target.value)} />
          </div>
          <div className='input-cont'>
            <button className="common-cta" type="submit">Submit</button>
          </div>
        </form>
        <NavLink to="/">Home</NavLink>
          </div>
      </div>
    )
}
