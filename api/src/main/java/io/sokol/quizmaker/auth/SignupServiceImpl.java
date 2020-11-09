package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.exception.UserAlreadyExistsException;
import io.sokol.quizmaker.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("signupService")
public class SignupServiceImpl implements SignupService {

    @Autowired
    private PersonRepository personRepo;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public ResponseEntity<?> registerUser(Person person) throws UserAlreadyExistsException {
        Optional<Person> optPerson = personRepo.findByEmail(person.getEmail());

        if(optPerson.isPresent())
            throw new UserAlreadyExistsException();

        person.setPassword(encoder.encode(person.getPassword()));
        personRepo.save(person);

        return ResponseEntity.ok().build();
    }
}
