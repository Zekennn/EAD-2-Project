package com.ead2cw.UserManagement.controller;

import com.ead2cw.UserManagement.model.User;
import com.ead2cw.UserManagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        User newUser = userService.registerUser(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        Optional<User> user = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (user.isPresent()) {
            // On success, return a response containing the user's first name
            return ResponseEntity.ok(user.get().getFirstName());
        } else {
            // On failure, return an unauthorized status
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}
