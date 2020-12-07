import React from 'react';
import "./discussion-page.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Sendbox({sendMessage, text, setText, sendMessageButton}) {

      return (
        <div className="discussion-sendbox">
              <input className="discussion-input" placeholder=" message" onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} onChange={e => setText(e.target.value)} value={text}></input>
              <button className="discussion-send-button" onClick={e => sendMessageButton(e)}><FontAwesomeIcon icon = 'arrow-up' size = "2x"/></button>
              <button className="discussion-delete-button" onClick={e => sendMessageButton(e)}><FontAwesomeIcon icon = 'trash-alt' size = "2x"/></button>
        </div>
      );
    }
    
    export default Sendbox;