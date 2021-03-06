package io.sokol.quizmaker.controller;

import io.sokol.quizmaker.auth.JwtService;
import io.sokol.quizmaker.dto.QuizDTO;
import io.sokol.quizmaker.entity.Quiz;
import io.sokol.quizmaker.exception.MissingQuizCreatorException;
import io.sokol.quizmaker.exception.NoSuchQuizException;
import io.sokol.quizmaker.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private JwtService jwtService;

        @PostMapping("/api/quizzes")
    public ResponseEntity<Long> createQuiz(@RequestBody Quiz quiz, @RequestHeader("Authorization") String authHeader) throws MissingQuizCreatorException {
        String creatorEmail = jwtService.extractUsername(jwtService.getToken(authHeader));
        return quizService.createQuiz(quiz, creatorEmail);
    }

    @GetMapping("/api/quizzes")
    public List<QuizDTO> getQuizzes(@RequestParam(required = false) String topic,
                                    @RequestParam(required = false) Integer page,
                                    @RequestParam(required = false) Integer size) {
        List<Quiz> quizzes;

        // paginated and filtered
        if(topic != null && page != null)
            throw new RuntimeException("Do not yet support both filtering and paginating at same time");

        // filtered
        else if(topic != null)
            quizzes = quizService.getQuizzes(topic);

        //paginate
        else if(page != null)
            quizzes = quizService.getQuizzes(page, size);

        // all quizzes
        else
            quizzes = quizService.getQuizzes();

        return quizzes.stream().map(QuizDTO::new).collect(Collectors.toList());
    }

    @GetMapping("/api/quizzes/{id}")
    public QuizDTO getQuiz(@PathVariable("id") long id) throws NoSuchQuizException {
        return new QuizDTO(quizService.getQuizById(id));
    }

    @PatchMapping("/api/quizzes/{id}")
    public ResponseEntity<?> patchQuiz(@PathVariable("id") long id, @RequestBody Quiz quiz, @RequestHeader("Authorization") String authHeader)
            throws MissingQuizCreatorException, NoSuchQuizException {

        String creatorEmail = jwtService.extractUsername(jwtService.getToken(authHeader));
        return quizService.patchQuiz(id, quiz, creatorEmail);
    }

    @GetMapping("/api/quizzes/created")
    public Set<QuizDTO> getQuizzesCreated(@RequestHeader("Authorization") String authHeader) throws MissingQuizCreatorException {
        String creatorEmail = jwtService.extractUsername(jwtService.getToken(authHeader));
        return quizService.getQuizzesCreated(creatorEmail).stream().map(QuizDTO::new).collect(Collectors.toSet());
    }
}
