package com.jobportal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;
    private double salary;

    // Relationship: Many jobs belong to one company
    @ManyToOne
    @JoinColumn(name = "company_id") // Foreign key column in jobs table
    private Company company;

    // Default Constructor
    public Job() {}

    // Parameterized Constructor
    public Job(String title, String description, String location, double salary, Company company) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.salary = salary;
        this.company = company;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public double getSalary() {
        return salary;
    }
    public void setSalary(double salary) {
        this.salary = salary;
    }

    public Company getCompany() {
        return company;
    }
    public void setCompany(Company company) {
        this.company = company;
    }

    // toString
    @Override
    public String toString() {
        return "Job [id=" + id + ", title=" + title + ", location=" + location + 
               ", salary=" + salary + ", company=" + company.getName() + "]";
    }
}

