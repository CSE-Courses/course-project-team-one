import React from 'react';
import "./profile-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function ProfilePage() {
    return (
      <div>
        <div className="profile-header">
          <header><h1>Profile</h1></header>
        </div>
        <Link to="/"><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
    </div>
    );
  }
  
  export default ProfilePage;