import React from "react";
//import QuestionList from "./QuestionList";
const Question = (props) => {
   
    return(
        <div className="question-section-wrapper">

        <div className="Quiz-prop">
            {props.index}
            
        </div>
        </div>
        
    )
}

export default Question;
