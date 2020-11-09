package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.exception.NoSuchUserException;
import io.sokol.quizmaker.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private PersonRepository personRepo;

    @Override
    public Person getUserByEmail(String email) throws NoSuchUserException {
        Optional<Person> optPerson = personRepo.findByEmail(email);
        optPerson.orElseThrow(NoSuchUserException::new);
        return optPerson.get();
    }
}
