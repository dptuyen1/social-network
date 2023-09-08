/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.PostDetails;
import com.dpt.service.DetailsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dptuy
 */
@RestController
@CrossOrigin()
@RequestMapping("/api")
public class DetailsApi {

    @Autowired
    private DetailsService detailsService;

    @PostMapping("/details/add")
    @ResponseStatus(HttpStatus.CREATED)
    public PostDetails add(@RequestBody PostDetails details) {
        return this.detailsService.add(details);
    }

//    @GetMapping("/details/user/{userId}/post/{postId}")
//    public ResponseEntity<List<PostDetails>> get(@PathVariable(value = "userId") int userId, @PathVariable(value = "postId") int postId) {
//        return new ResponseEntity<>(this.detailsService.get(userId, postId), HttpStatus.OK);
//    }
    @GetMapping("/details/post/{postId}")
    public ResponseEntity<List<PostDetails>> get(@PathVariable(value = "postId") int postId) {
        return new ResponseEntity<>(this.detailsService.get(postId), HttpStatus.OK);
    }
}
