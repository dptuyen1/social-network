/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.dpt.pojo.Role;
import com.dpt.pojo.User;
import com.dpt.repository.RoleRepository;
import com.dpt.repository.UserRepository;
import com.dpt.service.UserService;
import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.NoResultException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dptuy
 */
@Service("userDetailsService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private Cloudinary cloudinary;

    @Override
    public List<User> getUsers(Map<String, String> params) {
        return this.repository.getUsers(params);
    }

    @Override
    public boolean add(User user) {
        List<Role> roles = this.roleRepository.getRoles();

        //Dang ky tai khoan giao vien
        if (user.getPassword() == null) {
            user.setPassword(this.passwordEncoder.encode("ou@123"));
//            user.setPassword("ou@123");
            user.setRoleId(roles.get(1));
        } else { //Dang ky tai khoan sinh vien
            user.setPassword(this.passwordEncoder.encode(user.getPassword()));
            user.setRoleId(roles.get(2));
        }

        if (user.getFile() != null && !user.getFile().isEmpty()) {
            try {
                Map res = this.cloudinary.uploader().upload(user.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
                user.setAvatar(res.get("secure_url").toString());
            } catch (IOException ex) {
                Logger.getLogger(UserServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            user.setAvatar("https://res.cloudinary.com/dzbcst18v/image/upload/v1693284144/trfuq7zhrnknwh8rtdhb.png");
        }

        user.setCreatedDate(new Date());
        user.setActive(true);

        return this.repository.addOrUpdate(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.repository.getUserByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User không tồn tại");
        }
        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(user.getRoleId().getName()));

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public User getUserByUsername(String username) {
        try {
            return this.repository.getUserByUsername(username);
        } catch (NoResultException ex) {
            return null;
        }
    }

    @Override
    public boolean authUser(String username, String password) {
        return this.repository.authUser(username, password);
    }

    @Override
    public boolean update(User user) {
        //admin update
        return this.repository.addOrUpdate(user);
    }

    @Override
    public User add(Map<String, String> params, MultipartFile file) {
        List<Role> roles = this.roleRepository.getRoles();

        User user = new User();
        user.setLastName(params.get("lastName"));
        user.setFirstName(params.get("firstName"));
        user.setEmail(params.get("email"));
        user.setUsername(params.get("username"));
        user.setPassword(this.passwordEncoder.encode(params.get("password")));
        user.setActive(true);
        user.setCreatedDate(new Date());
        user.setRoleId(roles.get(2));

        if (file != null && !file.isEmpty()) {
            try {
                Map res = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap("resource_type", "auto"));
                user.setAvatar(res.get("secure_url").toString());
            } catch (IOException ex) {
                Logger.getLogger(UserServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            user.setAvatar("https://res.cloudinary.com/dzbcst18v/image/upload/v1693284144/trfuq7zhrnknwh8rtdhb.png");
        }

        return this.repository.add(user);
    }

    @Override
    public boolean changePassword(String username, User user) {
        User u = this.repository.getUserByUsername(username);

        u.setPassword(this.passwordEncoder.encode(user.getPassword()));
        return this.repository.addOrUpdate(u);
    }

    @Override
    public User getUserById(int id) {
        return this.repository.getUserById(id);
    }

    @Override
    public int count() {
        return this.repository.count();
    }

    @Override
    public void deactiveUser() {
        List<User> users = this.repository.getUsers(null);
        List<Role> roles = this.roleRepository.getRoles();
        Date currentDate = new Date();

        for (User user : users) {
            long times = currentDate.getTime() - user.getCreatedDate().getTime();
            long afterDay = times / (24 * 60 * 60 * 1000);

            if (passwordEncoder.matches("ou@123", user.getPassword()) && user.getRoleId() == roles.get(1) && afterDay >= 1) {
                user.setActive(false);
                this.repository.addOrUpdate(user);
            }
        }
    }

    @Override
    public List<User> getUsersByRole(Role role) {
        return this.repository.getUsersByRole(role);
    }
}
