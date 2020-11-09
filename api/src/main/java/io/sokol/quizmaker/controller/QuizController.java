package io.sokol.quizmaker.controller;

import io.sokol.quizmaker.entity.Quiz;
import io.sokol.quizmaker.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/api/quizzes")
    public ResponseEntity<?> createQuiz(@RequestBody Quiz quiz) {
        return quizService.createQuiz(quiz);
    }

}
