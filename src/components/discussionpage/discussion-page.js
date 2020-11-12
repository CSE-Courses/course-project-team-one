import React, {useState}  from 'react';
import "./discussion-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from'../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Message from './message';


function DiscussionPage() {

  const [currText, setCurrText] = useState("");
  const [currConvo, setCurrConvo] = useState([["devin", "Thanks!", "Office hours question"],["jordan", "I think 4", "Office hours question"],["devin", "What time are office hours today?", "Office hours question"], ["jordan", "I missed class today sorry", "I missed class what was the homework?"]]);

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

  const sendMessage = (e) =>{
    if (e.key === 'Enter') {
      setCurrConvo([[username, e.target.value], ...currConvo]);
      setCurrText("");
    }
  }
  const sendMessageButton = (e) =>{
      setCurrConvo([[username, currText], ...currConvo]);
      setCurrText("");
  }

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
            <div className="discussion-messages-container">
            <div className="discussion-messages">
              {currConvo.map ((mssg)=>
                                       <Message sender={mssg[0]} text={mssg[1]} username={username}></Message>
                                )} 
            </div>
            <div className="discussion-sendbox">
              <input className="discussion-input" placeholder=" message" onKeyDown={e => sendMessage(e)} onChange={e => setCurrText(e.target.value)} value={currText}></input>
              <button className="discussion-send-button" onClick={e => sendMessageButton(e)}><FontAwesomeIcon icon = 'arrow-up' size = "1x"/></button>
            </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default DiscussionPage;