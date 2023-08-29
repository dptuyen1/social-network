/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.Post;
import com.dpt.pojo.User;
import com.dpt.repository.PostRepository;
import com.dpt.service.PostService;
import com.dpt.service.UserService;
import java.security.Principal;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    private UserService userService;

    @Override
    public List<Post> getPosts() {
        return this.repository.getPosts();
    }

    @Override
    public Post getPostById(int id) {
        return this.repository.getPostById(id);
    }

    @Override
    public boolean add(Post post, Principal principal) {
        post.setCreatedDate(new Date());
        post.setStatus(true);
        User user = this.userService.getUserByUsername(principal.getName());
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
        Post post = this.repository.getPostById(id);
        return this.repository.delete(post);
    }
}
