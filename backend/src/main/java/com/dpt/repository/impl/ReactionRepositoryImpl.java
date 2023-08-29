/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Reaction;
import com.dpt.repository.ReactionRepository;
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
public class ReactionRepositoryImpl implements ReactionRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Reaction> getReactions() {
        Session session = this.factory.getObject().getCurrentSession();
        Query query = session.createQuery("from Reaction");

        return query.getResultList();
    }

    @Override
    public Reaction getReactionById(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        return session.get(Reaction.class, id);
    }

    @Override
    public boolean addOrUpdate(Reaction reaction) {
        try {
            Session session = this.factory.getObject().getCurrentSession();
            if (reaction.getId() == null) {
                session.save(reaction);
            } else {
                session.update(reaction);
            }
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean delete(Reaction reaction) {
        try {
            Session session = this.factory.getObject().getCurrentSession();
            session.delete(reaction);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

}
