package io.sokol.quizmaker.service;

import io.sokol.quizmaker.entity.Answer;
import io.sokol.quizmaker.entity.Question;
import io.sokol.quizmaker.entity.Quiz;
import io.sokol.quizmaker.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service("quizService")
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public ResponseEntity<?> createQuiz(Quiz quiz) {
        Set<Question> questions = quiz.getQuestions();

        questions.forEach(question -> {
            Set<Answer> answers = question.getAnswerChoices();
            answers.forEach(answer -> answer.setQuestion(question));
            question.setQuiz(quiz);
        });

        quizRepository.save(quiz);
        return ResponseEntity.ok().build();
    }
}
