import React from 'react';
import "./settings-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 


function SettingsPage() {
    return (
      <div>
        <div className="settings-header">
          <header><h1>Settings</h1></header>
        </div>
        <Link to="/"><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
      </div>
    );
  }
  
  export default SettingsPage;