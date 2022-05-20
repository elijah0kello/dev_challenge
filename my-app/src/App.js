import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

function App() {
  const [token, setToken] = useState(); //auth token

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/auth' element={<Preferences/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
