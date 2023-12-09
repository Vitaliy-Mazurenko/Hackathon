package com.hakaton.team1.helloworld.exceptions;

public class FaqNotFounException extends RuntimeException {
    public FaqNotFounException(Integer id) {
        super("Faq not found with id=" + id);
    }
}
