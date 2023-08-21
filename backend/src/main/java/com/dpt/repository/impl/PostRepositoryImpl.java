/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Post;
import com.dpt.pojo.User;
import com.dpt.repository.PostRepository;
import com.dpt.service.UserService;
import java.util.Date;
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
    private UserService userService;

    @Override
    public List<Post> getPosts() {
        Session session = this.factory.getObject().getCurrentSession();
        Query query = session.createQuery("from Post");

        return query.getResultList();
    }

    @Override
    public boolean addPosts(Post post) {
        Session session = this.factory.getObject().getCurrentSession();
        try {
            List<User> users = this.userService.getUsers();
            post.setCreatedDate(new Date());
            post.setStatus(true);
            session.save(post);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return false;
    }
}
