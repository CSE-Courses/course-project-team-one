import React from "react";
import moment from 'moment';


const Document = (argc) => {
    return (
        <div className="card card-shadow">
             <h2 className="text-center"> {  argc.title } </h2>{" "}
            
            <div>
                <label htmlFor="Assignment">Name : </label>
                <a href={argc.assignment_doc1}> Progamming Assignment </a>{" "}
            </div>
         
            <div>           
                <label htmlFor="due_date"> Due Date: {argc.dueDate} </label>{" "}
            </div>
           
        </div>
    );
};

Document.defaultProps = {
    assignment_doc1:  "https://piazza.com/class_profile/get_resource/kegjk8a65qz79w/kf8qetmgzg02mk",
    dueDate :  <p className='grey-text'> {Date.createdAt? moment(Date.createdAt.toDate()).calendar(): "10-19-2020"}</p>,
};

export default Document;
