import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomebuttonLayout from './homebutton-layout';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";

    
const ClassSelect = ({id, username, password}) => {
    
    const[user, setUser] = useState([]);
    const [currentClass, setClass] = useState("");
    //If returning to page off back arrow or header button
    const data = useLocation().data;
    var classExist = "";
    classExist = data.currentClass;
        useEffect(() => {
            getUser();
          }, [id]);


      const getUser = () =>{
          if(id != ""){
              //axios.get('https://ubwebapp-backend.herokuapp.com/users/').then(res => setUsers(res.data)); //Use this one for public deployment
            axios.get('https://immense-island-74461.herokuapp.com/users/' + id).then(res => {
                setUser((res.data).classes);
                setClass((res.data).classes[0].class);
            })
          }
        
    }
    const changeClass = e =>{
        setClass(e.target.value);
        console.log(currentClass);
    }
    console.log(currentClass);
    if(id ==  ""){return(<header></header>);}
    else {
        return(
            <div>
                <form>
                    <div className = "select">
                        <select className="class-select" onChange={changeClass}>
                            {user.map ((classes)=>
                                <option value={classes.class}>{classes.class}</option>
                            )} 
                        </select>
                    </div>
                </form>
                <HomebuttonLayout username={username} password={password} id = {id} currentClass = {currentClass}></HomebuttonLayout>
            </div>
            
        )
    }
}

export default ClassSelect;