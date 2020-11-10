import React, { useState } from 'react';
import QuizCreationForm from './quizCreationForm';
import postToServer from 'utils/postToServer';
import { webHost } from 'config';

const QuizCreationFormContainer = () => {
    
    const [topic, setTopic] = useState("");
    const [questions] = useState([]);
    const [addingQuestion, setAddingQuestion] = useState(true);

    const addQuestion = () => {
        setAddingQuestion(true);
    }

    const submitQuestion = newQuestion => {
        questions.push(newQuestion);
        setAddingQuestion(false);
    }

    const submitQuiz = event => {
        event.preventDefault();

        if(!isValid())
            return;

        postToServer("api/quizzes", { topic, questions }).then(res => {
            const quizId = res.data;
            alert(`You and your friends can take the quiz at ${webHost}/quizzes/${quizId}`);
            window.location = '/portal';
        })
    }

    const isValid = () => {
        if(questions.length < /*3*/ 1) {
            alert("Please provide at least three questions");
            return false;
        }

        return true;
    }

    return(
        <QuizCreationForm
            topic={topic}
            setTopic={setTopic}
            questions={questions}
            addingQuestion={addingQuestion}
            addQuestion={addQuestion}
            submitQuestion={submitQuestion}
            submitQuiz={submitQuiz}
        />
    )
}
 
export default QuizCreationFormContainer;