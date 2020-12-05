import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Document from './document'

function Deadlinepage(){
  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

    return(
        <div>
     <AppHeader username={username} password={password} currentClass={currentClass}/>     
     <div className="deadline-header">
        <header><h1>Deadline</h1></header>
      </div>

     
        <Link to={{pathname:"/notifications", data:{username,password, currentClass}}}><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
    </button></Link>

    <Document></Document>  
    
    </div>
    );
}

export default Deadlinepage;
