/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.Comment;
import com.dpt.service.CommentService;
import com.dpt.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dptuy
 */
@RestController
@CrossOrigin
@RequestMapping("/api")
public class CommentApi {

    @Autowired
    private PostService postService;

    @Autowired
    private CommentService commentService;

    @PostMapping(path = "/comments/add", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Comment add(@RequestBody Comment comment) {
        return this.commentService.add(comment);
    }

    @DeleteMapping(path = "/comments/{id}/delete")
    @ResponseStatus(HttpStatus.OK)
    public boolean delete(@PathVariable(value = "id") int id) {
        return this.commentService.delete(id);
    }

    @GetMapping(path = "/comments/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Comment getCommentById(@PathVariable(value = "id") int id) {
        return this.commentService.getCommentById(id);
    }

    @PutMapping(path = "/comments/{id}/edit", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Comment update(@PathVariable(value = "id") int id, @RequestBody Comment comment) {
        return this.commentService.update(id, comment);
    }
}
