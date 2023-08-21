/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.Post;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface PostService {

    List<Post> getPosts();

    boolean addPosts(Post post);
}
