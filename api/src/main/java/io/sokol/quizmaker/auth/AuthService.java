package io.sokol.quizmaker.auth;

import io.sokol.quizmaker.pojo.AuthRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> authenticate(AuthRequest request);
}
