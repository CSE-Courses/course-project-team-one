import React, { useEffect, useState } from 'react';
import axios from 'axios';


    
const ClassSelect = ({id}) => {

    const[user, setUser] = useState([]);
  
        useEffect(() => {
            getUser();
          }, [id]);

      const getUser = () =>{
          if(id != ""){
            axios.get('http://localhost:5000/users/' + id).then(res => setUser((res.data).classes));
            //axios.get('https://ubwebapp-backend.herokuapp.com/users/').then(res => setUsers(res.data)); //Use this one for public deployment
          }
        
  }

    console.log(user);
    if(id ==  ""){return(<header>Loading...</header>);}
    else {
        //setUser(getUser());
        return(
            <form>
                <div className = "select">
                    <select className="class-select">
                        {user.map ((classes)=>
                            <option value="unselected">{classes.class}</option>
                        )} 
                    </select>
                </div>
            </form>
        )
    }
}

export default ClassSelect;