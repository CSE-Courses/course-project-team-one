import React from 'react';
import "./grades-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";


function RegradeRequest(){


    const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }
  
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;
  //const studentEmail = data.email;
  //const studentID = data.UBIT;

      /*var reply_to = studentEmail;
      var ubit_name = username;
      var to_name= 'Grader';
      var person_number = studentID;
      var course_id = currentClass*/
      

  function sendEmail(e){
    e.preventDefault();
    /*var e = {
      reply_to: studentEmail,
      ubit_name: username,
      to_name: 'Grader',
      person_number: studentID,
      course_id: currentClass
      
    };*/
    emailjs.sendForm('service_8dgrifs', 'template_k6ran8j', e.target, 'user_WZhv222zQzIcwIfK6Kki5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

    return(
        <div>
            <AppHeader username={username} password={password} currentClass={currentClass}/>
            <div className="grades-header">
                <header><h1>Regrade Request</h1></header>
            </div>
            <Link to={{pathname:"/grades", data:{username,password,currentClass}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
          </button></Link>
          <div>
            <text className="gradestext"> Please fill in your credentials and reason for request below:</text>
          </div>
          <div className="container">
            <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                  <input type="text" className ="form-control" placeholder="Assignment title" name="assignment" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input type="text" className="form-control" placeholder="Your name" name="from_name" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input type="text" className="form-control" placeholder="Your username" name="ubit_name" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input type="text" className="form-control" placeholder="Your person #" name="person_number" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input type="text" className="form-control" placeholder="Course ID, e.g., PHY101" name="course_id" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input type="email" className="form-control" placeholder="Your UB Email" name="reply_to" required/>
                </div>
                
                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea className="form-control" id="" cols="50" rows="8" placeholder="Reason for request" name="message" required/> 
                
                </div>
                <div className="col-8 pt-3 mx-auto">
                  <input type="submit" className="btn btn-info" value="Submit Request"></input>
                </div>
              </div>
            </form>
          </div>
        
        </div>
    );
}
export default RegradeRequest;
/*
<center><input className="gradesinput" type="text" id="myText" value="Type in the reason for regrade request here..."></input></center>
<center><button className="gradebuttons">SUBMIT</button></center>
*/