import React from "react";
import SettingsPage from "./settings-page"

function setNotifications(){

    const updateNotification = () => {

      };
    return(
        <div className="settingsBody">
            <h3 className = "settings-q1">Update you on what classes you have</h3>
            <form >
            <div >
                <select className="settings-form1" name="settings-select">
                    <option onSelect={updateNotification()}>Select time</option>
                    <option onSelect={updateNotification()}>Never</option>
                    <option onSelect={updateNotification()}>1 hour before</option>
                    <option onSelect={updateNotification()}>5 hours before</option>
                    <option onSelect={updateNotification()}>1 day before</option>
                    <option onSelect={updateNotification()}>All the above</option>

                </select>
            </div>
        </form>
            <h3 className ="settings-q">Update you on assignment due dates</h3>
            <form >
            <div >
                <select className="settings-form" name="settings-select">

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