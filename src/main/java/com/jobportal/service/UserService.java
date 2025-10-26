package com.jobportal.service;

import java.util.List;
import com.jobportal.entity.User;

public interface UserService {
    User registerUser(User user);
    User loginUser(String email, String password);
    List<User> getAllUsers();
}
