import React from 'react';
import "./discussion-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from'../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function DiscussionPage() {

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

    return (
      <div>
        <AppHeader username={username} password={password} currentClass ={currentClass}/>
        <div className="discussions-header">
          <header><h1>Discussions</h1></header>
        </div>
        <Link to={{pathname:"/", data:{username,password, currentClass}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
      </div>
    );
  }
  
  export default DiscussionPage;