package io.sokol.quizmaker.dto;

import io.sokol.quizmaker.entity.Answer;

public class AnswerDTO {

    private Answer answer;

    public AnswerDTO(Answer answer) {
        this.answer = answer;
    }

    public String getBody() {
        return answer.getBody();
    }

    public char getLetter() {
        return answer.getLetter();
    }

    public long getId() { return answer.getId(); }
}
