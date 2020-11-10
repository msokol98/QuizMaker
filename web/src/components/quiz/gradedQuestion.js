import React from 'react';
import 'components/create/styles.css';
import './styles.css';

const GradedQuestion = ({ question, number, chosenAnswer }) => {

    const { prompt, answerChoices } = question;

    return(
        <div className="new-question">
            <h4>Question {number}</h4>

            <h6 className="quiz-question-prompt">{prompt}</h6>

            {answerChoices && answerChoices.map((answerChoice, idx) => {

                let classes = "box";

                const letter = answerChoice.letter;
                
                if(letter === question.correctAnswer)
                    classes += " correct-answer";
                else if(letter === chosenAnswer) 
                   classes += " wrong-answer";
                
                return(
                    <div key={idx} className="quiz-question-answer">
                        <div className={classes}>
                            {answerChoice.body}
                        </div>
                    </div>
                )
        
            })}
        </div>
    )
}
 
export default GradedQuestion;