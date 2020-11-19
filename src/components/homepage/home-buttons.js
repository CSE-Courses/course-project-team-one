import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import './home-page.css';
import '../icons/icons'

const Homebuttons = ({icon,text, notify, link, username, password, currentClass}) =>{
    const data = useLocation().data;

    const[Classes, setClasses] = useState([]);
    const[ClassAssignments, setClassAssignments] = useState([]);
    
        useEffect(() => {
        getClasses();
        }, []);
    
    const getClasses = () =>{
        axios.get('http://localhost:5000/classes').then(res => setClasses(res.data));
        //axios.get('https://immense-island-74461.herokuapp.com/classes').then(res => setClasses(res.data));
    }
    const getAssignments = () =>{
        axios.get('http://localhost:5000/assignments').then(res => setClassAssignments(res.data));
        //axios.get('https://immense-island-74461.herokuapp.com/assignments').then(res => setClassAssignments(res.data));
    }
    if(Classes.length < 1){
        return(
            <h3>Loading...</h3>
        )
    }else{     
    const myClass = data.currentClass;
    var selectedClass;
    for(var i = 0; i < Classes.length;i++){
        if(Classes[i].className == myClass){
            selectedClass = i;
        }
    }
    if(Classes[selectedClass].assignments.length > 0){
        notify = Classes[selectedClass].assignments.length;
    }
    else{
        notify = 0;
    }
    if(notify > 0){
        if(link == "/assignments"){
            return(
                <Link to={{pathname: "/assignments", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/grades"){
            return(
                <Link to={{pathname: "/grades", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/discussion"){
            return(
                <Link to={{pathname: "/discussion", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/coursedocuments"){
            return(
                <Link to={{pathname: "/coursedocuments", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/notifications"){
            return(
                <Link to={{pathname: "/notifications", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
        if(link == "/settings"){
            return(
                <Link to={{pathname: "/settings", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <div className="notify"><br/><text className="notify-text">{notify}</text></div>
                    <FontAwesomeIcon className = "home-icon" icon = {icon} /><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>   
            )
        }
    }
    else{
        if(link == "/assignments"){
            return( 
                <Link to={{pathname: "/assignments", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/grades"){
            return( 
                <Link to={{pathname: "/grades", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/discussion"){
            return( 
                <Link to={{pathname: "/discussion", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/coursedocuments"){
            return( 
                <Link to={{pathname: "/coursedocuments", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/notifications"){
            return( 
                <Link to={{pathname: "/notifications", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
        if(link == "/settings"){
            return( 
                <Link to={{pathname: "/settings", data:{username,password, currentClass}}}>
                    <button className="home-button">
                    <FontAwesomeIcon className="home-icon" icon = {icon}/><br/><br/>
                    <text className="home-text">{text}</text>
                    </button>
                </Link>
            )
        }
    }
    }

}


export default Homebuttons;