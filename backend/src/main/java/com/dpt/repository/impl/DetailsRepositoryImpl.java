/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Post;
import com.dpt.pojo.PostDetails;
import com.dpt.pojo.User;
import com.dpt.repository.DetailsRepository;
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
public class DetailsRepositoryImpl implements DetailsRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Override
    public PostDetails add(PostDetails details) {
        Session session = this.factory.getObject().getCurrentSession();
        session.save(details);

        return details;
    }

    @Override
    public List<PostDetails> get(int postId) {
        Session session = this.factory.getObject().getCurrentSession();

        Post post = this.postRepository.getPostById(postId);
        Query query = session.createQuery("from PostDetails where postId=:post");
        query.setParameter("post", post);

        return query.getResultList();
    }

    @Override
    public PostDetails existedDetails(int userId, int postId) {
        Session session = this.factory.getObject().getCurrentSession();
        Post post = this.postRepository.getPostById(postId);
        User user = this.userRepository.getUserById(userId);
        Query query = session.createQuery("from PostDetails where postId=:post and userId=:user");
        query.setParameter("post", post);
        query.setParameter("user", user);

        return (PostDetails) query.getSingleResult();
    }

    @Override
    public boolean delete(PostDetails details) {
        Session session = this.factory.getObject().getCurrentSession();
        try {
            session.delete(details);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public PostDetails getDetailsById(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        return session.get(PostDetails.class, id);
    }

    @Override
    public PostDetails update(PostDetails details) {
        Session session = this.factory.getObject().getCurrentSession();
        session.update(details);

        return details;
    }

}
