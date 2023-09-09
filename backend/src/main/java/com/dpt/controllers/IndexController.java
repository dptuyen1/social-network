/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author dptuy
 */
@Controller
public class IndexController {

    @Autowired
    private StatsService statsService;

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("users", this.statsService.countUserByRole());
        return "index";
    }
}
