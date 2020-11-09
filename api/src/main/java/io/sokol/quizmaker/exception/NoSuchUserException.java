package io.sokol.quizmaker.exception;

public class NoSuchUserException extends Exception {

    public NoSuchUserException() {
        super("Could not find a user by given email.");
    }

}
