/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.User;
import java.util.List;
import java.util.Map;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dptuy
 */
public interface UserService extends UserDetailsService {

    List<User> getUsers(Map<String, String> params);

    boolean add(User user);

    boolean update(User user);

    User getUserByUsername(String username);

    User getUserById(int id);

    boolean authUser(String username, String password);

    User add(Map<String, String> params, MultipartFile file);

    boolean changePassword(String username, User user);

    int count();

    void deactiveUser();
}
