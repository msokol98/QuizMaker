import React, { useState } from 'react';
import 'components/create/styles.css';
import './styles.css';
import mapIdxToLetter from 'utils/mapIdxToLetter';

const Question = ({ question, number, setAnswer }) => {

    const { prompt, answerChoices, id } = question;
    const [chosenAnswer, setChosenAnswer] = useState(null);

    const fixAnswer = idx => {
        setChosenAnswer(mapIdxToLetter(idx));
        setAnswer(mapIdxToLetter(idx), id);
    }

    return(
        <div className="new-question">
            <h4>Question {number}</h4>

            <h6 className="quiz-question-prompt">{prompt}</h6>

            {answerChoices && answerChoices.map((answerChoice, idx) => {

                let classes = "box";

                if(mapIdxToLetter(idx) === chosenAnswer) 
                    classes += " chosen-answer";
                

                return(
                    <div key={idx} className="quiz-question-answer">
                        <input type="radio" onClick={() => fixAnswer(idx)} name={`question ${id}`}/>

                        <div className={classes}>
                            {answerChoice.body}
                        </div>
                    </div>
                )
        
            })}
        </div>
    )
}
 
export default Question;