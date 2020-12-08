import React, {Component, useState , useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import Noti_link from "./Noti.js";
import Noti_assign from "./Noti2.js";
import axios from 'axios';



function CourseDocumentsPage() {
  const data = useLocation().data;

  const[classLinks, setClassLinks] = useState([]);
  const[List, setList] = React.useState([]);
  const[Date, setDate] = React.useState([]);
  const[PdfLinks, setPdfdate] =React.useState([]);

  useEffect(() => {
    getClasses();
    }, []);

    useEffect(() => {
      getPdfDate();
      }, []);
  
  
const getClasses = () =>{
    // axios.get('http://localhost:5000/classes').then(res => setClassLinks(res.data));
    axios.get('https://immense-island-74461.herokuapp.com/classes').then(res => setClassLinks(res.data));

  }

  const getPdfDate = () =>{
    // axios.get('http://localhost:5000/noti').then(res => setPdfdate(res.data));
    axios.get('https://immense-island-74461.herokuapp.com/noti').then(res => setPdfdate(res.data));
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
    var selectedClass;
    var assignlist;
    var i=0
    for(var x = 0; x < classLinks.length; x++){
      if(currentClass == classLinks[x].className  ){
        courseLinks = classLinks[x].courseDocuments;
        selectedClass = x;
        duedate = classLinks[selectedClass].assignments
        assignlist =classLinks[selectedClass].assignments
        i++
      }
    }

    var Pdfdate;
    for(var x = 0; x < PdfLinks.length; x++){
      Pdfdate = PdfLinks[0].classes
    }

    
    const deteleSingleRow=(courseLinks,Pdfdate)=>{
     if(courseLinks==0) return(<h3 className="Loading"></h3>)
     // filter new courseLink
      var list= List
      list =courseLinks
      list.splice(0,2)
       setList([...list]);

            // filter new duedate
       var delduedate = Date
       delduedate = Pdfdate
         delduedate.splice(0,1)
         setDate([...delduedate])

       console.log("date:",Pdfdate);
       console.log("courselinks: ",courseLinks);

    };



    const deteleSingleRow1=(duedate)=>{
      // filter new duedate
       var delduedate = Date
       delduedate = duedate
         delduedate.splice(0,4)
         setDate([...delduedate])
       console.log("date:",duedate)
       
    };

  
if(courseLinks==null) return(<h3 className="Loading"></h3>)
    return(
      <div>

                        <header className=" Noti_header"><h1> {classLinks[selectedClass].className}</h1></header>

                        <br></br>
                        <br></br>
                    <div>
                       <h4>  <Noti_assign deadlines ={assignlist} deteleitem= {deteleSingleRow1} >      
                           </Noti_assign> 
                           </h4>  
                           </div>
                                         
                 
              {courseLinks.map ((sections)=>
                                    <div> 
                                       <Noti_link titles={sections.section[0]} 
                                        links={sections.section[1]} deadlines={Pdfdate} deteleitem={deteleSingleRow}>                    
                                       </Noti_link>                       
                                    </div>
               )}


      </div>
      
    );
  }
  }
  export default CourseDocumentsPage;
