package io.sokol.quizmaker.pojo;

import java.io.Serializable;

public class AuthRequest implements Serializable {

    private String email;
    private String password;

    public AuthRequest() {}

    public AuthRequest(String email, String password) {
        this.setEmail(email);
        this.setPassword(password);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}