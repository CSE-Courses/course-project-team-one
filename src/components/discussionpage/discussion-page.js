import React, {useState, useEffect}  from 'react';
import "./discussion-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from'../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Message from './message';
import io from 'socket.io-client';
import Sendbox from './sendbox';
import Messagebubbles from './messagebubbles';
import axios from 'axios';

let socket;



function DiscussionPage() {

  const data = useLocation().data;
  var currentClass = "";
  if(data != null){currentClass= data.currentClass;}
  
  const [allClasses, setAllClasses] = useState([]); //All the classes pulled from backend...will verify right class later
  const [text, setText] = useState('');
  const [convo, setConvo] = useState([[]]);  //Replacing currConvo
  const [currChats, setCurrChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState("");
  const [classid, setClassid] = useState("");
  const [popUp, setPopUp] = useState(false);

  const getClasses = () =>{
    //'https://immense-island-74461.herokuapp.com/classes/'
    axios.get('http://localhost:5000/classes/').then(res => {
      setAllClasses(res.data);
      })
      
  }
 
  const getRooms = () => {
    if(allClasses.length > 0){
      for(var index = 0; index < allClasses.length; index++){
        if(allClasses[index].className === currentClass){
          setCurrChats(allClasses[index].rooms);
          setConvo(allClasses[index].messages);
          setClassid(allClasses[index]._id);
        }
      }
    }
  }

  const getSelectedChat = () => {
    if(currChats.length > 0){
    setSelectedChat(currChats[0]);
    }
  }

  const popUpState = () =>{
    setPopUp(!popUp);
  }
  

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
    });
    getClasses();
  }, []);

  useEffect(() =>{
    getRooms();
  }, [allClasses]);

  useEffect(() =>{
    getSelectedChat();
  }, [currChats]);
  
  
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;

  const sendMessage = (event) => {
    event.preventDefault();

    if(text){
      axios.post('http://localhost:5000/classes/updatemessage/' + classid, {
        messages: [[username, text, selectedChat], ...convo]
      })
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

    console.log(classid);
    return (
      <div>
        <div className={`modal-background modalVisible-${popUp}`}></div>
        <AppHeader username={username} password={password} currentClass ={currentClass}/>
        <Link to={{pathname:"/", data:{username,password, currentClass}}}><button className="backhome-discussion">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <div className= "discussion-everything">
          <div className="discussion-container">
            <div className="discussion-conversations-container">
              <div className="discussion-conversations">
                <button className="discussion-convobuttonadd" onClick={e => popUpState()}><FontAwesomeIcon icon = 'plus' size = "2x"/></button>
                {currChats.map ((mssg)=>
                                  <button className={selectedChat === mssg ? 'selected-chat' : "discussion-convobutton"} onClick={e => changeChat({mssg}) }>{mssg}</button>
                                )} 
              </div>
            </div>
            <div className="discussion-messages-container">
            <Messagebubbles convo={convo} username={username} actualChat={selectedChat}></Messagebubbles>
            <Sendbox sendMessage={sendMessage} text={text} setText={setText} sendMessageButton={sendMessageButton} selectedChat={selectedChat}></Sendbox>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default DiscussionPage;