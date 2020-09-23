import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import './home-page.css';
import '../icons/icons'

const Homebuttons = ({icon,text, notify, link, username, password}) =>{
    console.log(username+ "fhewoihfiewhoifhoiweh");
    notify = {notify}.notify; 
    if(notify > 0){
        if(link == "/assignments"){
            return(
                <Link to={{pathname: "/assignments", data:{username,password}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/grades"){
            return(
                <Link to={{pathname: "/grades", data:{username,password}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/discussion"){
            return(
                <Link to={{pathname: "/discussion", data:{username,password}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/coursedocuments"){
            return(
                <Link to={{pathname: "/coursedocuments", data:{username,password}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/notifications"){
            return(
                <Link to={{pathname: "/notifications", data:{username,password}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/settings"){
            return(
                <Link to={{pathname: "/settings", data:{username,password}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
    }
    else{
        if(link == "/assignments"){
            return( 
                <Link to={{pathname: "/assignments", data:{username,password}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/grades"){
            return( 
                <Link to={{pathname: "/grades", data:{username,password}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/discussion"){
            return( 
                <Link to={{pathname: "/discussion", data:{username,password}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/coursedocuments"){
            return( 
                <Link to={{pathname: "/coursedocuments", data:{username,password}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/notifications"){
            return( 
                <Link to={{pathname: "/notifications", data:{username,password}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/settings"){
            return( 
                <Link to={{pathname: "/settings", data:{username,password}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
    }


}


export default Homebuttons;