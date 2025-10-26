package com.jobportal.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jobportal.entity.Job;
import com.jobportal.exception.ResourceNotFoundException;
import com.jobportal.entity.Company;
import com.jobportal.repository.JobRepository;
import com.jobportal.repository.CompanyRepository;
import com.jobportal.service.JobService;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public Job postJob(Job job) {
        if (job.getCompany() != null) {
            Long companyId = job.getCompany().getId();
            Company company = companyRepository.findById(companyId)
                    .orElseThrow(() -> new ResourceNotFoundException("Company not found!"));

            job.setCompany(company);
        }
        return jobRepository.save(job);
    }

    @Override
    public Job updateJob(Long id, Job updatedJob) {
        Optional<Job> existing = jobRepository.findById(id);
        if (existing.isPresent()) {
            Job job = existing.get();
            job.setTitle(updatedJob.getTitle());
            job.setDescription(updatedJob.getDescription());
            job.setLocation(updatedJob.getLocation());
            job.setSalary(updatedJob.getSalary());
            return jobRepository.save(job);
        } else {
            throw new RuntimeException("Job not found with ID: " + id);
        }
    }

    @Override
    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + id));

    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public List<Job> getJobsByCompany(Long companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new ResourceNotFoundException("Company not found!"));

        return jobRepository.findByCompany(company);
    }

    @Override
    public void deleteJob(Long id) {
        if (jobRepository.existsById(id)) {
            jobRepository.deleteById(id);
        } else {
        	throw new ResourceNotFoundException("Job not found with ID: " + id);

        }
    }
}
