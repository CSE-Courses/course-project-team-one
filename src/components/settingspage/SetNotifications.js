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
        <select name="ingredients[]" id="ingredients" multiple="multiple">
    <option value="cheese">Cheese</option>
    <option value="tomatoes">Tomatoes</option>
    <option value="mozarella">Mozzarella</option>
    <option value="mushrooms">Mushrooms</option>
    <option value="pepperoni">Pepperoni</option>
    <option value="onions">Onions</option>
</select>
        </div>
    )
}

export default setNotifications;