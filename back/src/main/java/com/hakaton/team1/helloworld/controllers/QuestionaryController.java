package com.hakaton.team1.helloworld.controllers;

import com.hakaton.team1.helloworld.models.Questionary;
import com.hakaton.team1.helloworld.services.QuestionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questionaries")
public class QuestionaryController {

    private final QuestionaryService questionaryService;

    @Autowired
    public QuestionaryController(
            @Autowired QuestionaryService questionaryService) {
        this.questionaryService = questionaryService;
    }

    @PostMapping
    public ResponseEntity<Integer> createQuestionary(@RequestBody Questionary questionary) {
        Integer createdQuestionaryId = questionaryService.createQuestionary(questionary);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdQuestionaryId);
    }

    @GetMapping
    public ResponseEntity<List<Questionary>> getAllQuestionaries() {
        List<Questionary> questionaries = questionaryService.getAllQuestionaries();
        return ResponseEntity.ok(questionaries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questionary> getQuestionaryById(@PathVariable Integer id) {
        Questionary questionary = questionaryService.getQuestionaryById(id);
        if (questionary != null) {
            return ResponseEntity.ok(questionary);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuestionary(@PathVariable Integer id) {
        boolean deleted = questionaryService.deleteQuestionary(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Questionary> updateQuestionary(@PathVariable Integer id, @RequestBody Questionary updatedQuestionary) {
        Questionary updated = questionaryService.updateQuestionary(id, updatedQuestionary);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

