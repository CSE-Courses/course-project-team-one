import React, { useEffect, useState } from 'react';
import AssignmentsPage from "./assignments-page"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import axios from 'axios';
import { render } from '@testing-library/react';



function AssignmentInformation(){
    const data = useLocation().data;

const[Classes, setClasses] = useState([]);
const[ClassAssignments, setClassAssignments] = useState([]);
const[showEveryClass,setShowEveryClass]= useState(false)

    useEffect(() => {
    getClasses();

    }, []);



const getClasses = () =>{
    // axios.get('http://localhost:5000/classes').then(res => setClasses(res.data));
    axios.get('https://tranquil-coast-56327.herokuapp.com/classes').then(res => setClasses(res.data));
    //axios.get('https://immense-island-74461.herokuapp.com/classes').then(res => setClasses(res.data));
}
const getAssignments = () =>{
    // axios.get('http://localhost:5000/assignments').then(res => setClassAssignments(res.data));
    axios.get('https://tranquil-coast-56327.herokuapp.com/assignments').then(res => setClassAssignments(res.data));
    //axios.get('https://immense-island-74461.herokuapp.com/assignments').then(res => setClassAssignments(res.data));
}
function refreshPage() {
    getClasses();
    setShowEveryClass(true)
}
function oneClass() {
    getClasses();
    setShowEveryClass(false)
}

    //Check to see if there is anything there
    //For every assignment skip about 50 pixels and placce the assignment and grade per course
    //Grow box based on the amount of courses
        if(Classes.length < 1){
            return(
                <h3>Loading...</h3>
            )
        }
        else{
            const currentClass = data.currentClass;
            var selectedClass;
            for(var i = 0; i < Classes.length;i++){
                if(Classes[i].className == currentClass){
                    selectedClass = i;
                }
            }
            if(showEveryClass == false){
           // <button onClick={refreshPage()}></button>
            return(
                <div  className="assignmentText">
                    <button onClick={e => refreshPage()}>Show all classes</button>
                    <div className="assignment-content">
                        <h3>{Classes[selectedClass].className}</h3>
                        <br></br>
                        {Classes[selectedClass].assignments.map((assignment) => 
                        <h4>{assignment[0]}</h4>

                        )}
                        <div className="assignmentTextDueDate">
                        {Classes[selectedClass].assignments.map((assignment) => 
                        <h4>{assignment[1]}</h4>
                        )}
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                
            )
                        }else{
                            return(
                                <div  className="assignmentText">
                                    <button onClick={e => oneClass()}>Show Selected Class</button>
                                    <div className="assignment-content">
                                        <h3>{Classes[0].className}</h3>
                                        <br></br>
                                        {Classes[0].assignments.map((assignment) => 
                                        <h4>{assignment[1]}</h4>
                
                                        )}
                                        <div className="assignmentTextDueDate">
                                        {Classes[0].assignments.map((assignment) => 
                                        <h4>{assignment[0]}</h4>
                                        )}

                                        </div>
                                        <br></br>
                                        <br></br>
                                    </div>
                                    <div className="assignment-content">
                                        <h3>{Classes[1].className}</h3>
                                        <br></br>
                                        {Classes[1].assignments.map((assignment) => 
                                        <h4>{assignment[1]}</h4>
                
                                        )}
                                        <div className="assignmentTextDueDate">
                                        {Classes[1].assignments.map((assignment) => 
                                        <h4>{assignment[0]}</h4>
                                        )}

                                        </div>
                                        <br></br>
                                        <br></br>
                                    </div>

                                    <div className="assignment-content">
                                        <h3>{Classes[2].className}</h3>
                                        <br></br>
                                        {Classes[2].assignments.map((assignment) => 
                                        <h4>{assignment[1]}</h4>
                
                                        )}
                                        <div className="assignmentTextDueDate">
                                        {Classes[2].assignments.map((assignment) => 
                                        <h4>{assignment[0]}</h4>
                                        )}

                                        </div>
                                        <br></br>
                                        <br></br>
                                    </div>

                                    <div className="assignment-content">
                                        <h3>{Classes[3].className}</h3>
                                        <br></br>
                                        {Classes[3].assignments.map((assignment) => 
                                        <h4>{assignment[1]}</h4>
                
                                        )}
                                        <div className="assignmentTextDueDate">
                                        {Classes[3].assignments.map((assignment) => 
                                        <h4>{assignment[0]}</h4>
                                        )}

                                        </div>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>
                                
                            )
                        }
        }
    

    
}

export default AssignmentInformation;