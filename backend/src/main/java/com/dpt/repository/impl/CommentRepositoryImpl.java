/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository.impl;

import com.dpt.pojo.Comment;
import com.dpt.pojo.Post;
import com.dpt.repository.CommentRepository;
import com.dpt.service.PostService;
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
public class CommentRepositoryImpl implements CommentRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private PostService postService;

    @Override
    public List<Comment> getComments() {
        Session session = this.factory.getObject().getCurrentSession();
        Query query = session.createQuery("from Comment");

        return query.getResultList();
    }

    @Override
    public boolean addOrUpdate(Comment comment) {
        try {
            Session session = this.factory.getObject().getCurrentSession();
            if (comment.getId() == null) {
                session.save(comment);
            } else {
                session.update(comment);
            }
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean delete(Comment comment) {
        try {
            Session session = this.factory.getObject().getCurrentSession();
            session.delete(comment);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public List<Comment> getCommentByPostId(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        Post post = this.postService.getPostById(id);
        Query query = session.createQuery("from Comment where postId=:post");
        query.setParameter("post", post);

        return query.getResultList();
    }

    @Override
    public Comment add(Comment comment) {
        Session session = this.factory.getObject().getCurrentSession();
        session.save(comment);

        return comment;
    }

    @Override
    public Comment getCommentById(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        return session.get(Comment.class, id);
    }

    @Override
    public Comment update(Comment comment) {
        Session session = this.factory.getObject().getCurrentSession();
        session.update(comment);

        return comment;
    }
}
