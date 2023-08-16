/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.pojo.User;
import com.dpt.service.MailService;
import com.dpt.service.UserService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

/**
 *
 * @author dptuy
 */
@Controller
public class SignupController {

    @Autowired
    private UserService userService;

    @Autowired
    private MailService mailService;

    @GetMapping("/signup")
    public String signup(Model model) {
        model.addAttribute("user", new User());
        return "signup";
    }

    @PostMapping("/signup")
    public String addUser(@ModelAttribute(value = "user") @Valid User user,
            BindingResult result, Model model) {
        if (!result.hasErrors()) {
            if (this.userService.addNewUser(user)) {
                this.mailService.sendMail(user.getEmail(), user.getUsername());
                return "redirect:/login";
            }
        } else {
            model.addAttribute("msg", "Đăng ký tài khoản thất bại!");
        }
        return "signup";
    }
}
