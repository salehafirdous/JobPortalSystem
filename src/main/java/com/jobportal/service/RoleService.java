package com.jobportal.service;

import java.util.List;
import com.jobportal.entity.Role;

public interface RoleService {

    Role addRole(Role role);
    Role getRoleById(Long id);
    Role getRoleByName(String name);
    List<Role> getAllRoles();
    void deleteRole(Long id);
}
