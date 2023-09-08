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

    List<Post> getPostsByUser(int id);

    Post getPostById(int id);

    boolean add(Post post);

    boolean update(Post post);

    boolean delete(int id);

    boolean lockAndUnlock(int id);

    boolean changeStatus(int id);

    Post addP(Post post);

    Post updateP(int id, Post post);

    void increaseComment(Post post);
}
