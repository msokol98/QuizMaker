import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHost } from 'config.js';
import './styles.css';
import { webHost } from 'config';
import QuizPreview from './quizPreview';

const PortalContainer = () => {

    const [createdQuizzes, setCreatedQuizzes] = useState([]);

    const getUsersQuizzes = () => {
        axios.get(`${apiHost}/api/quizzes/created`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
        }).then(res => {
            setCreatedQuizzes(res.data)
        })
    }

    useEffect(getUsersQuizzes, []);

    return(
        <div className="container portal">  
            <h3 className="title has-text-weight-light">Here our a list of quizzes you have made...</h3>

            {createdQuizzes && createdQuizzes.map((quiz, idx) => {
                const url = `${webHost}/quizzes/${quiz.id}`;

                return <QuizPreview key={idx} url={url} quiz={quiz} />
            })}

            <button onClick={() => window.location = "/create"} style={{marginTop: "10px"}} className="button is-info">Create New Quiz</button>
        </div>
    )

}

export default PortalContainer;