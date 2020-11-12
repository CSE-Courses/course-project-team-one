import React, { useState , useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import Noti_link from "./Noti.js";
import axios from 'axios';


function CourseDocumentsPage() {
  const data = useLocation().data;

  const[classLinks, setClassLinks] = useState([]);
  const[Classes, setDuedate] = useState([]);

  useEffect(() => {
    getClasses();
    }, []);

     
    useEffect(() => {
      getduedate();
      }, []);
  
const getClasses = () =>{
    axios.get('http://localhost:5000/classes').then(res => setClassLinks(res.data));

    //axios.get('https://ubwebapp-backend.herokuapp.com/classes/').then(res => setClasses(res.data)); //Use this one for public deployment
  }
  const getduedate = (argc) =>{
    axios.get('http://localhost:5000/assg').then(res => setDuedate(res.data));
    //axios.get('https://ubwebapp-backend.herokuapp.com/classes/').then(res => setClasses(res.data)); //Use this one for public deployment
}

  //If incorrect login go back to login, otherwise stay
   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }
  const username = data.username;
  const password = data.password;
  const currentClass = data.currentClass;


  if(classLinks.length < 1){
    return(
        <h3 className="Loading">Loading...</h3>
    )
  }
  else{
    var courseLinks;
    var duedate ;

    for(var x = 0; x < classLinks.length; x++){
      if(currentClass == classLinks[x].className  ){
        courseLinks = classLinks[x].courseDocuments;
      }
    }
    duedate = classLinks[4].assignments[2];

    return(
      <div>
              {courseLinks.map ((sections)=>
                                    <div>
                                       <Noti_link titles={sections.section[0]} 
                                       links={sections.section[1]} deadlines={duedate} >
                      
                                       </Noti_link>
                                    </div>
                                )} 
       
      </div>
      
    );
  }
  
  }
  
  export default CourseDocumentsPage;
