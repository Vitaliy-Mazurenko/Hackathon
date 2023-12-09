package com.hakaton.team1.helloworld.services;

import com.hakaton.team1.helloworld.models.User;

import java.util.List;

public interface UserService {
    User getUserById(Long userId);
    List<User> getAllUsers();
    User saveUser(User user);
    void deleteUser(User user);

}
