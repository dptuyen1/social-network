/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.Reaction;
import com.dpt.service.ReactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dptuy
 */
@Controller
@RestController
@CrossOrigin
@RequestMapping("/api")
public class ReactionApi {

    @Autowired
    private ReactionService reactionService;

    @DeleteMapping("/reactions/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public boolean delete(@PathVariable(value = "id") int id) {
        Reaction reaction = this.reactionService.getReactionById(id);
        return this.reactionService.delete(reaction);
    }
}
