/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.Post;
import com.dpt.pojo.User;
import com.dpt.service.PostService;
import com.dpt.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dptuy
 */
@RestController
@RequestMapping("/api")
@CrossOrigin
public class PostApiController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> list() {
        return new ResponseEntity<>(this.postService.getPosts(), HttpStatus.OK);
    }

    @PostMapping("/posts")
    public ResponseEntity<Boolean> addPost(@RequestBody Post post, User user) {
        return new ResponseEntity<>(this.postService.addPost(post, user), HttpStatus.CREATED);
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(this.postService.deletePost(id), HttpStatus.ACCEPTED);
    }
}
