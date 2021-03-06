package io.sokol.quizmaker.dto;

import io.sokol.quizmaker.entity.Question;

import java.util.Set;
import java.util.stream.Collectors;

public class QuestionDTO {

    private Question question;

    public QuestionDTO(Question question) {
        this.question = question;
    }

    public long getId() {
        return question.getId();
    }

    public int getNumber() { return question.getNumber(); }

    public String getPrompt() {
        return question.getPrompt();
    }

    public char getCorrectAnswer() {
        return question.getCorrectAnswer();
    }

    public Set<AnswerDTO> getAnswerChoices() {
        return question.getAnswerChoices().stream().map(AnswerDTO::new).collect(Collectors.toSet());
    }

}
