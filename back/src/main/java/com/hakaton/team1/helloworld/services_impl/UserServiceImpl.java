package com.hakaton.team1.helloworld.services_impl;

import com.hakaton.team1.helloworld.exceptions.UserNotFoundException;
import com.hakaton.team1.helloworld.models.User;
import com.hakaton.team1.helloworld.repository.UserRepository;
import com.hakaton.team1.helloworld.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(
            @Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User getUserById(Long userId) {
        Optional<User> result = userRepository.findById(userId);
        return result.orElseThrow(() -> new UserNotFoundException(userId));
    }

    @Override
    public List<User> getAllUsers() {
        Iterable<User> result = userRepository.findAll();
        return StreamSupport.stream(result.spliterator(), false)
                .toList();
    }

    @Override
    public User saveUser(User user) {
        User result = userRepository.save(user);
        return result;
    }

    @Override
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
