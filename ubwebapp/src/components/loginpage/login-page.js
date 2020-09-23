import React, {useState} from 'react';
import "./login-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';




function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 
  //Reset values after click
  const reset = () => {
    setUsername("");
    setPassword("");
  }

    return (
      <div className="login-body">
          <div className="login-bubble">
            <div className="bubble-content">
              <h1 className="head-text"><text>Welcome to </text><text className="bold-blue">UB</text><text className="italic">Learns!</text></h1>
              <form className="entry">
                <div className="user-entry">
                <FontAwesomeIcon icon = "user" size="2x"/>
                <input classname="input" name="username" onChange={e => setUsername(e.target.value)} type="text" placeholder="  Username" value={username}></input></div>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="password-entry">
                <FontAwesomeIcon icon = "lock" size="2x"/>
                <input classname="input" name="password" onChange={e => setPassword(e.target.value)} type="password" placeholder="  Password" value={password}></input></div>
                <br></br><br></br><br></br>
                <div className="button-div"><Link to={{pathname: "/", data:{username,password}}}><button onClick ={reset} className="button-login" >Login</button></Link></div>
              </form>  
            </div>
          </div>
      </div>
    );
  }
  
  export default LoginPage;