import React, {useState, useEffect}  from 'react';
import "./discussion-page.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Sendbox({sendMessage, text, setText, sendMessageButton, deletePopupState, convo, username, selectedChat}) {

  const [creator, setCreator] = useState(false);

  const checkCreator = () =>{
    var owner ="";
    for(var x = 0; x < convo.length; x++){
      if(convo[x][2] === selectedChat){
        owner=convo[x][0];
      }
    }
    if(owner === username){setCreator(true);}
    else{setCreator(false);}
  }

  useEffect(() =>{
    checkCreator();
  }, );

      return (
        <div className="discussion-sendbox">
              <input className="discussion-input" placeholder=" message" onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} onChange={e => setText(e.target.value)} value={text}></input>
              <button className="discussion-send-button" onClick={e => sendMessageButton(e)}><FontAwesomeIcon icon = 'arrow-up' size = "2x"/></button>
              <button className={creator ? 'discussion-delete-button' : 'hidden'} onClick={e => deletePopupState()}><FontAwesomeIcon icon = 'trash-alt' size = "2x"/></button>
        </div>
      );
    }
    
    export default Sendbox;