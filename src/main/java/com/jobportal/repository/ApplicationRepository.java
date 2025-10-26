package com.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.jobportal.entity.Application;
import com.jobportal.entity.User;
import com.jobportal.entity.Job;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    // Find all applications made by a particular user
    List<Application> findByUser(User user);

    // Find all applications for a specific job
    List<Application> findByJob(Job job);
}
