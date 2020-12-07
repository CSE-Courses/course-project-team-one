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
  const [popupSubject, setPopupSubject] = useState("");
  const [popupQuestion, setPopupQuestion] = useState("");
  const [deletePopup, setDeletepopup] = useState(false);

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

  const deletePopupState = () =>{
    setDeletepopup(!deletePopup);
  }

  const addConvo = () =>{
    if(popupSubject.length > 0 && popupQuestion.length > 0){
      axios.post('http://localhost:5000/classes/updateroom/' + classid, {
        rooms: [popupSubject, ...currChats],
        messages: [[username, popupQuestion, popupSubject], ...convo]
      });
      
      socket.emit('send-message', [username, popupQuestion, popupSubject]);
      setCurrChats([popupSubject, ...currChats]);
      popUpState();
    }
    else if(popupQuestion.length === 0 && popupSubject.length === 0){
      popUpState();
    }
    setPopupSubject("");
    setPopupQuestion("");
  }

  const deleteMessages = () =>{
    console.log(convo);
    for(var x = 0; x < convo.length; x++){
      if(convo[x][2] === selectedChat){
        console.log("yup");
        convo.splice(x,1);
        deleteMessages();
      }
    }
    console.log(convo);
  }

  const deleteChat = () =>{
    var newChat = currChats;
    var index = newChat.indexOf(selectedChat);
    if(index !== -1){
      newChat.splice(index,1);
      deleteMessages();
      getSelectedChat();
    }
    // axios.post('http://localhost:5000/classes/updateroom/' + classid, {
    //     rooms: currChats,
    //     messages: convo
    //   });
    deletePopupState();
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
      axios.post('http://localhost:5000/classes/updatemessage/' + classid, {
        messages: [[username, text, selectedChat], ...convo]
      })
      socket.emit('send-message', [username, text, selectedChat]);
      setText("");
    }
}

  const changeChat = (value) =>{
    setSelectedChat(value.mssg);
  }

    return (
      <div>
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
            <Sendbox sendMessage={sendMessage} text={text} setText={setText} sendMessageButton={sendMessageButton} selectedChat={selectedChat} deletePopupState={deletePopupState}></Sendbox>
            </div>
            </div>
        </div>
        <div className={`modal-background modalVisible-${popUp}`}>
          <div className='modal-rectangle'>
            <p1 className="popup-titles">Subject</p1>
            <input className="popup-subject"placeholder="Subject..." onChange={e => setPopupSubject(e.target.value)} value={popupSubject}></input>
            <p1 className="popup-titles">Ask your question</p1>
            <input className="popup-question" placeholder="Question..." onChange={e => setPopupQuestion(e.target.value)} value={popupQuestion}></input>
            <button onClick = {e => addConvo()} className="popup-button">Done</button>
          </div>
        </div>
        <div className={`modal-background modalVisible-${deletePopup}`}>
          <div className='modal-delete-rectangle'>
            <p1 className="popup-delete-title">Are you sure you want to delete your conversation?</p1>
            <div className="popup-delete-container">
            <button className="popup-delete-button2" onClick={e => deletePopupState()}>No</button>
              <button className="popup-delete-button1" onClick={e => deleteChat()}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DiscussionPage;