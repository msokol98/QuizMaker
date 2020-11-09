import React from 'react';
import './styles.css';

const Question = ({ question, number }) => {

    const { prompt, answerChoices } = question;

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
            
            {answerChoices.map((answerChoice, idx) => (
                <div key={idx}>
                    <input className="input" value={answerChoice.body} readOnly />
                </div>
            ))}
        </div>
    )
}
 
export default Question;