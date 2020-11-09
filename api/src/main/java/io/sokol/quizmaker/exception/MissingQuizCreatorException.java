package io.sokol.quizmaker.exception;

public class MissingQuizCreatorException extends Exception {
    public MissingQuizCreatorException() {
        super("Could not find a creator of this quiz by given email.");
    }
}
