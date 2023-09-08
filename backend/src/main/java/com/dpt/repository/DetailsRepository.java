/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository;

import com.dpt.pojo.PostDetails;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface DetailsRepository {

    PostDetails add(PostDetails details);

//    List<PostDetails> get(int userId, int postId);
    List<PostDetails> get(int postId);
}
