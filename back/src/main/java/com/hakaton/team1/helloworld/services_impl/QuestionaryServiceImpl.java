package com.hakaton.team1.helloworld.services_impl;

import com.hakaton.team1.helloworld.models.Questionary;
import com.hakaton.team1.helloworld.repository.QuestionaryRepository;
import com.hakaton.team1.helloworld.services.QuestionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.StreamSupport;

@Service
public class QuestionaryServiceImpl implements QuestionaryService {

    private final QuestionaryRepository questionaryRepository;

    @Autowired
    public QuestionaryServiceImpl(QuestionaryRepository questionaryRepository) {
        this.questionaryRepository = questionaryRepository;
    }

    @Override
    public Integer createQuestionary(Questionary questionary) {
        Questionary savedQuestionary = questionaryRepository.save(questionary);
        return savedQuestionary.getId();
    }

    @Override
    public List<Questionary> getAllQuestionaries() {
        return StreamSupport.stream(questionaryRepository.findAll().spliterator(), false)
                .toList();
    }

    @Override
    public boolean deleteQuestionary(Integer id) {
        if (questionaryRepository.existsById(id)) {
            questionaryRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Questionary getQuestionaryById(Integer id) {
        return questionaryRepository.findById(id).orElse(null);
    }

    @Override
    public Questionary updateQuestionary(Integer id, Questionary updatedQuestionary) {
        if (questionaryRepository.existsById(id)) {
            updatedQuestionary.setId(id);
            return questionaryRepository.save(updatedQuestionary);
        }
        return null;
    }
}
