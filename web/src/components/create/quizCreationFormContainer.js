import React, { useState } from 'react';
import QuizCreationForm from './quizCreationForm';
import axios from 'axios';
import apiHost from 'config';

const QuizCreationFormContainer = () => {
    
    const [topic, setTopic] = useState("Politics");
    const [questions, setQuestions] = useState([]);
    const [addingQuestion, setAddingQuestion] = useState(false);

    const addQuestion = () => {
        setAddingQuestion(true);
    }

    const submitQuestion = newQuestion => {
        questions.push(newQuestion);
        setAddingQuestion(false);
    }

    const submitQuiz = () => {
        axios.post(`${apiHost}/api/quizzes`, {
            topic, questions
        }).then(res => {
            console.log(res);
        })
    }

    return(
        <QuizCreationForm
            topic={topic}
            questions={questions}
            addingQuestion={addingQuestion}
            addQuestion={addQuestion}
            submitQuestion={submitQuestion}
            submitQuiz={submitQuiz}
        />
    )
}
 
export default QuizCreationFormContainer;