import React from 'react';
import "./login-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function LoginPage() {
    return (
      <div className="login-body">
          <div className="login-bubble">
            <div className="bubble-content">
              <h1 className="head-text"><text>Welcome to </text><text className="bold-blue">UB</text><text className="italic">Learns!</text></h1>
              <div className="entry">
                <div>
                <FontAwesomeIcon icon = "user" size="2x"/>
                <input type="text" placeholder="  Username"></input></div>
                <div><br></br><br></br><br></br><br></br><br></br>
                <FontAwesomeIcon icon = "lock" size="2x"/>
                <input classname="text-password" type="password" placeholder="  Password"></input></div>
                <br></br><br></br><br></br>
                <div className="button-div"><Link to="/"><button className="button-login">Login</button></Link></div>
              </div>  
            </div>
          </div>
      </div>
    );
  }
  
  export default LoginPage;