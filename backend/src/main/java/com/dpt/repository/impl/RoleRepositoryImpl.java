/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Role;
import com.dpt.repository.RoleRepository;
import java.util.List;
import javax.persistence.Query;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author dptuy
 */
@Repository
@Transactional
public class RoleRepositoryImpl implements RoleRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Role> getRoles() {
        Session session = this.factory.getObject().getCurrentSession();
        Query query = session.createQuery("from Role");

        return query.getResultList();
    }

    @Override
    public Role getRoleById(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        return session.get(Role.class, id);
    }

    @Override
    public boolean addOrUpdate(Role role) {
        try {
            Session session = this.factory.getObject().getCurrentSession();
            if (role.getId() == null) {
                session.save(role);
            } else {
                session.update(role);
            }
            return true;

        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

}
