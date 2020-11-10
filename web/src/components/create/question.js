import React from 'react';
import './styles.css';

const Question = ({ question, number }) => {

    const { prompt, answerChoices, correctAnswer } = question;

    return(
        <div className="new-question">
            <h4>Question {number}</h4>

            <input 
                readOnly
                className="new-question-prompt input" 
                type="text" 
                value={prompt}
                name="prompt" 
            />
            
            {answerChoices && answerChoices.map((answerChoice, idx) => {

                let classes = "input";

                if(answerChoice.letter === correctAnswer)
                    classes += " correct-answer";

                return(
                    <div key={idx}>
                        <input className={classes} value={answerChoice.body} readOnly />
                    </div>
                )
        
            })}
        </div>
    )
}
 
export default Question;