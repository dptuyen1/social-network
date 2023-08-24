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
    public boolean addPost(Post post, User user) {
        post.setCreatedDate(new Date());
        post.setStatus(true);
        post.setUserId(user);
        return this.repository.addOrUpdatePost(post);
    }

    @Override
    public boolean updatePost(Post post) {
        post.setCreatedDate(post.getCreatedDate());
        post.setUpdatedDate(new Date());

        return this.repository.addOrUpdatePost(post);
    }

    @Override
    public boolean deletePost(int id) {
        return this.repository.deletePost(id);
    }
}
