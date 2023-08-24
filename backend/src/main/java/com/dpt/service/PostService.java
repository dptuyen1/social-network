/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.Post;
import com.dpt.pojo.User;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface PostService {

    List<Post> getPosts();

    Post getPostById(int id);

    boolean addPost(Post post, User user);

    boolean updatePost(Post post);

    boolean deletePost(int id);
}
