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

    PostDetails update(PostDetails details);

    List<PostDetails> get(int postId);

    PostDetails existedDetails(int userId, int postId);

    boolean delete(PostDetails details);

    PostDetails getDetailsById(int id);
}
