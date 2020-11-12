import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Document from './document'
import moment from 'moment';

function Deadlinepage(){
  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

  
  const link_assign_button ={
    link_assign_button1 :     <Link to={{pathname:"/assignments", data:{username,password, currentClass}}}><button className="link_assign_button">
      Assignment1
</button></Link>,
 link_assign_button2 :     <Link to={{pathname:"/assignments", data:{username,password, currentClass}}}><button className="link_assign_button">
 Assignment2
</button></Link>,
  }
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
