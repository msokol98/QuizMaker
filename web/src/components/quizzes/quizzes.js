import React from 'react';
import QuizPreview from 'components/portal/quizPreview';
import { webHost } from 'config';

const Quizzes = ({ quizzes }) => {
    return(
        <div className="container portal">  
            <h3 className="title has-text-weight-light">Here are quizzes people have made...</h3>

            {quizzes && quizzes.map((quiz, idx) => {
                const url = `${webHost}/quizzes/${quiz.id}`;

                return <QuizPreview key={idx} url={url} quiz={quiz} />
            })}

            <button onClick={() => window.location = "/create"} style={{marginTop: "10px"}} className="button is-info">Create a Quiz</button>
        </div>
    )
}
 
export default Quizzes;