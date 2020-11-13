import React, {useState, useEffect}  from 'react';
import "./discussion-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from'../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Message from './message';
import io from 'socket.io-client';
import Sendbox from './sendbox';
import Messagebubbles from './messagebubbles';

let socket;



function DiscussionPage() {

  const [text, setText] = useState('');
  const [convo, setConvo] = useState([["jordan", "Hey", "Office hours question"]]);  //Replacing currConvo

  useEffect(() =>{
      socket=io('localhost:5000', {transports: ['websocket']});

    return () => {
      socket.disconnect();
      socket.off();
    }

  }, ['localhost:5000'])

  useEffect(() =>{
    socket.on('message', message =>{
      setConvo(convo => [message, ...convo]);
    })
  }, []);

  

  const [currChats, setCurrChats] = useState(["Office hours question", "I missed class what was the homework?", "Need help understanding python"]);
  const [selectedChat, setSelectedChat] = useState(currChats[0]);

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

  const sendMessage = (event) => {
    event.preventDefault();

    if(text){
      socket.emit('send-message', [username, text, selectedChat]);
      setText("");
    }
  }

  const sendMessageButton = (e) =>{
    e.preventDefault();

    if(text){
      socket.emit('send-message', [username, text, selectedChat]);
      setText("");
    }
}

  const changeChat = (value) =>{
    setSelectedChat(value.mssg);
  }

   console.log(convo);

    return (
      <div>
        <AppHeader username={username} password={password} currentClass ={currentClass}/>
        <Link to={{pathname:"/", data:{username,password, currentClass}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div className= "discussion-everything">
          <div className="discussion-container">
            {/* <div className="discussion-conversations-container">
              <div className="discussion-conversations">
                <button className="discussion-convobuttonadd"><FontAwesomeIcon icon = 'plus' size = "2x"/></button>
                {currChats.map ((mssg)=>
                                  <button className={selectedChat === mssg ? 'selected-chat' : "discussion-convobutton"} onClick={e => changeChat({mssg}) }>{mssg}</button>
                                )} 
              </div>
            </div> */}
            <div className="discussion-messages-container">
            <Messagebubbles convo={convo} username={username}></Messagebubbles>
            <Sendbox sendMessage={sendMessage} text={text} setText={setText} sendMessageButton={sendMessageButton}></Sendbox>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default DiscussionPage;