import React from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function RegradeRequest(){

    const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  if(data != null){
    if (!(data.username == "student1" && data.password == "password")){
      return(<Redirect to= "/login"></Redirect>)
    }
   }
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }
  
  const username = data.username;
  const password = data.password;

    return(
        <div>
            <AppHeader username={username} password={password}/>
            <div className="grades-header">
                <header><h1>Regrade Request</h1></header>
            </div>
            <Link to={{pathname:"/grades", data:{username,password}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
        <center><input className="gradesinput" type="text" id="myText" value="Type in the reason for regrade request here..."></input></center>
        <center><button className="gradebuttons">SUBMIT</button></center>
        </div>
    );
}
export default RegradeRequest;