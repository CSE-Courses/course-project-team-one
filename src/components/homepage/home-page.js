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
  const [id, setid] = useState("");
  const [status, setStatus] = useState(true);
  

  useEffect(() => {
    getUsers();
    getLogin();
  }, []);

  useEffect(() => {
    getLogin();
  }, [users]);

  useEffect(() => {
    getLogin();
  }, [id]);

  const getUsers = () =>{
        axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
        //axios.get('https://immense-island-74461.herokuapp.com/users/').then(res => setUsers(res.data));
      //axios.get('https://ubwebapp-backend.herokuapp.com/users/').then(res => setUsers(res.data)); //Use this one for public deployment
  }

  const getLogin = () =>{
    console.log(users.length);
    if(users.length > 0){
      var correctInfo = false;
      for(var index = 0; index < users.length; index++){
        if(users[index].username == data.username){
          correctInfo = true;
          setid(users[index]._id);
          console.log(users[index]._id);
          console.log(id);
          break;
        }
      }
      // if(correctInfo == false){return(<Redirect to= "/login"></Redirect>)}
      console.log(id);
      axios.get('http://localhost:5000/users/login/' + id + '/' + data.password).then(res => {
        console.log(res.data);
        var msg = res.data.msg;
        console.log(msg);
        if(msg.localeCompare("Login success") == -1){
          setStatus(false);
        };
      });
    }
    
  }
   //If incorrect login go back to login, otherwise stay
    if(data == null){
     return(<Redirect to= "/login"></Redirect>)
   }
   //Correct login
   if(status === true){
    return (
      <div>
        <AppHeader username={data.username} currentClass={data.currentClass} password={data.password}/> 
        <ClassSelect username={data.username} id = {id} classExist = "" password={data.password}></ClassSelect>
  
      </div>
    );
   }
   else{
     console.log("yo");
     console.log(data.password);
    return(<Redirect to= "/login"></Redirect>)
   }
   

   
 
  }

export default HomePage;