import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Factorial from './components/Factorial/Factorial';
import useToken from './components/App/useToken';
import Common from './components/Common/Common';
import SquareRoot from './components/SquareRoot/SquareRoot';

var apidata;
async function fetchResults() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch("http://localhost:8000/home/", requestOptions)
    .then(response => response.json())
}


function App() {
  useEffect( () =>{
    async function getData(){
    apidata = await fetchResults();
    console.log(apidata);
    }
    getData();
  },[]);

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard fetchedData={apidata} />}/>
        <Route path='/factorial' element={<Factorial/>}/>
        <Route path="/commons" element={<Common/>} />
        <Route path='/squareroot' element={<SquareRoot/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
