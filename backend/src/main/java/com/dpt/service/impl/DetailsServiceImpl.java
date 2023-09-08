/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.PostDetails;
import com.dpt.repository.DetailsRepository;
import com.dpt.repository.UserRepository;
import com.dpt.service.DetailsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
public class DetailsServiceImpl implements DetailsService {

    @Autowired
    private DetailsRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public PostDetails add(PostDetails details) {
        return this.repository.add(details);
    }

//    @Override
//    public List<PostDetails> get(int userId, int postId) {
//        return this.repository.get(userId, postId);
//    }
    @Override
    public List<PostDetails> get(int postId) {
        return this.repository.get(postId);
    }

}
