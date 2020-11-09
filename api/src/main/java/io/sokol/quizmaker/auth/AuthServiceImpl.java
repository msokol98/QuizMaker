package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.pojo.AuthRequest;
import io.sokol.quizmaker.pojo.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service("authService")
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthenticationManager authManager;

    @Qualifier("userDetailsServiceImpl")
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtService jwtService;

    @Override
    public ResponseEntity<?> authenticate(AuthRequest authRequest) {
        try {
            System.out.println(authRequest.getEmail());
            System.out.println(authRequest.getPassword());
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(),
                            authRequest.getPassword())
            );
        } catch(BadCredentialsException e) {
            return ResponseEntity.badRequest().body("Given authentication credentials were not correct.");
        }

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authRequest.getEmail());
        final String jwt = jwtService.generateToken(userDetails);

        return ResponseEntity.ok(new AuthResponse(jwt));
    }

}
