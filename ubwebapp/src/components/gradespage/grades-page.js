import React from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function GradesPage() {
    return (
      <div>
        <div className="grades-header">
          <header><h1>Grades</h1></header>
        </div>
        <Link to="/"><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
      </div>
    );
  }
  
  export default GradesPage;