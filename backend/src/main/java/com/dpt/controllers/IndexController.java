/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.service.StatsService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author dptuy
 */
@Controller
public class IndexController {

    @Autowired
    private StatsService statsService;

    @RequestMapping("/")
    public String index(Model model, @RequestParam(required = false) Map<String, String> params) {
        model.addAttribute("users", this.statsService.userStats());
        model.addAttribute("posts", this.statsService.postStats(params));
        model.addAttribute("years", this.statsService.getYears());
        model.addAttribute("postsOfYears", this.statsService.postStatsByYear(params));

        return "index";
    }
}
