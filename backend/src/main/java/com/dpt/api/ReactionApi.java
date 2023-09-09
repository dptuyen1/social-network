/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.Reaction;
import com.dpt.service.ReactionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dptuy
 */
@RestController
@CrossOrigin
@RequestMapping("/api")
public class ReactionApi {

    @Autowired
    private ReactionService reactionService;

    @GetMapping("/reactions")
    public ResponseEntity<List<Reaction>> list() {
        return new ResponseEntity<>(this.reactionService.getReactions(), HttpStatus.OK);
    }

//    @DeleteMapping("/reactions/{id}")
//    @ResponseStatus(HttpStatus.ACCEPTED)
//    public boolean delete(@PathVariable(value = "id") int id) {
//        Reaction reaction = this.reactionService.getReactionById(id);
//        return this.reactionService.delete(reaction);
//    }
}
