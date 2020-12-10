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
    // axios.get('http://localhost:5000/classes').then(res => setClasses(res.data));
    axios.get('https://tranquil-coast-56327.herokuapp.com/classes').then(res => setClasses(res.data));
    //axios.get('https://immense-island-74461.herokuapp.com/classes').then(res => setClasses(res.data));
  }
  const getAssignments = () =>{
    // axios.get('http://localhost:5000/assignments').then(res =>  setClassAssignments(res.data));
    axios.get('https://tranquil-coast-56327.herokuapp.com/assignments').then(res =>  setClassAssignments(res.data));
    //axios.get('https://immense-island-74461.herokuapp.com/assignments').then(res =>  setClassAssignments(res.data));
  }
  if(Classes.length < 1){
    return(
        <h3>Loading...</h3>
    )
}
else{
    const currentClass = data.currentClass;
    var selectedClass;
    var index=0;
    for(var i=0; i<Classes.length; i++){
      if(Classes[i].className == currentClass){
        selectedClass = i
      }
    }
    for(var i=0; i<Classes[selectedClass].students.length; i++){
      if(Classes[selectedClass].students[i]==username){
        index=i;
      }
    }
    var average=0;
    var avg;
    let arr = new Array();
    for(var j=0; j<Classes[selectedClass].assignments.length; j++){
      for(var i=0; i<Classes[selectedClass].assignments[j][3].length; i++){
        //if nul then 0
        if(Classes[selectedClass].assignments[j][3][i]=="N/G"){

        }
        else{
          average = parseInt(Classes[selectedClass].assignments[j][3][i]) + average;
        }
      }
      average=average/Classes[selectedClass].assignments[j][3].length;
      avg = average.toString(10);
      arr.push(avg);
      average=0;
      //set average
      //average=0
    }
    //var avg = average.toString(10);

    //var a = parseInt("10")
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
        <table className="gradestable"><tbody>
        <td>
        {Classes[selectedClass].assignments.map((assignment) => 
          <tr><text>{assignment[0]}:</text></tr>
        )}
        </td>
        
        <td>
        {Classes[selectedClass].assignments.map((assignment) => 
          <tr><text>{assignment[3][index]}</text></tr>
        )}
        </td>
                
        <td>
        {Classes[selectedClass].assignments.map((assignment) => 
          <tr><text>/{assignment[2]}</text></tr>
        )}
        </td> 
        
        <td>
          {arr.map((a)=>
            <tr><text>Class Average:{a} </text></tr>
          )}
        </td>  
        </tbody>
        </table> 
        
          <table className="gradestable"><tbody>
            <tr>
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