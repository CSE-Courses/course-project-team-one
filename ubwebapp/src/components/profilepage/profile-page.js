import React from 'react';
import "./profile-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function ProfilePage() {

  const data = useLocation().data;
  const username = data.username;
  const password = data.password;

    return (
      
      <div>
        <AppHeader username={username} password={password}> </AppHeader>
        <div className="profile-header">
          <header><h1>Profile</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
    </div>
    );
  }
  
  export default ProfilePage;