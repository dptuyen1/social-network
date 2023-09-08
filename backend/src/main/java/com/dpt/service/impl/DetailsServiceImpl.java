/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.PostDetails;
import com.dpt.pojo.User;
import com.dpt.repository.DetailsRepository;
import com.dpt.repository.UserRepository;
import com.dpt.service.DetailsService;
import java.util.List;
import javax.persistence.NoResultException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.getUserByUsername(authentication.getName());
        details.setUserId(user);

        return this.repository.add(details);
    }

    @Override
    public List<PostDetails> get(int postId) {
        return this.repository.get(postId);
    }

    @Override
    public PostDetails existedDetails(int userId, int postId) {
        try {
            return this.repository.existedDetails(userId, postId);
        } catch (NoResultException ex) {
            return null;
        }
    }

    @Override
    public boolean delete(int id) {
        PostDetails details = this.repository.getDetailsById(id);
        return this.repository.delete(details);
    }

    @Override
    public PostDetails getDetailsById(int id) {
        return this.repository.getDetailsById(id);
    }

    @Override
    public PostDetails update(int id, PostDetails details) {
        PostDetails d = this.repository.getDetailsById(id);
        d.setReactionId(details.getReactionId());

        return this.repository.update(d);
    }

}
