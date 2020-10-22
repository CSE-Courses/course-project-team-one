import React, { useEffect, useState } from 'react';
import AssignmentsPage from "./assignments-page"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import axios from 'axios';
import { render } from '@testing-library/react';



function AssignmentInformation(){
    const data = useLocation().data;

const[Classes, setClasses] = useState([]);


    useEffect(() => {
    getClasses();
    }, []);

const getClasses = () =>{
    axios.get('http://localhost:5000/classes').then(res => setClasses(res.data));
    //axios.get('https://ubwebapp-backend.herokuapp.com/users/').then(res => setUsers(res.data)); //Use this one for public deployment
}




    //const course = 
   // const assignment = "Assignment: Entire project"
    const dueDate = "Due: Yesterday!!!";
    //Check to see if there is anything there
    //For every assignment skip about 50 pixels and placce the assignment and grade per course
    //Grow box based on the amount of courses
    
        if(Classes.length < 1){
            return(
                <h3>Loading...</h3>
            )
        }
        else{
            return(
                <div  className="assignmentText">
                    <div className="assignment-content">
                        <h3>{Classes[0].className}</h3>
                        <br></br>
                        <p>{dueDate}</p>
                        <br></br>
                    </div>
                </div>
            )
        }
    

    
}

export default AssignmentInformation;