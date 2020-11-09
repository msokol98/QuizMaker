package io.sokol.quizmaker.service;

import io.sokol.quizmaker.entity.Quiz;
import org.springframework.http.ResponseEntity;

public interface QuizService {
    public ResponseEntity<?> createQuiz(Quiz quiz);
}
