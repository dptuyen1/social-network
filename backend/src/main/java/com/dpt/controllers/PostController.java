/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.pojo.Post;
import com.dpt.service.PostService;
import com.dpt.service.UserService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author dptuy
 */
@Controller
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @RequestMapping("/posts")
    public String index(Model model) {
        model.addAttribute("posts", this.postService.getPosts());
        return "post";
    }

    @RequestMapping("/posts/add")
    public String view(Model model) {
        model.addAttribute("post", new Post());
        model.addAttribute("users", this.userService.getUsers());
        return "post-details";
    }

    @GetMapping("/post-details/{id}")
    public String details(Model model, @PathVariable(value = "id") int id) {
        model.addAttribute("post", this.postService.getPostById(id));
        model.addAttribute("users", this.userService.getUsers());
        return "post-details";
    }

    @PostMapping("/post-details/{id}")
    public String update(Model model, @ModelAttribute(value = "post") @Valid Post post, BindingResult result) throws Exception {
        if (!result.hasErrors()) {
            if (this.postService.updatePost(post)) {
                return "redirect:/posts";
            }
        } else {
            System.err.println(result.toString());
        }

        model.addAttribute("msg", "Có lỗi xảy ra, vui lòng thử lại!");
        model.addAttribute("users", this.userService.getUsers());
        return "post-details";
    }
}
