import React from 'react';
import Homebuttons from './home-buttons';
import './home-page.css';
import ClassSelect from './class-selection';



const HomebuttonLayout = ({username,password, id, currentClass}) => {
   return(
        <div>
            <form>
                <div className="home-buttons">
                    <Homebuttons icon = "file-alt" text="Assignments" notify={currentClass} link="/assignments" username={username} password={password} currentClass = {currentClass}></Homebuttons>
                    <Homebuttons icon = "check-circle" text="Grades" notify={currentClass} link="/grades"  username={username} password={password} currentClass = {currentClass}></Homebuttons>
                    <Homebuttons icon="comments" text="Discussion" notify={currentClass} link="/discussion"  username={username} password={password} currentClass = {currentClass}></Homebuttons>
                    <Homebuttons icon="paste" text="Course Documents" notify={currentClass} link="/coursedocuments"  username={username} password={password} currentClass = {currentClass}></Homebuttons>
                    <Homebuttons icon="bell" text="Notifications" notify={currentClass} link="/notifications"  username={username} password={password} currentClass = {currentClass}></Homebuttons>
                    <Homebuttons icon="cog" text="Settings" notify={currentClass} link="/settings"  username={username} password={password} currentClass = {currentClass}></Homebuttons>
                </div>
            </form>
        </div>
    )
}

export default HomebuttonLayout;