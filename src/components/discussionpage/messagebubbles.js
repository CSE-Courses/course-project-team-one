import React from 'react';
import "./discussion-page.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Message from './message';

function Messagebubbles({convo, username, actualChat}) {


    console.log(convo);
      return (
        <div className="discussion-messages">
              {convo.map ((mssg)=>
                                       <Message sender={mssg[0]} text={mssg[1]} username={username} selectedChat={mssg[2]} actualChat={actualChat}></Message>
                                )} 
            </div>
      );
    }
    
    export default Messagebubbles;