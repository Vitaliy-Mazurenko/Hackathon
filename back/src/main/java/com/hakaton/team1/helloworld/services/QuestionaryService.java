package com.hakaton.team1.helloworld.services;

import com.hakaton.team1.helloworld.models.Questionary;

import java.util.List;

public interface QuestionaryService {

    Integer createQuestionary(Questionary questionary);
    List<Questionary> getAllQuestionaries();
    boolean deleteQuestionary(Integer id);
    Questionary getQuestionaryById(Integer id);
    Questionary updateQuestionary(Integer id, Questionary questionary);
}

