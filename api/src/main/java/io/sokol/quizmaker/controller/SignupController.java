package io.sokol.quizmaker.controller;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.exception.UserAlreadyExistsException;
import io.sokol.quizmaker.auth.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Person person) throws UserAlreadyExistsException {
        return signupService.registerUser(person);
    }

}