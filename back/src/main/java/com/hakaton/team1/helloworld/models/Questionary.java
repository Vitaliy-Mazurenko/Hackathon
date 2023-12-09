package com.hakaton.team1.helloworld.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "questionary")
public class Questionary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "question")
    private String question;

    @Column(name = "answer")
    private List<String> answer;

    @Column(name = "optional")
    private Boolean optional;

}