import './notifications-page.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import '../icons/icons'


const Notibuttons = ({icon,text, notify, link}) =>{
    notify = {notify}.notify; 
    if(notify > 0){
        return(
            <Link to ={link}>
                <button className="home-button">
                <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                <text className="home-text">{text}</text>
                </button>
            </Link>
            
        )
    }
    return( 
        <Link to ={link}>
            <button className="home-button">
            <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
          
            <text className="home-text">{text}</text>
            </button>
        </Link>
    )
}

export default Notibuttons;