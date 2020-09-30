import React from 'react';
import "./notifications-page.css";
import  Notilayout from './button-latout'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function NotificationsPage() {
  const Announcement =()=>{
    console.log("Announcement")
};

  return (
    
    <div>
      <div className="notifications-header">
        <header><h1>Notifications</h1></header>
      </div>

      <Link to="/"><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
    </button></Link>
    
    <Notilayout> </Notilayout>

    </div>
  );
  

}
export default NotificationsPage;