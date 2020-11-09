package io.sokol.quizmaker.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Quiz {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Person creator;

    @ManyToMany
    @JoinTable(
            name = "Taken_Quizzes",
            joinColumns = { @JoinColumn(name = "quiz_id") },
            inverseJoinColumns = { @JoinColumn(name = "person_id") }
    )
    private Set<Person> takers;

    private String topic;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    private Set<Question> questions;

    public long getId() {
        return id;
    }

    public Person getCreator() {
        return creator;
    }

    public void setCreator(Person creator) {
        this.creator = creator;
    }

    public Set<Person> getTakers() {
        return takers;
    }

    public void addTaker(Person person) {
        takers.add(person);
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                ", creator=" + creator +
                ", takers=" + takers +
                ", topic='" + topic + '\'' +
                ", questions=" + questions +
                '}';
    }
}
