## Job Portal System

A full-stack **Spring Boot + MySQL** based project developed as part of the **Elevate Labs Internship** program.  
This system helps job seekers apply for jobs and companies to post openings, built following proper layered architecture.
This project is developed as part of the Elevate Labs Internship Program (2025).

## Features

- **User Management** – Register and login functionality for job seekers and companies.
- **Company Management** – Add, update, view, and delete company profiles.
- **Job Management** – Companies can post, edit, and delete jobs.
- **Application Management** – Job seekers can apply for jobs and track applications.
- **Role-Based Access** – Separate roles for Admin, Company, and Job Seeker.
- **Exception Handling** – Centralized global exception handler with clean JSON error responses.
- **MySQL Integration** – Auto-create database and tables using JPA & Hibernate.
- **RESTful APIs** – Exposed endpoints for frontend integration (Angular/React).

## Project Structure
```
com.jobportal
├── controller # REST Controllers (APIs)
├── entity # JPA Entities
├── repository # Data Access Layer
├── service # Business Logic Interfaces
├── service.impl # Business Logic Implementations
├── exception # Global Exception Handling
└── JobPortalSystemApplication.java # Main Spring Boot Application

```

---

## Database Configuration

**File:** `src/main/resources/application.properties`

```properties
spring.application.name=JobPortalSystem

# MySQL Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/job_portal_db?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=saleha

# JPA/Hibernate Auto Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
server.port=8080
```

## Technologies Used

| Layer      | Technology                            |
| ---------- | ------------------------------------- |
| Backend    | Java 17, Spring Boot, Spring Data JPA |
| Database   | MySQL                                 |
| Tools      | Eclipse IDE, MySQL Workbench, Postman |
| Build Tool | Maven                                 |
| API Type   | RESTful APIs                          |


## API Endpoints Summary

| Entity      | Base URL        | Operations                 |
| ----------- | --------------- | -------------------------- |
| User        | `/users`        | Register, Login, Get All   |
| Company     | `/companies`    | Add, Update, Delete, Get   |
| Job         | `/jobs`         | Post, Update, Delete, View |
| Application | `/applications` | Apply, View by User/Job    |
| Role        | `/roles`        | Add, Get, Delete           |


## Exception Handling
All exceptions are managed globally in GlobalExceptionHandler.java

Example Response:
```
{
  "error": "User not found with ID: 10",
  "status": 404,
  "timestamp": "2025-10-11T18:45:32"
}
```
## Frontend
The frontend is built using Angular 17 and provides the user interface for the Job Portal System. 
It communicates with the backend REST APIs to allow users to:

- Job Seekers: Browse jobs, apply for jobs, track applications.
- Companies: Post, edit, and delete job openings, manage company profiles.
- Admin: View overall system activity.

### Running Frontend
1. Navigate to the frontend folder:
2. cd frontend--  Install dependencies:
3. npm install-- Run the development server:
4. ng serve -- Open your browser at: http://localhost:4200/


## Future Enhancements

- Integrate Angular/React frontend.

- Add JWT Authentication (Login security).

- Email notifications for applications.

- Pagination and filtering for job listings.




## Project Details

- Name: Saleha Firdous Syed Qamar
- Domain: Java Developer Intern
- Internship Provider: Elevate Labs
- Project Title: Job Portal System
- Objective: To design and develop a Spring Boot-based job posting and application tracking platform for job seekers and companies.
- Submission Date: 26 October 2025
