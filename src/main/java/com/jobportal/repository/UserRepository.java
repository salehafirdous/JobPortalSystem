package com.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jobportal.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom Finder Methods
    User findByEmail(String email);
    User findByName(String name);
}
