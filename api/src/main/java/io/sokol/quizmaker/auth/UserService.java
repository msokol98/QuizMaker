package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.exception.NoSuchUserException;

public interface UserService {
    Person getUserByEmail(String email) throws NoSuchUserException;
}
