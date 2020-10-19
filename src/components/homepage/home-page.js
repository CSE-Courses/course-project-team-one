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

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () =>{
      axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
  }

   //If incorrect login go back to login, otherwise stay
   if(users.length > 0){
    var correctInfo = false;
    console.log(users.length);
    for(var index = 0; index < users.length; index++){
      if(users[index].username == data.username && users[index].password == data.password){
        correctInfo = true;
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
        <AppHeader username={data.username} password={data.password}/> 
        <ClassSelect username={data.username} password={data.password}></ClassSelect>
        <HomebuttonLayout username={data.username} password={data.password}></HomebuttonLayout>
      </div>
  );
 
}

export default HomePage;