import React from 'react';
import './styles.css';

const AnswerChoice = ({ value, idx, remove, onChange, placeholder, setCorrectAnswer }) => (

    <div className="answer-choice">
        <input 
            required
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={idx}
            className="input with-space-on-right"
        />

        <input type="radio" onClick={() => setCorrectAnswer(idx)} name="answer-choices" className="with-space-on-right" />

        <button onClick={() => remove(idx)} className="delete">Remove</button>
    </div>

);
 
export default AnswerChoice;