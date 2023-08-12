/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.Role;
import com.dpt.pojo.User;
import com.dpt.repository.UserRepository;
import com.dpt.service.RoleService;
import com.dpt.service.UserService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleService service;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public List<User> getUsers() {
        return this.repository.getUsers();
    }

    @Override
    public boolean addNewUser(User user) {
        List<Role> roles = this.service.getRoles();
        Date date = new Date(System.currentTimeMillis());
        user.setPassword(this.passwordEncoder.encode("ou@123"));
        user.setAvatar("my avatar");
        user.setCreatedDate(date);
        user.setActive(true);
        user.setRoleId(roles.get(1));
        return this.repository.addNewUser(user);
    }

}
