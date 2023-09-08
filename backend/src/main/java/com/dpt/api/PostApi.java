/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.Comment;
import com.dpt.pojo.Post;
import com.dpt.service.CommentService;
import com.dpt.service.PostService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
public class PostApi {

    @Autowired
    private PostService postService;

    @Autowired
    private CommentService commentService;

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> listPosts() {
        return new ResponseEntity<>(this.postService.getPosts(), HttpStatus.OK);
    }

    @GetMapping("/posts/user/{id}")
    public ResponseEntity<List<Post>> listPostsByUser(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(this.postService.getPostsByUser(id), HttpStatus.OK);
    }

    @GetMapping("/posts/{id}/comments")
    public ResponseEntity<List<Comment>> listComments(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(this.commentService.getCommentsByPostId(id), HttpStatus.OK);
    }

    @PutMapping(path = "/posts/{id}/lock-or-unlock", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public boolean lockOrUnlock(@PathVariable int id) {
        return this.postService.changeStatus(id);
    }

    @DeleteMapping("/posts/{id}/delete")
    @ResponseStatus(HttpStatus.OK)
    public boolean delete(@PathVariable int id) {
        return this.postService.delete(id);
    }

    @PostMapping(path = "/posts/add", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Post add(@RequestBody Post post) {
        return this.postService.addP(post);
    }

    @PutMapping(path = "/posts/{id}/edit", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Post update(@PathVariable(value = "id") int id, @RequestBody Post post) {
        return this.postService.updateP(id, post);
    }

    @GetMapping(path = "/posts/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Post getPostById(@PathVariable(value = "id") int id) {
        return this.postService.getPostById(id);
    }
}
