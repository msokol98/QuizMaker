package io.sokol.quizmaker.exception;

public class UserAlreadyExistsException extends Exception {

    public UserAlreadyExistsException() {
        super("User already exists.");
    }

}
