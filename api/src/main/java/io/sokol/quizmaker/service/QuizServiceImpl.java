package io.sokol.quizmaker.service;

import io.sokol.quizmaker.entity.Answer;
import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.entity.Question;
import io.sokol.quizmaker.entity.Quiz;
import io.sokol.quizmaker.exception.MissingQuizCreatorException;
import io.sokol.quizmaker.exception.NoSuchQuizException;
import io.sokol.quizmaker.repository.PersonRepository;
import io.sokol.quizmaker.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service("quizService")
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private PersonRepository personRepository;

    @Override
    public ResponseEntity<Long> createQuiz(Quiz quiz, String creatorEmail) throws MissingQuizCreatorException {
        Set<Question> questions = quiz.getQuestions();

        questions.forEach(question -> {
            Set<Answer> answers = question.getAnswerChoices();
            answers.forEach(answer -> answer.setQuestion(question));
            question.setQuiz(quiz);
        });

        Optional<Person> optionalCreator = personRepository.findByEmail(creatorEmail);
        optionalCreator.orElseThrow(MissingQuizCreatorException::new);
        quiz.setCreator(optionalCreator.get());

        quizRepository.save(quiz);
        return new ResponseEntity<>(quiz.getId(), HttpStatus.CREATED);
    }

    @Override
    public Quiz getQuizById(long id) throws NoSuchQuizException {
        Optional<Quiz> optionalQuiz = quizRepository.findById(id);
        optionalQuiz.orElseThrow(NoSuchQuizException::new);
        return optionalQuiz.get();
    }

    @Override
    public Set<Quiz> getQuizzesCreated(String creatorEmail) throws MissingQuizCreatorException {
        Optional<Person> optionalCreator = personRepository.findByEmail(creatorEmail);
        optionalCreator.orElseThrow(MissingQuizCreatorException::new);
        Person creator = optionalCreator.get();
        return creator.getCreatedQuizzes();
    }
}
