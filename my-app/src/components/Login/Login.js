import React, {useState} from 'react';
import PropTypes from 'prop-types'

import './Login.css';


async function loginUser(credentials) {
  var formdata = new FormData();
  formdata.append("username",credentials["username"]);
  formdata.append("password",credentials["password"]);
  formdata.append("action",credentials["action"]);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  return fetch("http://localhost:8000/login/", requestOptions)
    .then(response => response.json())
}

async function SignUpUser(credentials) {
  var formdata = new FormData();
  formdata.append("username",credentials["username"]);
  formdata.append("password",credentials["password"]);
  formdata.append("action",credentials["action"]);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  return fetch("http://localhost:8000/login/", requestOptions)
    .then(response => response.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isSignUp, setIsSignUp] =  useState(false);
    const [title, setTitle] = useState("Login");


    const handleSubmit = async e => {
        e.preventDefault();
        if(isSignUp){
          const res = await SignUpUser({
            "username":username,
            "password":password,
            "action":"none"
          });
          setTitle("Login");
          setIsSignUp(false);
          alert("Now Login");
        }else{
          const res = await loginUser({
            "username":username,
            "password":password,
            "action":"login"
        });
        if(res["success"]){
          setToken(res["token"]);
          console.log(res)
        }else{
          alert("Ivalid Username or password")
        }
        }
    }


  return(
    <div className="login-wrapper-1">
      <div className='login-cont'>
      <h1 className='headTitle'>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-cont'>
          <input placeholder='Username' type="text" onChange={ e => setUserName(e.target.value)} />
        </div>
        <div className='input-cont'>
          <input placeholder='Password' type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='input-cont'>
          <button type="submit">Submit</button>
        </div>
        <p className='label' onClick={(e) =>{
          e.target.hidden = true;
          setTitle("Sign Up")
          setIsSignUp(true);
        }}>Don't have an account? SignUp</p>
      </form>
      <a href='/'>Home</a>
      </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}