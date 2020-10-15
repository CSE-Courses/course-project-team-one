import React from 'react';
import Notibutton from './Notification-buttons';
import './notifications-page.css';


const Notibuttonlatout = () => {
    return(
        <form>
            <div className="noti-button">
             
                <Notibutton icon = "lightbulb" text="Announcement" notify="1" link="/announcements"></Notibutton>
                <Notibutton icon = "info-circle" text="Deadline" notify="2" link="/deadlines" ></Notibutton>  
                                     
            </div>
        </form>
    )
}

export default Notibuttonlatout