import React, { useState, useEffect } from 'react';
import { apiHost } from 'config';
import axios from 'axios';
import Quizzes from './quizzes';

const QuizzesContainer = () => {
    const [quizzes, setQuizzes] = useState([]);

    const getQuizzes = () => {
        axios.get(`${apiHost}/api/quizzes`).then(res => {
            setQuizzes(res.data)
        })
    }

    useEffect(getQuizzes, []);

    if(!quizzes) return <div>Loading...</div>

    return <Quizzes quizzes={quizzes} />

}
 
export default QuizzesContainer;