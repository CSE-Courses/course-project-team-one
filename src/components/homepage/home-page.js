import React, { useEffect, useState } from 'react';
import App from '../../App';
import queryString from 'query-string';
import AppHeader from '../appheaderpage/appheader';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import './home-page.css';
import HomebuttonLayout from './homebutton-layout';
import ClassSelect from './class-selection';
import axios from 'axios';

function HomePage() {

  const[users, setUsers] = useState([]);
  const data = useLocation().data;
  var id = "";   //The unique id created in the backend
  

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () =>{
        axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
      //axios.get('https://ubwebapp-backend.herokuapp.com/users/').then(res => setUsers(res.data)); //Use this one for public deployment
  }

   //If incorrect login go back to login, otherwise stay
   
  if(users.length > 0){
    var correctInfo = false;
    for(var index = 0; index < users.length; index++){
      if(users[index].username == data.username && users[index].password == data.password){
        correctInfo = true;
        id = users[index]._id;
        break;
      }
    }
    if(correctInfo == false){return(<Redirect to= "/login"></Redirect>)}
  }
    if(data == null){
     return(<Redirect to= "/login"></Redirect>)
   }

   //Correct login
  return (
      <div>
        <AppHeader username={data.username} password={data.password} currentClass={data.currentClass}/> 
        <ClassSelect username={data.username} password={data.password} id = {id} classExist = ""></ClassSelect>
        
      </div>
  );
 
}

export default HomePage;