package com.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jobportal.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    // Find role by name (like ADMIN, RECRUITER, JOB_SEEKER)
    Role findByName(String name);
}

