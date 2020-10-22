import React, {Component} from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HW from './HW';
import RegradeRequest from './regrade';
import Submission from './submission';
import { findAllByTitle } from '@testing-library/react';

/*class Hw extends Component {
  
  render(){
    
  }

}*/
function GradesPage() {
  const data = useLocation().data;
  //const hw1 = 
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }
  
  const username = data.username;
  const password = data.password;

    return (
      <div>
        <AppHeader username={username} password={password}/>
        <div className="grades-header">
          <header><h1>Grades</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div>
          <table className="gradestable"><tbody>
            <tr>
              <td><text className="gradestext">Assignment 1</text></td>
              <td><Link to={{pathname:"/HW",data:{username,password}}}><button className="gradebuttons">
              <text className="gradestext">Score: 90/100</text></button></Link>
              </td>

              <td><Link to={{pathname:"/submission",data:{username,password}}}><button className="gradebuttons">
              <text className="gradestext">View Submission</text></button></Link>
              </td>

              <td><Link to={{pathname:"/regrade",data:{username,password}}}><button className="gradebuttons">
              <text className="gradestext">Regrade Request</text></button></Link>
              </td>
            </tr>
          </tbody></table>
        </div>
      </div>
    );
  }
  
export default GradesPage;