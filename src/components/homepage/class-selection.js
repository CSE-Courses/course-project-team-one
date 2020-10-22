import React from 'react';



const ClassSelect = ({username, password}) => {
    return(
        <form>
            <div className="select">
                <select name="class-select" className="filter-class">
                    <option value="unselected">Select class</option>
                    <option value="class-1">CSE421-Operating Systems</option>
                    <option value="class-2">CSE442-Software Engineering</option>
                    <option value="class-3">CSE426-Blockchain</option>
                    <option value="class-4">DMS333-World Cinema</option>
                </select>
            </div>
        </form>
    )
}

export default ClassSelect;