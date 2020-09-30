import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//Components
import AppHeader from './components/appheaderpage/appheader';
import HomePage from './components/homepage/home-page';
import AssignmentsPage from './components/assignmentspage/assignments-page';
import GradesPage from './components/gradespage/grades-page';
import DiscussionPage from './components/discussionpage/discussion-page';
import ProfilePage from './components/profilepage/profile-page';
import NotificationsPage from './components/notificationspage/notifications-page';
import SettingsPage from './components/settingspage/settings-page';
import CourseDocumentsPage from './components/coursedocumentspage/coursedocuments-page';
import Announcementpage from './components/notificationspage/Announcement'
import Deadlinepage from './components/notificationspage/Deadline'

function App() {
  return (
    <div>
      <Router>
        <AppHeader/> 
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path ="/assignments" exact component={AssignmentsPage}/>
            <Route path ="/grades" exact component={GradesPage}/>
            <Route path ="/discussion" exact component={DiscussionPage}/>
            <Route path ="/profile" exact component={ProfilePage}/>
            <Route path ="/notifications" exact component={NotificationsPage}/>
            <Route path ="/settings" exact component={SettingsPage}/>
            <Route path ="/coursedocuments" exact component={CourseDocumentsPage}/>
            <Route path ="/announcements" exact component={Announcementpage}/>
            <Route path ="/deadlines" exact component={Deadlinepage}/>

          </Switch>
        </Router>
    </div>
  );
}

export default App;