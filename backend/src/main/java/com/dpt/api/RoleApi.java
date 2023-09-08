/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.pojo.Comment;
import com.dpt.pojo.Role;
import com.dpt.service.CommentService;
import com.dpt.service.RoleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
public class RoleApi {

    @Autowired
    private RoleService commentService;

    @GetMapping(path = "/roles")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Role>> list(){
        return new ResponseEntity(this.commentService.getRoles(), HttpStatus.OK);
    }
}
