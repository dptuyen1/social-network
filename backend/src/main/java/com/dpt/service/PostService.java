/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.Post;
import java.security.Principal;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface PostService {

    List<Post> getPosts();

    Post getPostById(int id);

    boolean add(Post post, Principal principal);

    boolean update(Post post);

    boolean delete(int id);
}
