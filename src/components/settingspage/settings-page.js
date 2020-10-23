import React from 'react';
import "./settings-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import SetNotifications from './SetNotifications'


function SettingsPage() {

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass

    return (
      <div>

        <AppHeader username={username} password={password} currentClass={currentClass}/>
        <div className="settings-header">
          <header><h1>Settings</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password, currentClass}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div className= "settings-options">
          
                <SetNotifications />       
       
        </div>
      </div>

    );
  }
  
  export default SettingsPage;