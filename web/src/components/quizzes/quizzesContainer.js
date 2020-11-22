import React, { useState, useEffect } from 'react';
import { apiHost } from 'config';
import axios from 'axios';
import Quizzes from './quizzes';

const QuizzesContainer = () => {
    const [quizzes, setQuizzes] = useState([]);

    const getQuizzes = params => {
        const config = {}

        if(params)
            config.params = params;

        axios.get(`${apiHost}/api/quizzes`, config).then(res => {
            setQuizzes(res.data)
        });
    }

    useEffect(getQuizzes, []);

    const filterByTopic = topic => {
        if(topic === "")
            getQuizzes();
        else
            getQuizzes({topic})
    }
    
    return(
        <div className="portal">
            <Quizzes quizzes={quizzes} filterByTopic={filterByTopic} />
        </div>
    )

}
 
export default QuizzesContainer;