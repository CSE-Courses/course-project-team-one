import React from 'react';
import Homebuttons from './home-buttons';
import './home-page.css';


const HomebuttonLayout = ({username,password}) => {
    return(
        <form>
            <div className="home-buttons">
                <Homebuttons icon = "file-alt" text="Assignments" notify="5" link="/assignments" username={username} password={password}></Homebuttons>
                <Homebuttons icon = "check-circle" text="Grades" notify="2" link="/grades"  username={username} password={password}></Homebuttons>
                <Homebuttons icon="comments" text="Discussion" notify="0" link="/discussion"  username={username} password={password}></Homebuttons>
                <Homebuttons icon="paste" text="Course Documents" notify="0" link="/coursedocuments"  username={username} password={password}></Homebuttons>
                <Homebuttons icon="bell" text="Notifications" notify="7" link="/notifications"  username={username} password={password}></Homebuttons>
                <Homebuttons icon="cog" text="Settings" notify="0" link="/settings"  username={username} password={password}></Homebuttons>
                
            </div>
        </form>
    )
}

export default HomebuttonLayout;