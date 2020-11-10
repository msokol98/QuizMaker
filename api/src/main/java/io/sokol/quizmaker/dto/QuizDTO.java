package io.sokol.quizmaker.dto;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.entity.Question;
import io.sokol.quizmaker.entity.Quiz;

import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;

public class QuizDTO {

    private Quiz quiz;

    public QuizDTO(Quiz quiz) {
        this.quiz = quiz;
    }

    public long getId() {
        return quiz.getId();
    }

    public String getTopic() {
        return quiz.getTopic();
    }

    public String getCreator() {
        Person creator = quiz.getCreator();
        return creator == null ? "null" : creator.getFirstName() + " " + creator.getLastName();
    }

    public Set<QuestionDTO> getQuestions() {
        return quiz.getQuestions().stream().map(QuestionDTO::new).collect(Collectors.toSet());
    }

    public LocalDate getCreationDate() {
        return quiz.getCreationTimestamp().toLocalDate();
    }

}
