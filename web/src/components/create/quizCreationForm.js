import React from 'react';
import Question from './question';
import NewQuestion from './newQuestion';

const QuizCreationForm = ({ topic, questions, submitQuestion, addQuestion, addingQuestion, submitQuiz }) => (
    <div>
        <h2>{topic}</h2>
        {questions.map((question, idx) => <Question key={idx} question={question} number={idx+1} />)}

        {addingQuestion ? 
            <NewQuestion number={questions.length+1} submitQuestion={submitQuestion} />
        :
            <div>
                <button className="button is-info with-space-on-right" onClick={addQuestion}>Add New Question</button>
                <button className="button is-info" onClick={submitQuiz}>Create Quiz</button>
            </div>
        }
    </div>
)

 
export default QuizCreationForm;