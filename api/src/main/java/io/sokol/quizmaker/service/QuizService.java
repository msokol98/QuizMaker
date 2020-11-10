package io.sokol.quizmaker.service;

import io.sokol.quizmaker.entity.Quiz;
import io.sokol.quizmaker.exception.MissingQuizCreatorException;
import io.sokol.quizmaker.exception.NoSuchQuizException;
import org.springframework.http.ResponseEntity;

import java.util.Set;

public interface QuizService {
    ResponseEntity<Long> createQuiz(Quiz quiz, String creatorEmail) throws MissingQuizCreatorException;
    Quiz getQuizById(long id) throws NoSuchQuizException;
    Set<Quiz> getQuizzesCreated(String creatorEmail) throws MissingQuizCreatorException;
    Set<Quiz> getQuizzes();
}
