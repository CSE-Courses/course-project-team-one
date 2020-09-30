import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Announcementpage() {
    
    return (
      <div>
      <div className="announcements-header">
        <header><h1>Announcements</h1></header>
      </div>
  
    <Link to="notifications"><button className="backhome">
   <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
      </button></Link>

    <div className="news">   
          <h1 className="post">Post time:</h1>                  
          <p classname="content">  Announcement will be posted </p>
        </div>


</div>
    );
    
  
  }
  export default Announcementpage;