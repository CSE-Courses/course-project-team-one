import React from 'react';
import "./coursedocuments-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function CourseDocumentsPage() {
    return (
      <div>
        <div className="coursedocuments-header">
          <header><h1>Course Documents</h1></header>
        </div>
        <Link to="/"><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
          </button></Link>
        </div>
    );
  }
  
  export default CourseDocumentsPage;