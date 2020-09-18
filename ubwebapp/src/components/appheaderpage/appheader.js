import React from 'react';
import './appheader.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const AppHeader = () => {
    return(
        <header className="home-header"><h1>
        <Link to ={"/"}><button className = "header-button"><text className="header-text1">UB</text><text className="header-text2">Learns</text></button></Link>
        <Link to ={"/profile"}>
          <button className="profile-button">
            <FontAwesomeIcon className="head-icon" icon = "user" size = "3x"/>
            <text className="profile-button-text">Profile</text>
          </button>
        </Link>
        </h1></header>
    );
}

export default AppHeader;