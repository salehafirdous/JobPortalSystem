package com.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.jobportal.entity.Job;
import com.jobportal.entity.Company;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    // Custom Finder Methods
    List<Job> findByLocation(String location);
    List<Job> findByCompany(Company company);
    List<Job> findByTitleContainingIgnoreCase(String title);
}
