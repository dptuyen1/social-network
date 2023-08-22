/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.User;
import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 *
 * @author dptuy
 */
public interface UserService extends UserDetailsService {

    List<User> getUsers();

    boolean addNewUser(User user);

    User getUserByUsername(String username);

    boolean authUser(String username, String password);
}
