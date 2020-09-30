import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader'
import "./assignments-page.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AssignmentInformation from './assignments-info'


function AssignmentsPage() {

  const data = useLocation().data;
  const username = data.username;
  const password = data.password;

  const updateNotification = () => {

  };
    return (
      <div>
        <AppHeader username={username} password={password}/> 
        <div className="assignments-header">
          <header><h1>Assignments</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password}}}><button className="backhome">
      <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>  
        <div className="assignments">
          <AssignmentInformation />
        </div>
      
      </div>
    );
  }
  
  export default AssignmentsPage;