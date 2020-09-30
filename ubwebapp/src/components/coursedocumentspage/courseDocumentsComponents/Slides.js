import React from "react";
import PropTypes from "prop-types";

const Slides = (props) => {
    return (
        <div className="card card-shadow">
            <h2 className="text-center"> {props.title} </h2>
            <div>
                <a href={props.slides1}> slides1 </a>{" "}
            </div>
            <div>
                <a href={props.slides2}> slides2 </a>{" "}
            </div>
            <div>
                <a href={props.slides3}> slides3 </a>{" "}
            </div>
            <div>
                <a href={props.slides4}> slides4 </a>{" "}
            </div>
            <div>
                <a href={props.slides5}> slides5 </a>{" "}
            </div>
            <div>
                <a href={props.slides6}> slides6 </a>{" "}
            </div>
            <div>
                <a href={props.slides7}> slides7 </a>{" "}
            </div>
            <div>
                <a href={props.slides8}> slides8 </a>{" "}
            </div>
            <div>
                <a href={props.slides9}> slides9 </a>{" "}
            </div>
        </div>
    );
};

Slides.defaultProps = {
    title: "Slides",
    slides1: "N/A",
    slides2: "N/A",
    slides3: "N/A",
    slides4: "N/A",
    slides5: "N/A",
    slides6: "N/A",
    slides7: "N/A",
    slides8: "N/A",
    slides9: "N/A",
};

export default Slides;