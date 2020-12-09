import React, {useState} from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useLocation} from "react-router-dom";
import AppHeader from '../appheaderpage/appheader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function App(){
    const data = useLocation().data;
    const[question_name, setQuestion_name] = useState(0);
    const[displayGrade, setDisplayGrade] = useState(false);
    const[grade,setGrade]= useState(0);
    //const[currentQuestion, set]= userState(0)
    //If incorrect login go back to login, otherwise stay
    
     if(data == null){
      return(<Redirect to= "/login"></Redirect>)
     }
   
    const username = data.username;
    const password = data.password;
    const currentClass = data.currentClass;

    const question_Array =[
        {
            question_title: " Which of the following operating systems cannot be licensed for a PC?",
            answerOption: [
                {answer_selection: "Mac OS X", isCorrect: true},
                {answer_selection: "Linux", isCorrect: false},
                {answer_selection:'Windows Vista', isCorrect: false},
                {answer_selection: 'Windows 8', isCorrect: true},
            ],

        },
        {
            question_title: "Which of the following is a computer input device?",
            answerOption: [
                {answer_selection: "Mouse,keyboard", isCorrect: true},
                {answer_selection: "RAM", isCorrect: false},
                {answer_selection:'Printer', isCorrect: false},
                {answer_selection: 'ROM', isCorrect: false},
            ],

        },
        {
            question_title: " what is the name of iphone company",
            answerOption: [
                {answer_selection: "Apple", isCorrect: true},
                {answer_selection: "Intel", isCorrect: false},
              
            ],
            
        },
        {
            question_title: " what is the abbreviation for MIPS",
            answerOption: [
                {answer_selection: "Million Instructions Per Second", isCorrect: true},
                {answer_selection: "Mike is playing sand ", isCorrect: false},
                {answer_selection: "Memorizing is powerful skill ", isCorrect: false},

              
            ],
            
        }

    ];


    const Correct_answer_button =(isCorrect)=>{
        if(isCorrect==true){
            setGrade(grade+1);
        }
        const next_Q_title = question_name+1;
        if(next_Q_title<question_Array.length){
            setQuestion_name(next_Q_title);
        }else{
            setDisplayGrade(true);
            alert("you have completed the quiz!")
        }
    }

            return(  
      <div classname="quiz_app">  
                    <AppHeader username={username} password={password} currentClass={currentClass}/>     
     <div className="deadline-header">
                                        <header><h1>Quiz</h1></header>

      </div>
        <Link to={{pathname:"/announcements", data:{username,password, currentClass}}}><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
         </button></Link>

                        {}
                        {displayGrade ? (
                            <div className = 'grade-section'>scored : {grade} out of {question_Array.length}</div>
                        ):(
                             <>
                            <div className='question_title'>
                                <div className='Q_num'>
                        <span> Question {question_name + 1}</span> /{question_Array.length}
                                </div>
                            
                        <div className='Q_title'></div>
                        <div className='Q_title'>{question_Array[question_name].question_title}</div>

                                </div>
                                <div className ='answer'>
                                {question_Array[question_name].answerOption.map((answerOption)=>
                                <button classname="quiz_button" onClick= {()=>Correct_answer_button(answerOption.isCorrect)}>{answerOption.answer_selection
                                }</button>)}
                                </div>
                             </>
                        )}
                    </div>
                );

}