/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.dpt.pojo.Reaction;
import com.dpt.repository.ReactionRepository;
import com.dpt.service.ReactionService;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
public class ReactionServiceImpl implements ReactionService {

    @Autowired
    private ReactionRepository repository;

    @Autowired
    private Cloudinary cloudinary;

    @Override
    public List<Reaction> getReactions() {
        return this.repository.getReactions();
    }

    @Override
    public Reaction getReactionById(int id) {
        return this.repository.getReactionById(id);
    }

    @Override
    public boolean add(Reaction reaction) {
        if (reaction.getFile() != null && !reaction.getFile().isEmpty()) {
            try {
                Map res = this.cloudinary.uploader().upload(reaction.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
                reaction.setIcon(res.get("secure_url").toString());
            } catch (IOException ex) {
                Logger.getLogger(UserServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            reaction.setIcon("https://res.cloudinary.com/dzbcst18v/image/upload/v1693275265/like_ixhhkc.png");
        }

        return this.repository.addOrUpdate(reaction);
    }

    @Override
    public boolean update(Reaction reaction) {
        if (reaction.getFile() != null && !reaction.getFile().isEmpty()) {
            try {
                Map res = this.cloudinary.uploader().upload(reaction.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
                reaction.setIcon(res.get("secure_url").toString());
            } catch (IOException ex) {
                Logger.getLogger(UserServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

        return this.repository.addOrUpdate(reaction);
    }

    @Override
    public boolean delete(Reaction reaction) {
        return this.repository.delete(reaction);
    }

}
