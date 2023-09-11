/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.pojo.Role;
import com.dpt.pojo.User;
import com.dpt.service.MailService;
import com.dpt.service.RoleService;
import com.dpt.service.UserService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author dptuy
 */
@Controller
public class AnnounceController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private MailService mailService;

    @RequestMapping("/announce/user/{id}")
    public String indexUser(@PathVariable(value = "id") int id, Model model, @RequestParam(required = false) Map<String, String> params) {
        model.addAttribute("user", this.userService.getUserById(id));

        if (params != null && !params.isEmpty()) {
            String to = params.get("to");
            String subject = params.get("subject");
            String text = params.get("text");

            mailService.sendAnnounce(to, subject, text);
            model.addAttribute("msg", "Đăng thông báo thành công!");
        }

        return "announce";
    }

    @RequestMapping("/announce/role/{id}")
    public String indexRole(@PathVariable(value = "id") int id, Model model, @RequestParam(required = false) Map<String, String> params) {
        Role role = this.roleService.getRoleById(id);

        model.addAttribute("role", role);

        List<User> users = this.userService.getUsersByRole(role);

        if (params != null && !params.isEmpty()) {
            String subject = params.get("subject");
            String text = params.get("text");

            for (User user : users) {
                String to = user.getEmail();
                mailService.sendAnnounce(to, subject, text);
            }
            model.addAttribute("msg", "Đăng thông báo thành công!");
        }

        return "announce";
    }
}
