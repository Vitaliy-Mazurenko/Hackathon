package com.hakaton.team1.helloworld.controllers;

import com.hakaton.team1.helloworld.models.User;
import com.hakaton.team1.helloworld.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(
            @Autowired UserService userService
    ){
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<Long> addUser(@RequestBody User user){
        User result = userService.saveUser(user);
        return ResponseEntity.ok(result.getId());
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id){
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/delete")
    public ResponseEntity<String> deleteUser(@RequestBody User user){
        userService.deleteUser(user);
        return ResponseEntity.ok("User deleted. Id=" + user.getId());
    }
}
