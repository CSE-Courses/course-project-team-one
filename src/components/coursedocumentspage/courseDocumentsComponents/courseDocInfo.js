import React from "react";

const CourseDocInfo = ({titles,links}) =>{
    return(
        <div className="oneDocBubble">
            <div className="docTitle">{titles}</div>
            {links.map ((links)=>
                                <div className="docLinks"><a href={links[0]}>{links[1]}</a></div>
                            )} 
        </div>
    );
}

export default CourseDocInfo;