/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.pojo.Reaction;
import com.dpt.repository.ReactionRepository;
import com.dpt.service.ReactionService;
import java.util.List;
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

    @Override
    public List<Reaction> getReactions() {
        return this.repository.getReactions();
    }

}
