import './notifications-page.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import '../icons/icons'


const Notibuttons = ({icon,text, notify, link}) =>{
    notify = {notify}.notify; 
    const data = useLocation().data;
    const username = data.username;
    const password = data.password;
    const currentClass = data.currentClass;
    if(notify > 0){
        
            if(link === "/announcements"){
                return(
                    <Link to ={{pathname: "/announcements", data:{username,password, currentClass}}}>
                        <button className="home-button">
                        <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                        <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                        <text className="home-text">{text}</text>
                        </button>
                    </Link>
                    
                )
            }
        
            if(link === "/deadlines"){
                return( 
                    <Link to ={{pathname: "/deadlines", data:{username,password, currentClass}}}>
                        <button className="home-button">
                        <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                        <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                        <text className="home-text">{text}</text>
                        </button>
                    </Link>
                )       
            }
    }
}

export default Notibuttons;