package com.hakaton.team1.helloworld.controllers;

import com.hakaton.team1.helloworld.services.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/faq")
public class FaqController {

    private final FaqService faqService;

    public FaqController(
            @Autowired FaqService faqService) {
        this.faqService = faqService;
    }

//    public ResponseEntity<Long> addFaq(FAQ faq){
//
//    }
}
