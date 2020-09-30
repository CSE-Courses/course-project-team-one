import React from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function HW(){

    const data = useLocation().data;
    const username = data.username;
    const password = data.password;

    return(
        <div>
            <AppHeader username={username} password={password}/>
            <div className="grades-header">
                <header><h1>Assignment</h1></header>
            </div>
        </div>
    );
}
export default HW;