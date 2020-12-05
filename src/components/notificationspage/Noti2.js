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

const Noti_assig = ({deadlines,deteleitem}) =>{

    if(deadlines==0) {
        return (
            <h3 className="Loading"> Nothing </h3>
        );
    

    }
    else{
        return(
            <div   className="deadline-align">
            <div className="deadlineBubble">
                {deadlines.map ((deadline,index)=>
                 <div className="docLinks"><span className="deadline-text">{deadline}</span> 
                <span> <button classname="deteleButton" onClick={()=>{deteleitem(deadline)}}>X</button></span>
                <form className="contact-form" onSubmit={sendEmail}>
            <input type="submit" value="Send Email" />
          </form></div>
                                )}            
            </div>

          </div>
        );      
    }
    
}

export default Noti_assig;