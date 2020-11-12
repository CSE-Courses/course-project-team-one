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
        <Link to={{pathname:"/", data:{username,password, currentClass}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div className= "discussion-everything">
          <div className="discussion-container">
            <div className="discussion-conversations-container">
              <div className="discussion-conversations">
                <button className="discussion-convobuttonadd"><FontAwesomeIcon icon = 'plus' size = "2x"/></button>
                <button className="discussion-convobutton">I need help with math</button>
                <button className="discussion-convobutton">Are office hours cancelled?</button>
                <button className="discussion-convobutton">I'm bored</button>
                <button className="discussion-convobutton">I missed class what was the homework?</button>
              </div>
            </div>
            <div className="discussion-messages">
                <p1>Message</p1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DiscussionPage;