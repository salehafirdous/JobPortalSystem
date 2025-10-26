package com.jobportal.entity;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Each application belongs to one user (job seeker)
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Each application belongs to one job
    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    private LocalDate appliedDate;
    private String status; // e.g. "Pending", "Accepted", "Rejected"

    // Default Constructor
    public Application() {}

    // Parameterized Constructor
    public Application(User user, Job job, LocalDate appliedDate, String status) {
        this.user = user;
        this.job = job;
        this.appliedDate = appliedDate;
        this.status = status;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Job getJob() {
        return job;
    }
    public void setJob(Job job) {
        this.job = job;
    }

    public LocalDate getAppliedDate() {
        return appliedDate;
    }
    public void setAppliedDate(LocalDate appliedDate) {
        this.appliedDate = appliedDate;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    // toString method
    @Override
    public String toString() {
        return "Application [id=" + id + ", user=" + user.getName() + 
               ", job=" + job.getTitle() + ", status=" + status + "]";
    }
}
