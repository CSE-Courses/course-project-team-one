import React from "react";
import PropTypes from "prop-types";

const Syllabus = (props) => {
    return (
        <div className="card card-shadow syllabus-position">
            <h2 className="text-center"> {props.title} </h2>{" "}
            <div>
                <label htmlFor="syllabus"> Course Syllabus: </label>{" "}
                <a href={props.syllabus}> Course syllabus </a>{" "}
            </div>{" "}
            <div>
                <label htmlFor="courseWebsite"> Course Website: </label>{" "}
                <a href={props.website}> Course Website </a>{" "}
            </div>{" "}
        </div>
    );
};

Syllabus.defaultProps = {
    title: "Syllabus",
    syllabus: "N/A",
    courseWebsite: "N/A",
};

export default Syllabus;