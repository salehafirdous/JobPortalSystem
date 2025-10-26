package com.jobportal.service;

import java.util.List;
import com.jobportal.entity.Job;

public interface JobService {

    Job postJob(Job job);
    Job updateJob(Long id, Job updatedJob);
    Job getJobById(Long id);
    List<Job> getAllJobs();
    List<Job> getJobsByCompany(Long companyId);
    void deleteJob(Long id);
}
