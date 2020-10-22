import React from "react";
import { Redirect } from "react-router-dom";
import AssignmentsPage from "./assignments-page"

function AssignmentInformation(){

    const course = "CSE442 Software Engineering"
    const assignment = "Assignment: Entire project"
    const dueDate = "Due: Yesterday!!!"

    //For every assignment skip about 50 pixels and placce the assignment and grade per course
    //Grow box based on the amount of courses
    return(
        <div  className="assignmentText">
            <div className="assignment-content">
                <h3>{course}</h3>
                <br></br>
                <p>{assignment}</p>
                <p>{dueDate}</p>
                <br></br>
            </div>
        </div>
    )
}

export default AssignmentInformation;