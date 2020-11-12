import React from 'react';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_db9xt3g', 'template_tsmh1b7', e.target, 'user_Aq3su5M8iXLr5kbvoaFhH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

const Noti_link = ({titles,links,deadlines}) =>{

    if(titles != "Homeworks"){
        return (
            <h3 className="Loading"></h3>
        );
    }
   else{
        console.log(titles);
        return(
            <div   className="deadline-align">
            <div className="deadlineBubble">
                <div className="deadlineBoxTitle">{titles}</div>
                {links.map ((links)=>
                 <div className="docLinks"><a href={links[0]} target="_blank">{links[1]}</a>: <a className="deadline-text">{deadlines}</a></div>
                                )}            
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="submit" value="Send Email" />
          </form>
          </div>
        );
                }
}

export default Noti_link;