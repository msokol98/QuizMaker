import React, { Component } from 'react';
import AnswerChoice from './answerChoice';
import mapIdxToLetter from 'utils/mapIdxToLetter';
import './styles.css';

class NewQuestion extends Component {

    state = {
        prompt: "",
        answerChoices: [
            {body: ""},
            {body: ""},
            {body: ""},
            {body: ""}
        ]
    }

    removeAnswer = deletionIdx => {
        const remainingAnswers = this.state.answerChoices.filter((_, idx) => idx !== deletionIdx);

        if(remainingAnswers.length < 2)
            alert("There must be more than one answer choice.")
        else
            this.setState({answerChoices: remainingAnswers});
    }

    addAnswer = () => {
        this.setState({answerChoices: [...this.state.answerChoices, {body: ""}]});
    } 

    handleChange = event =>  {
        const name = event.target.name, value = event.target.value;

        if(name === "prompt") {
            this.setState({prompt: value});
        } else {
            const { answerChoices } = this.state, idx = name;
            answerChoices[idx] = {body: value};
            this.setState({answerChoices});
        }
    }

    setCorrectAnswer = idx => {
        console.log(idx)
        this.setState({correctAnswer: mapIdxToLetter(idx)});
    }

    submitQuestion = () => {
        if(!this.state.correctAnswer)
            alert("You must choose a correct answer.");
        else
            this.props.submitQuestion(this.state);
    }

    render() {

        const { prompt, answerChoices } = this.state;

        return(
            <div className="new-question">

                <h4>Question {this.props.number}</h4>

                <p className="has-text-grey">Click radio button to denote the correct answer...</p>

                <input 
                    className="new-question-prompt input" 
                    type="text" 
                    placeholder="Add a question... e.g. What is the capital of Japan?"
                    value={prompt}
                    name="prompt" 
                    onChange={e => this.handleChange(e)}
                />
                
                {answerChoices.map((answerChoice, idx) => (

                        <AnswerChoice 
                            key={idx}
                            value={answerChoice.body} 
                            idx={idx} 
                            remove={this.removeAnswer}
                            onChange={this.handleChange}
                            placeholder={`Answer ${mapIdxToLetter(idx)}`}
                            setCorrectAnswer={this.setCorrectAnswer}
                        />
                ))}

                {answerChoices.length < 4 &&
                    <button className="button" onClick={this.addAnswer}>Add Answer</button>
                }

                <button className="button is-info" onClick={this.submitQuestion}>
                    Submit Question
                </button>

            </div>
        )
    }
}
 
export default NewQuestion;