package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.entity.Person;
import io.sokol.quizmaker.pojo.UserDetailsImpl;
import io.sokol.quizmaker.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private PersonRepository personRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Person> user = personRepo.findByEmail(email);
        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + email));
        return user.map(UserDetailsImpl::new).get();
    }
}
