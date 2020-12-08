import React, {Component, useState , useEffect} from "react";
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Modal from  './Modal'
import axios from 'axios';

function Announcementpage() {

  const data = useLocation().data;
  //If incorrect login go back to login, otherwise stay
  const [isOpen, setIsIpen]=useState(false)
  const [isOpen1, setIsIpen1]=useState(false)

  const[PdfLinks, setPdfdate] =React.useState([]);

  useEffect(() => {
    getPdfDate();
    }, []);

    const getPdfDate = () =>{
      // axios.get('http://localhost:5000/noti').then(res => setPdfdate(res.data));
      axios.get('https://immense-island-74461.herokuapp.com/noti').then(res => setPdfdate(res.data));
  
    }


   if(data == null){
    return(<Redirect to= "/login"></Redirect>)
   }

  const BUTTON_WAPPER_SYTLES={
    position: 'relative',
    zIndex:1
  }

  const OTHER_CONTENT_STYTLES ={
    position: 'relative',
    zIndex:2,
    backgroundColor:'red',
    padding:'10px'
  }


  const username = data.username;
  const password = data.password; 
  const currentClass = data.currentClass
  var classmessage;
  var selectedClass
  for(var i = 0; i < PdfLinks.length; i++){
   // Pdfdate = PdfLinks[1].classes
    //new1= PdfLinks[2].classes
   if(PdfLinks[i].classname == currentClass){
      classmessage=PdfLinks[i].message
  }
  }


    return (
      <div>
      <AppHeader username={username} password={password} currentClass={currentClass}/>
      <div className="announcements-header">
        <header><h1>Announcements</h1></header>
      </div>
  
    <Link to={{pathname:"/notifications", data:{username,password, currentClass}}}><button className="backhome">
   <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
      </button></Link>

    
      <div classname="Announcement_message"  style = {BUTTON_WAPPER_SYTLES} onClick={() => console.log('clicked')}>
      <button className= "Modal_button_open" onClick={()=>setIsIpen(true)}> Message  </button>
        <Modal open ={isOpen}  onClose={()=>setIsIpen(false)}>
          {classmessage }
      </Modal>
      </div>  

</div>
    );
    
  }
  export default Announcementpage;