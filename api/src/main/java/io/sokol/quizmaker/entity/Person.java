package io.sokol.quizmaker.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Person {

    @Id
    @GeneratedValue
    private long id;

    private String firstName;
    private String lastName;

    private String email;
    private String password;

    @OneToMany(mappedBy = "creator")
    private Set<Quiz> createdQuizzes = new HashSet<>();

    @ManyToMany(mappedBy = "takers")
    private Set<Quiz> takenQuizzes = new HashSet<>();

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public Set<Quiz> getCreatedQuizzes() {
        return createdQuizzes;
    }

    public void createQuiz(Quiz quiz) {
        createdQuizzes.add(quiz);
    }

    public Set<Quiz> getTakenQuizzes() {
        return takenQuizzes;
    }

    public void takeQuiz(Quiz quiz) {
        takenQuizzes.add(quiz);
    }

}
