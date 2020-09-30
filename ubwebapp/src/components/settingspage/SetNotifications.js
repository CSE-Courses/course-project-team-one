import React from "react";
import SettingsPage from "./settings-page"

function setNotifications(){

    const updateNotification = () => {

      };
    return(
        <div className="settingsText">
            <h3>Update you on what classes you have</h3>

            <button onClick={updateNotification}>Never</button>
            <button onClick={updateNotification}>1 hour before </button>
            <button onClick={updateNotification}>5 hours before </button>
            <button onClick={updateNotification}>1 day before </button>
            <button onClick={updateNotification}>All the above</button>
            <h3>Update you on assignment due dates</h3>

            <button onClick={updateNotification}>Never</button>
            <button onClick={updateNotification}>1 hour before due</button>
            <button onClick={updateNotification}>5 hours before due</button>
            <button onClick={updateNotification}>1 day before due</button>
            <button onClick={updateNotification}>All the above</button>

        </div>
    )
}

export default setNotifications;