import React from 'react';
import "./discussion-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function DiscussionPage() {
    return (
      <div>
        <div className="discussions-header">
          <header><h1>Discussions</h1></header>
        </div>
        <Link to="/"><button className="backhome">
          <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
        </button></Link>
      </div>
    );
  }
  
  export default DiscussionPage;