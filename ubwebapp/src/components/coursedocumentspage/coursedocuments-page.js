import React from "react";
import "./coursedocuments-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logistics from "./courseDocumentsComponents/Logistics";
import Syllabus from "./courseDocumentsComponents/Syllabus";
import Slides from "./courseDocumentsComponents/Slides";

function CourseDocumentsPage() {

  const data = useLocation().data;
  const username = data.username;
  const password = data.password;

  const logistics = {
    days: "MWF",
    hour: "3:00 pm - 3:50 pm",
    zoomMeeting: "N/A",
    meetingPassword: "N/A",
    meeting: "https://www.twitch.tv/hartloff",
  };

  const syllabusDetails = {
    syllabus: "https://cse442.com/static_files/handouts/syllabus.pdf",
  };

  const slidesDetails = {
    slides1: "https://cse442.com/static_files/slides/Lecture01.pdf",
    slides2: "https://cse442.com/static_files/slides/Lecture02.pdf",
    slides3: "https://cse442.com/static_files/slides/Lecture03.pdf",
    slides4: "https://cse442.com/static_files/slides/Lecture04.pdf",
    slides5: null,
    slides6: "https://cse442.com/static_files/slides/Lecture06.pdf",
    slides7: "https://cse442.com/static_files/slides/Lecture07.pdf",
    slides8: "https://cse442.com/static_files/slides/Lecture08.pdf",
    slides9: "https://cse442.com/static_files/slides/Lecture09.pdf",
  };

    return (
      <div>
        <AppHeader username={username} password={password}/>
        <div className="coursedocuments-header">
          <header><h1>Course Documents</h1></header>
        </div>
        <div>
          <Link to={{pathname:"/", data:{username,password}}}><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
          </button></Link>
        </div>
        
        <div className="all-center">
          <Logistics
            title="Logistics"
            hour={logistics.hour}
            days={logistics.days}
            zoomMeeting={logistics.zoomMeeting}
            meetingPassword={logistics.meetingPassword}
            meeting={logistics.meeting}
          />{" "}
          </div>
        <div className="container">
          <Syllabus
            syllabus={syllabusDetails.syllabus}
            website="https://cse442.com/"
          />
        </div>
        <div className="container">
          <Slides
            slides1={slidesDetails.slides1}
            slides2={slidesDetails.slides2}
            slides3={slidesDetails.slides3}
            slides4={slidesDetails.slides4}
            slides6={slidesDetails.slides6}
            slides7={slidesDetails.slides7}
            slides8={slidesDetails.slides8}
            slides9={slidesDetails.slides9}
          />{" "}
        </div>{" "}
      </div>
      
        
    );
  }
  
  export default CourseDocumentsPage;
