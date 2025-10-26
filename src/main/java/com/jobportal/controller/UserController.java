package com.jobportal.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.jobportal.entity.User;
import com.jobportal.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Register new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    //Login to accept JSON body
    @PostMapping("/login")
    public User loginUser(@RequestBody User loginData) {
        return userService.loginUser(loginData.getEmail(), loginData.getPassword());
    }

    // View all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
