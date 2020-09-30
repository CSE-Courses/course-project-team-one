import React from 'react';
import "./settings-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import SetNotifications from './SetNotifications'


function SettingsPage() {

  const data = useLocation().data;
  const username = data.username;
  const password = data.password;


    return (
      <div>

        <AppHeader username={username} password={password}/>
        <div className="settings-header">
          <header><h1>Settings</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div className="settings">
                <SetNotifications />       
       </div>
      </div>

    );
  }
  
  export default SettingsPage;