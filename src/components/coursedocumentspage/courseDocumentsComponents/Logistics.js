import React from "react";


const Logistics = (props) => {
    return (
        <div className="card card-shadow">
            <h2 className="text-center"> {props.title} </h2>{" "}
            <div>
                <label htmlFor="days"> Days: {props.days} </label>{" "}
            </div>
            <div>
                <label htmlFor="zoomMeeting">
                    Zoom Meeting: {props.zoomMeeting}
                </label>
            </div>
            <div>
                <label htmlFor="meetingPassword">
                    Meeting Password: {props.meetingPassword}
                </label>
            </div>
            <div>
                <label htmlFor="hour"> Hour: {props.hour} </label>{" "}
            </div>
            <div>
                <label htmlFor="meeting">Course Off-zoom meeting: </label>
                <a href={props.meeting}> Course meeting </a>{" "}
            </div>
        </div>
    );
};

Logistics.defaultProps = {
    days: "MWF",
    hour: "00:00 pm - 00:00 pm",
    zoomMeeting: "N/A",
    meetingPassword: "N/A",
    meeting: "N/A",
};

export default Logistics;
