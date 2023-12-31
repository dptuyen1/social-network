/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository;

import com.dpt.pojo.Role;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface RoleRepository {

    List<Role> getRoles();

    Role getRoleById(int id);

    boolean addOrUpdate(Role role);
}
