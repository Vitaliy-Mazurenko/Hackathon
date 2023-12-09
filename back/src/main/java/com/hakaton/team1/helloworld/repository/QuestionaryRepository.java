package com.hakaton.team1.helloworld.repository;

import com.hakaton.team1.helloworld.models.Questionary;
import org.springframework.data.repository.CrudRepository;

public interface QuestionaryRepository extends CrudRepository<Questionary, Integer> {
}
