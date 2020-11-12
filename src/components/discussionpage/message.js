import React from 'react';
import "./discussion-page.css";

function Message({sender, text, username}) {

  
      return (
        <div className={sender == username ? 'discussion-text' : 'discussion-text-other'}>
            <div className={sender == username ? 'discussion-bubble' : 'discussion-bubble-other'}><p1 className="discussion-messagecontent">{text}</p1></div>
            <div className={sender == username ? 'discussion-sender' : 'discussion-sender-other'}>{sender}</div>
        </div>
      );
    }
    
    export default Message;