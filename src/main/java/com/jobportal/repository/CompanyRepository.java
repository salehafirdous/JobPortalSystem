package com.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jobportal.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    // Custom Finder Method
    Company findByName(String name);
}
