import React from 'react';
import Question from 'components/create/question';

const Quiz = ({ quiz }) => {

    const { topic, questions } = quiz;

    return(
        <div>
            <h3>{topic}</h3>

            {questions && questions.map((question, idx) => <Question number={idx+1} question={question} />)}
        </div>
    )
};
 
export default Quiz;