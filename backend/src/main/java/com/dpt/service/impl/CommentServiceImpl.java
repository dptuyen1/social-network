/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.Comment;
import com.dpt.pojo.User;
import com.dpt.repository.CommentRepository;
import com.dpt.repository.PostRepository;
import com.dpt.repository.UserRepository;
import com.dpt.service.CommentService;
import com.dpt.service.PostService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostService postService;

    @Override
    public List<Comment> getComments() {
        return this.repository.getComments();
    }

    @Override
    public List<Comment> getCommentsByPostId(int id) {
        return this.repository.getCommentByPostId(id);
    }

    @Override
    public Comment add(Comment comment) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.getUserByUsername(authentication.getName());

        comment.setCreatedDate(new Date());
        comment.setUserId(user);
        return this.repository.add(comment);
    }

    @Override
    public boolean delete(int id) {
        Comment comment = this.repository.getCommentById(id);
        return this.repository.delete(comment);
    }

    @Override
    public Comment getCommentById(int id) {
        return this.repository.getCommentById(id);
    }

    @Override
    public Comment update(int id, Comment comment) {
        Comment c = this.repository.getCommentById(id);

        c.setContent(comment.getContent());
        c.setUpdatedDate(new Date());

        return this.repository.update(c);
    }
}
