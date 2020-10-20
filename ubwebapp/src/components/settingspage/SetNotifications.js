import React from "react";
import SettingsPage from "./settings-page"

function setNotifications(){

    const updateNotification = () => {

      };
    return(
        <div className="settingsText">
            <h3>Update you on what classes you have</h3>
            <form>
            <div className="select">
                <select name="class-select" className="filter-class">
                    <option onSelect={updateNotification()}>Select time</option>
                    <option onSelect={updateNotification()}>Never</option>
                    <option onSelect={updateNotification()}>1 hour before</option>
                    <option onSelect={updateNotification()}>5 hours before</option>
                    <option onSelect={updateNotification()}>1 day before</option>
                    <option onSelect={updateNotification()}>All the above</option>
                </select>
            </div>
        </form>
            <h3>Update you on assignment due dates</h3>
            <form>
            <div className="select">
                <select name="class-select" className="filter-class">

                    <option onSelect={updateNotification()}>Select time</option>
                    <option onSelect={updateNotification()}>Never</option>
                    <option onSelect={updateNotification()}>1 hour before due</option>
                    <option onSelect={updateNotification()}>5 hours before due</option>
                    <option onSelect={updateNotification()}>1 day before due</option>
                    <option onSelect={updateNotification()}>All the above</option>
                </select>
            </div>
        </form>

        </div>
    )
}

export default setNotifications;