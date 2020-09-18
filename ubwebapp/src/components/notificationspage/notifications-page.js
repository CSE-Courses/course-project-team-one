import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function NotificationsPage() {
    return (
      <div>
        <div className="notifications-header">
          <header><h1>Notifications</h1></header>
        </div>
        <Link to="/"><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
      </button></Link>
      </div>
    );
    
  }
  
  export default NotificationsPage;