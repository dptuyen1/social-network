/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.Role;
import com.dpt.repository.RoleRepository;
import com.dpt.service.RoleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository repository;

    @Override
    public List<Role> getRoles() {
        return this.repository.getRoles();
    }

    @Override
    public Role getRoleById(int id) {
        return this.repository.getRoleById(id);
    }

    @Override
    public boolean add(Role role) {
        return this.repository.addOrUpdate(role);
    }

    @Override
    public boolean update(Role role) {
        return this.repository.addOrUpdate(role);
    }
}
