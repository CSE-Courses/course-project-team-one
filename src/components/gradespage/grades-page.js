import React, { useEffect, useState, Component } from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HW from './HW';
import RegradeRequest from './regrade';
import Submission from './submission';
import { findAllByTitle } from '@testing-library/react';
import axios from 'axios';
//import classes from '*.module.css';

  
function GradesPage (){

  const data = useLocation().data;  
  /*if(data == null){
    return(<Redirect to= "/login"></Redirect>)
  }*/
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

  const[Classes, setClasses] = useState([]);
  const[ClassAssignments, setClassAssignments] = useState([]);   
    useEffect(() => {
    getClasses();
   
    }, []);
    useEffect(() => {
      getAssignments();
     
      }, []);
  const getClasses = () =>{
    //axios.get('http://localhost:5000/classes').then(res => setClasses(res.data));
    axios.get('https://immense-island-74461.herokuapp.com/classes').then(res => setClasses(res.data));
  }
  const getAssignments = () =>{
    //axios.get('http://localhost:5000/assignments').then(res =>  setClassAssignments(res.data));
    axios.get('https://immense-island-74461.herokuapp.com/assignments').then(res =>  setClassAssignments(res.data));
  }
  if(Classes.length < 1){
    return(
        <h3>Loading...</h3>
    )
}
else{
    const currentClass = data.currentClass;
    var selectedClass;
    for(var i=0; i<Classes.length; i++){
      if(Classes[i].className == currentClass){
        selectedClass = i
      }
    }
    return (
      <div>
        <AppHeader username={username} password={password} currentClass={currentClass}/>
        <div className="grades-header">
          <header><h1>Grades</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password, currentClass}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div>
        
        <br></br>
        {Classes[selectedClass].assignments.map((assignment) => 
        <text>{assignment[0]}</text>
        )}
          <table className="gradestable"><tbody>
            <tr>
              <td><text className="gradestext">Assignment</text></td>
              <td><Link to={{pathname:"/HW",data:{username,password, currentClass}}}><button className="gradebuttons">
              <text className="gradestext">Score:</text></button></Link>
              </td>

              <td><Link to={{pathname:"/submission",data:{username,password, currentClass}}}><button className="gradebuttons">
              <text className="gradestext">View Submission</text></button></Link>
              </td>

              <td><Link to={{pathname:"/regrade",data:{username,password, currentClass}}}><button className="gradebuttons">
              <text className="gradestext">Regrade Request</text></button></Link>
              </td>
            </tr>
          </tbody></table>
        </div>
      </div>
    );
  }
}
  
export default GradesPage;