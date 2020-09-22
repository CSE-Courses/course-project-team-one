import React from 'react';
import queryString from 'query-string';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import './home-page.css';
import HomebuttonLayout from './homebutton-layout';
import ClassSelect from './class-selection';

function HomePage() {

  //If not logged in
  var studentToken = queryString.parse(window.location.search).q;
  console.log(studentToken);
  if(studentToken == null){
    return(
      <Redirect to="/login"></Redirect>
    )
  }

  return (
        <div>
          <ClassSelect></ClassSelect>
          <HomebuttonLayout></HomebuttonLayout>
        </div>
      
  );
}

export default HomePage;