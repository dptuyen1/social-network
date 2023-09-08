/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.Comment;
import com.dpt.pojo.Post;
import com.dpt.pojo.User;
import com.dpt.repository.CommentRepository;
import com.dpt.repository.PostRepository;
import com.dpt.repository.UserRepository;
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
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<Post> getPosts() {
        return this.repository.getPosts();
    }

    @Override
    public Post getPostById(int id) {
        return this.repository.getPostById(id);
    }

    @Override
    public boolean add(Post post) {
        post.setCreatedDate(new Date());
        post.setStatus(true);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.getUserByUsername(authentication.getName());
        post.setUserId(user);
        post.setTotalComment(0);
        post.setTotalReaction(0);

        return this.repository.addOrUpdate(post);
    }

    @Override
    public boolean update(Post post) {
        post.setUpdatedDate(new Date());

        return this.repository.addOrUpdate(post);
    }

    @Override
    public boolean delete(int id) {
        List<Comment> list = this.commentRepository.getCommentByPostId(id);

        for (Comment c : list) {
            this.commentRepository.delete(c);
        }

        Post post = this.repository.getPostById(id);
        return this.repository.delete(post);
    }

    @Override
    public boolean lockAndUnlock(int id) {
        Post post = this.repository.getPostById(id);
        if (post.getStatus() == true) {
            post.setStatus(false);
        } else {
            post.setStatus(true);
        }
        return this.repository.addOrUpdate(post);
    }

    @Override
    public boolean changeStatus(int id) {
        Post post = this.repository.getPostById(id);
        if (post.getStatus() == true) {
            post.setStatus(false);
        } else {
            post.setStatus(true);
        }
        return this.repository.changeStatus(post);
    }

    @Override
    public Post addP(Post post) {
        post.setCreatedDate(new Date());
        post.setStatus(true);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.getUserByUsername(authentication.getName());
        post.setUserId(user);
        post.setTotalComment(0);
        post.setTotalReaction(0);

        return this.repository.add(post);
    }

    @Override
    public Post updateP(int id, Post post) {
        Post p = this.repository.getPostById(id);
        p.setContent(post.getContent());
        p.setUpdatedDate(new Date());

        return this.repository.add(p);
    }

    @Override
    public List<Post> getPostsByUser(int id) {
        return this.repository.getPostsByUser(id);
    }

    @Override
    public void increaseComment(Post post) {
        if (post.getTotalComment() == null) {
            post.setTotalComment(1);
        } else {
            int total = post.getTotalComment();
            post.setTotalComment(total + 1);
        }

        this.repository.addOrUpdate(post);
    }

}
