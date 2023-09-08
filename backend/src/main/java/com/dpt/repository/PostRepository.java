/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository;

import com.dpt.pojo.Post;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface PostRepository {

    List<Post> getPosts();

    List<Post> getPostsByUser(int id);

    Post getPostById(int id);

    boolean addOrUpdate(Post post);

    Post add(Post post);

    boolean delete(Post post);

    boolean changeStatus(Post post);
}
