package io.sokol.quizmaker.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Question {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Quiz quiz;

    private String prompt;
    private int number;
    private char correctAnswer;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private Set<Answer> answerChoices;

    public long getId() {
        return id;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public String getPrompt() {
        return prompt;
    }

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }

    public Set<Answer> getAnswerChoices() {
        return answerChoices;
    }

    public void setAnswerChoices(Set<Answer> answerChoices) {
        this.answerChoices = answerChoices;
    }

    public char getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(char correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
