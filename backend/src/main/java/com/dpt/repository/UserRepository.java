/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository;

import com.dpt.pojo.User;
import java.util.List;
import java.util.Map;

/**
 *
 * @author dptuy
 */
public interface UserRepository {

    List<User> getUsers(Map<String, String> params);

    boolean addOrUpdate(User user);

    User getUserByUsername(String username);

    User getUserById(int id);

    boolean authUser(String username, String password);

    User add(User user);

    int count();
}
