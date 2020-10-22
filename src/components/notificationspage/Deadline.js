import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Document from './document'
import moment from 'moment';

function Deadlinepage(){
  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

   const document = {
    dueDate :  <p className='grey-text'> {Date.createdAt? moment(Date.createdAt.toDate()).calendar(): "10-02-2020"}</p>,

    assignment_doc:  "https://piazza.com/class_profile/get_resource/kegjk8a65qz79w/kf8qetmgzg02mk",
    assignment_doc1:  "https://piazza.com/class_profile/get_resource/kegjk8a65qz79w/kfx748uqk3sth",
  };

  const username = data.username;
  const password = data.password;

  
  const link_assign_button ={
    link_assign_button1 :     <Link to={{pathname:"/assignments", data:{username,password}}}><button className="link_assign_button">
      Assignment1
</button></Link>,
 link_assign_button2 :     <Link to={{pathname:"/assignments", data:{username,password}}}><button className="link_assign_button">
 Assignment2
</button></Link>,
  }
    return(
        <div>
     <AppHeader username={username} password={password}/>     
     <div className="deadline-header">
        <header><h1>Deadline</h1></header>
      </div>

      <script>
        document.write(Date());
</script>
        <Link to={{pathname:"/notifications", data:{username,password}}}><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
    </button></Link>

    
        <div className="all-center">
          <Document
            title={link_assign_button.link_assign_button1}
            assignment_doc={document.assignment_doc}
            dueDate={document.dueDate}            
          />{" "}
          </div>
     
          <div className="all-center">
          <Document
            title={link_assign_button.link_assign_button2}
            assignment_doc1={document.assignment_doc1}
            dueDate1={document.dueDate1}            
          />{" "}
          </div>
    </div>
    );
}

export default Deadlinepage;
