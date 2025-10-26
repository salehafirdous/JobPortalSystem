package com.jobportal.service;

import java.util.List;
import com.jobportal.entity.Application;

public interface ApplicationService {

    Application applyForJob(Application application);
    List<Application> getApplicationsByUser(Long userId);
    List<Application> getApplicationsByJob(Long jobId);
    void deleteApplication(Long id);
}
