/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.pojo.Role;
import com.dpt.service.RoleService;
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
public class RoleController {

    @Autowired
    private RoleService roleService;

    @RequestMapping("/roles")
    public String index(Model model) {
        model.addAttribute("roles", this.roleService.getRoles());
        return "role";
    }

    @GetMapping("/roles/add")
    public String view(Model model) {
        model.addAttribute("role", new Role());
        return "role-details";
    }

    @PostMapping("/roles/add")
    public String add(Model model, @ModelAttribute(value = "role") @Valid Role role, BindingResult result) {
        if (!result.hasErrors()) {
            if (this.roleService.add(role)) {
                return "redirect:/roles";
            }
        }
        model.addAttribute("msg", "Có lỗi xảy ra, vui lòng thử lại...");
        return "role-details";
    }

    @GetMapping("/role-details/{id}")
    public String details(Model model, @PathVariable(value = "id") int id) {
        model.addAttribute("role", this.roleService.getRoleById(id));
        return "role-details";
    }

    @PostMapping("/role-details/{id}")
    public String update(Model model, @ModelAttribute(value = "role") @Valid Role role, BindingResult result) {
        if (!result.hasErrors()) {
            if (this.roleService.update(role)) {
                return "redirect:/roles";
            }
        }
        model.addAttribute("msg", "Có lỗi xảy ra, vui lòng thử lại...");
        return "role-details";
    }
}
