import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import "./assignments-page.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function AssignmentsPage() {
    return (
      <div>
        <div className="assignments-header">
          <header><h1>Assignments</h1></header>
        </div>
      <Link to="/"><button className="backhome">
      <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>  
      </div>
    );
  }
  
  export default AssignmentsPage;