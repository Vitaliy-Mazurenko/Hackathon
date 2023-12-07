package com.hakaton.team1.helloworld.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/helloworld")
    public ResponseEntity<String> getSayHelloWorld(@RequestParam String team) {
        return ResponseEntity.ok(String.format("Hello %s", team));
    }
}
