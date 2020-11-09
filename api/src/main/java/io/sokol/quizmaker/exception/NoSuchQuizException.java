package io.sokol.quizmaker.exception;

public class NoSuchQuizException extends Exception {
    public NoSuchQuizException() {
        super("Could not find quiz by given params.");
    }
}
