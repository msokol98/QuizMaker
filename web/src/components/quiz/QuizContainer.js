import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHost } from 'config';
import Quiz from './Quiz';

const QuizContainer = props => {

    const quizId = props.match.params.quizId, [quiz, setQuiz] = useState(null);

    const fetchQuiz = () => {
        axios.get(`${apiHost}/api/quizzes/${quizId}`).then(res => {
            setQuiz(res.data);
        });
    }

    useEffect(fetchQuiz, [quizId]);

    console.log(quiz)

    if(!quiz)
        return <div>Loading...</div>

    return <Quiz quiz={quiz} />
}
 
export default QuizContainer;