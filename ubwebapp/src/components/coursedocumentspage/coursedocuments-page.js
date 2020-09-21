import React from "react";
import "./coursedocuments-page.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logistics from "./courseDocumentsComponents/Logistics";
//import Syllabus from "./courseDocumentsComponents/Syllabus";
//import Slides from "./courseDocumentsComponents/Slides";

function CourseDocumentsPage() {
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
      <div className="coursedocuments-header">
        <header>
          <h1> Course Documents </h1>{" "}
        </header>{" "}
      </div>{" "}
      <div className="container">
        <Link to="/">
          <button className="backhome">
            <FontAwesomeIcon icon="arrow-left" size="4x" />
          </button>{" "}
        </Link>{" "}
        <div>
          <Logistics
            title="Logistics"
            hour={logistics.hour}
            days={logistics.days}
            zoomMeeting={logistics.zoomMeeting}
            meetingPassword={logistics.meetingPassword}
            meeting={logistics.meeting}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CourseDocumentsPage;
