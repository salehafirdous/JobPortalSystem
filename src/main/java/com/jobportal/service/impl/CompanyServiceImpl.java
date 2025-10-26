package com.jobportal.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jobportal.entity.Company;
import com.jobportal.exception.ResourceNotFoundException;
import com.jobportal.repository.CompanyRepository;
import com.jobportal.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	private CompanyRepository companyRepository;

	@Override
	public Company addCompany(Company company) {
		return companyRepository.save(company);
	}

	@Override
	public Company updateCompany(Long id, Company updatedCompany) {
		Optional<Company> existing = companyRepository.findById(id);
		if (existing.isPresent()) {
			Company company = existing.get();
			company.setName(updatedCompany.getName());
			company.setLocation(updatedCompany.getLocation());
			company.setDescription(updatedCompany.getDescription());
			return companyRepository.save(company);
		} else {
			throw new ResourceNotFoundException("Company not found with ID: " + id);

		}
	}

	@Override
	public Company getCompanyById(Long id) {
		return companyRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Company not found with ID: " + id));

	}

	@Override
	public List<Company> getAllCompanies() {
		return companyRepository.findAll();
	}

	@Override
	public void deleteCompany(Long id) {
		if (companyRepository.existsById(id)) {
			companyRepository.deleteById(id);
		} else {
			throw new ResourceNotFoundException("Cannot delete — company not found with ID: " + id);

		}
	}
}
