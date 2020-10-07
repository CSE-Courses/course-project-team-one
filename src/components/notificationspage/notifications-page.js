import React from 'react';
import "./notifications-page.css";
import  Notilayout from './button-latout'
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function NotificationsPage() {
  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  if(data != null){
    if (!(data.username == "student1" && data.password == "password")){
      return(<Redirect to= "/login"></Redirect>)
    }
   }
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;

  const Announcement =()=>{
    console.log("Announcement")
};

  return (
    
    <div>
      <AppHeader username={username} password={password}/>
      <div className="notifications-header">
        <header><h1>Notifications</h1></header>
      </div>

      <Link to={{pathname:"/", data:{username,password}}}><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
    </button></Link>
    
    <Notilayout> </Notilayout>

    </div>
  );
  

}
export default NotificationsPage;