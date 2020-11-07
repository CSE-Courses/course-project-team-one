import React from "react";
import "./coursedocuments-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logistics from "./courseDocumentsComponents/Logistics";
import Syllabus from "./courseDocumentsComponents/Syllabus";
import Slides from "./courseDocumentsComponents/Slides";
import CourseDocInfo from "./courseDocumentsComponents/courseDocInfo";

function CourseDocumentsPage() {

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;

  var links = [["https://cse442.com/static_files/handouts/syllabus.pdf", "Syllabus"], ["https://cse442.com/static_files/slides/Lecture01.pdf", "Yeet"]];
  var links2 = [["https://cse442.com/static_files/handouts/syllabus.pdf", "Syllabus"], ["https://cse442.com/static_files/slides/Lecture01.pdf", "Yeet"],["https://cse442.com/static_files/slides/Lecture01.pdf", "Yeet"],["https://cse442.com/static_files/slides/Lecture01.pdf", "Yeet"]];
  var titles = [["Syllabus", links2], ["Slides", links], ["Yeet", links], ["Yeet", links2]];

  return(
    <div>
      <AppHeader username={username} password={password} currentClass={currentClass}/>
      
      <Link to={{pathname:"/", data:{username,password, currentClass}}}>
            <button className="backhome-profile">
            <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
            </button></Link>

      <div className ="courseDocumentsPage">
          <h1 className="header">Course Documents</h1>
          <div className="docBubbles">
            {titles.map ((titles)=>
                                  <div>
                                     <CourseDocInfo titles={titles[0]} links={titles[1]}></CourseDocInfo>
                                  </div>
                              )} 
          </div>
      </div>
    </div>
  );

  }
  
  export default CourseDocumentsPage;
