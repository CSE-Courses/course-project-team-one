import React from 'react';
import "./profile-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function ProfilePage() {

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;

    return (
      
      <div>
        <AppHeader username={username} password={password}> </AppHeader>
        
          <Link to={{pathname:"/", data:{username,password}}}>
            <button className="backhome-profile">
            <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
            </button></Link>
          
          <div className= "profile-body">
          <div className="profile-bubble">
            <div className="icon-bubble"><FontAwesomeIcon icon = 'user' size = "5x"/></div>
            <div className="profile-contents">
              <h1>Johnny AppleSeed</h1><br></br><br></br><br></br>
              <h1>UBIT : 50220000 </h1><br></br><br></br><br></br>
              <h1>Email : appleseed@buffalo.edu</h1>
              </div>
              
              <Link to={{pathname:"/login"}}>
                <button className = "signout-button">Sign out</button>
              </Link>

          </div>
        </div>
    </div>
    );
  }
  
  export default ProfilePage;