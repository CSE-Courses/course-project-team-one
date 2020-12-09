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

const Noti_link = ({titles,links,deadlines,deteleitem}) =>{

        if(links==0&&deadlines==0){
            return(           
                 <h3 className="Loading"> Nothing </h3>
            );
        }
    if(titles != "Homeworks"){
        return (
            <h3 className="Loading"></h3>
        );
    }
   else{
        return(
            <div   className="deadline-align">
            <div className="deadlineBubble">
                {links.map ((links,index)=>
                    
                    <div className="NotiLinks"><a target="_blank">{links[1]}</a> <a className="deadline-text">{deadlines[index]}</a> 
                 <button classname="deteleButton" onClick={()=>{deteleitem(links,deadlines[index])}}>X</button> <form className="contact-form" onSubmit={sendEmail}>
            <input type="submit" value="Send Email" />
          </form></div>
                                )}            
            </div>
            
          </div>
        );
                }
}

export default Noti_link;