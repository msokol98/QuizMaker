package io.sokol.quizmaker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Answer {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Question question;

    private String body;

    public long getId() {
        return id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", question=" + question +
                ", body='" + body + '\'' +
                '}';
    }
}
