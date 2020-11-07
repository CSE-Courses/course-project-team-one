import React from "react";

const CourseDocInfo = ({titles,links}) =>{
    console.log(titles);
    return(
        <div className="oneDocBubble">
            <div className="docTitle">{titles}</div>
            {links.map ((links)=>
                                <div className="docLinks"><a href={links[0]} target="_blank">{links[1]}</a></div>
                            )} 
        </div>
    );
}

export default CourseDocInfo;