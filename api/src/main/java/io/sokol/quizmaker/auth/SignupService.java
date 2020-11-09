package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.exception.UserAlreadyExistsException;
import org.springframework.http.ResponseEntity;

public interface SignupService {
    ResponseEntity<?> registerUser(Person person) throws UserAlreadyExistsException;
}
