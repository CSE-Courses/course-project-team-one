import React from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function HW(){

    const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  
  const username = data.username;
  const password = data.password;

    return(
        <div>
            <AppHeader username={username} password={password}/>
            <div className="grades-header">
                <header><h1>Score</h1></header>
            </div>
            <Link to={{pathname:"/grades", data:{username,password}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <text className="gradestext"><h2>Your Score: 75/90</h2></text>
            <text className="gradestext"><h2>Class Average: 60/90</h2></text>
            <text className="gradestext"><h2>Median: 70/90</h2></text>
        </div>
    );
}
export default HW;