package com.jobportal.service;

import java.util.List;
import com.jobportal.entity.Company;

public interface CompanyService {

    Company addCompany(Company company);
    Company updateCompany(Long id, Company updatedCompany);
    Company getCompanyById(Long id);
    List<Company> getAllCompanies();
    void deleteCompany(Long id);
}
