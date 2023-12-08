package com.hakaton.team1.helloworld.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long userId) {
        super("User with id=" + userId + " not found in database.");
    }
}
