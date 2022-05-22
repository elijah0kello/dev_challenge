import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import "./Dashboard.css"

export default function Dashboard(props) {
  return(
    <div className='container'>
      <div className='nav-container-list'>
        <ul className='nav'>
          <li><NavLink className="text-white" to="/factorial">Calculate Factorial</NavLink></li>
          <li><NavLink className="text-white" to="/commons">Calculate Common Multiples</NavLink></li>
          <li><NavLink className="text-white" to="squareroot">Calculate Square Roots</NavLink></li>
        </ul>
      </div>
      <h2>Factorials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Factorial</th>
          </tr>
        </thead>
        <tbody>
          {props.fetchedData.factorials.map((item)=>{
          return(
            <tr>
              <td>{item.operand}</td>  
              <td>{item.result}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <h2>CommonMultiples</h2>
      <table className='table'>
       <thead>
       <tr>
          <th>Number 1</th>
          <th>Number 2</th>
          <th>Common Multiples</th>
        </tr>
       </thead>
       <tbody>
       {props.fetchedData.commons.map((item)=>{
        return(
          <tr>
            <td>{item.operand1}</td>  
            <td>{item.operand2}</td>
            <td>{item.commons}</td>
          </tr>
        )
      })}
       </tbody>
      </table>
      <h2>Square Roots</h2>
      <table className='table'>
        <thead>
        <tr>
          <th>Number</th>
          <th>Square Root</th>
        </tr>
        </thead>
        <tbody>
          {props.fetchedData.squares.map((item)=>{
          return(
            <tr>
              <td>{item.operand}</td>  
              <td>{item.result}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>

  );
}
