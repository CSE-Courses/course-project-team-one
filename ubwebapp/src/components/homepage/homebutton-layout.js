import React from 'react';
import Homebuttons from './home-buttons';
import './home-page.css';


const HomebuttonLayout = () => {
    return(
        <form>
            <div className="home-buttons">
                <Homebuttons icon = "file-alt" text="Assignments" notify="5" link="/assignments"></Homebuttons>
                <Homebuttons icon = "check-circle" text="Grades" notify="2" link="/grades"></Homebuttons>
                <Homebuttons icon="comments" text="Discussion" notify="0" link="/discussion"></Homebuttons>
                <Homebuttons icon="paste" text="Course Documents" notify="0" link="/coursedocuments"></Homebuttons>
                <Homebuttons icon="bell" text="Notifications" notify="7" link="/notifications"></Homebuttons>
                <Homebuttons icon="cog" text="Settings" notify="0" link="settings"></Homebuttons>
                
            </div>
        </form>
    )
}

export default HomebuttonLayout;