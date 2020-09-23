import React from 'react';
import App from '../../App';
import queryString from 'query-string';
import AppHeader from '../appheaderpage/appheader';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import './home-page.css';
import HomebuttonLayout from './homebutton-layout';
import ClassSelect from './class-selection';

function HomePage() {

  

  const data = useLocation().data;

   //If incorrect login go back to login, otherwise stay
   if(data != null){
    if (!(data.username == "student1" && data.password == "password")){
      return(<Redirect to= "/login"></Redirect>)
    }
   }
   else if(data == null){
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