import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Deadlinepage(){
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
     <div className="deadline-header">
        <header><h1>Deadline</h1></header>
      </div>

      <script>
        document.write(Date());
</script>
        <Link to="notifications"><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
    </button></Link>

    <div className="homework">   
          <h1 >Empty</h1>                  
        </div>
     
    </div>
    );
}

export default Deadlinepage;