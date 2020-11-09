import React, { useState , useEffect} from "react";
import "./coursedocuments-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CourseDocInfo from "./courseDocumentsComponents/courseDocInfo";
import axios from 'axios';

function CourseDocumentsPage() {

  const[classLinks, setClassLinks] = useState([]);

  useEffect(() => {
    getClasses();
    }, []);

const getClasses = () =>{
    axios.get('http://localhost:5000/classes').then(res => setClassLinks(res.data));
    //axios.get('https://ubwebapp-backend.herokuapp.com/classes/').then(res => setClasses(res.data)); //Use this one for public deployment
  }

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

  if(classLinks.length < 1){
    return(
        <h3 className="Loading">Loading...</h3>
    )
  }
  else{
    var courseLinks;
    for(var x = 0; x < classLinks.length; x++){
      if(currentClass == classLinks[x].className){
        courseLinks = classLinks[x].courseDocuments;
      }
    }
    return(
      <div>
        <AppHeader username={username} password={password} currentClass={currentClass}/>
        
        <Link to={{pathname:"/", data:{username,password, currentClass}}}>
              <button className="backhome-profile">
              <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
              </button></Link>
  
        <div className ="courseDocumentsPage">
            <h1 className="header">{currentClass} Course Documents</h1>
            <div className="docBubbles">
              {courseLinks.map ((sections)=>
                                    <div>
                                       <CourseDocInfo titles={sections.section[0]} links={sections.section[1]}></CourseDocInfo>
                                    </div>
                                )} 
            </div>
            <div className={currentClass == 'CSE421: Operating Systems' ? 'Noti' : 'hidden'}><p1>These links are only available if you are actually enrolled in the class</p1></div>
        </div>
      </div>
    );
  }
  
  }
  
  export default CourseDocumentsPage;
