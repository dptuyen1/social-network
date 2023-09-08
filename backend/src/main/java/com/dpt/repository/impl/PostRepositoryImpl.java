/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Post;
import com.dpt.pojo.User;
import com.dpt.repository.PostRepository;
import com.dpt.repository.UserRepository;
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
public class PostRepositoryImpl implements PostRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Post> getPosts() {
        Session session = this.factory.getObject().getCurrentSession();
        Query query = session.createQuery("from Post p order by p.id desc");

        return query.getResultList();
    }

    @Override
    public Post getPostById(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        return session.get(Post.class, id);
    }

    @Override
    public boolean addOrUpdate(Post post) {
        Session session = this.factory.getObject().getCurrentSession();
        try {
            if (post.getId() == null) {
                session.save(post);
            } else {
                session.update(post);
            }
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean delete(Post post) {
        Session session = this.factory.getObject().getCurrentSession();
        try {
            session.delete(post);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean changeStatus(Post post) {
        Session session = this.factory.getObject().getCurrentSession();
        try {
            session.update(post);
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return post.getStatus();
    }

    @Override
    public Post add(Post post) {
        Session session = this.factory.getObject().getCurrentSession();
        try {
            if (post.getId() == null) {
                session.save(post);
            } else {
                session.update(post);
            }
            return post;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Post> getPostsByUser(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        User user = this.userRepository.getUserById(id);
        Query query = session.createQuery("from Post p where userId=:user order by p.id desc");
        query.setParameter("user", user);

        return query.getResultList();
    }
}
