/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.PostDetails;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface DetailsService {

    PostDetails add(PostDetails details);

    PostDetails update(int id, PostDetails details);

    List<PostDetails> get(int postId);

    PostDetails existedDetails(int userId, int postId);

    boolean delete(int id);

    PostDetails getDetailsById(int id);

}
