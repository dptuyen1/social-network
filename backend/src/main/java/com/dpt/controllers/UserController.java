/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.pojo.User;
import com.dpt.service.RoleService;
import com.dpt.service.UserService;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author dptuy
 */
@Controller
@PropertySource("classpath:configs.properties")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private Environment env;

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @RequestMapping("/users")
    public String index(Model model, @RequestParam(required = false) Map<String, String> params) {
        model.addAttribute("users", this.userService.getUsers(params));

        int pageSize = Integer.parseInt(this.env.getProperty("page_size"));
        int quantity = this.userService.count();
        model.addAttribute("counter", Math.ceil(quantity * 1.0 / pageSize));
        return "user";
    }

    @RequestMapping("/user-details/{id}")
    public String details(@PathVariable(value = "id") int id, Model model) {
        model.addAttribute("roles", this.roleService.getRoles());
        model.addAttribute("user", this.userService.getUserById(id));
        return "user-details";
    }

    @PostMapping("/user-details/{id}")
    public String update(Model model, @ModelAttribute(value = "user") @Valid User user, BindingResult result) {
        if (!result.hasErrors()) {
            if (this.userService.update(user)) {
                return "redirect:/users";
            }
        }
        model.addAttribute("msg", "Có lỗi xảy ra, vui lòng thử lại...");
        return "user-details";
    }
}
